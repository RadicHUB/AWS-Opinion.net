import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  Button,
  Modal,
} from 'react-native';

import {DataStore, Predicates, SortDirection} from 'aws-amplify';
import {StarDimPost, StarFactOpinion} from '../src/models';

import axios from 'axios';

const apikey = "05f30b8a-6e95-4edc-9272-becb944a54fb";

var sort = "new";
const m = new Date(100000000000);

const Header = () => (
  <View style={styles.headerContainer}>
    <View style={styles.insideHContainer}>
    <Image style={styles.icons} source={require('./images/home.png')}></Image>        
    <Text style={styles.headerTitle}>OpinionNet</Text>
    <Image style={styles.icons} source={require('./images/person.png')}></Image>
  </View>
  </View>
);

const AddPostModal = ({modalVisible, setModalVisible}) => {

  const [Post_text, setDescription] = useState('');
  const [Post_sentiment, setSentiment] = useState('');

  async function addPost() {

    if(Post_text.length < 1) {
      console.log('Your text is less than what is required.');
    }
    else {
      await DataStore.save(
        new StarDimPost({Post_text,
                  Post_posting_date: new Date().toISOString(),
                  Post_sentiment,
                  // Post_closest,
                  // Post_classify,
                  }),
      );
    }

    setModalVisible(false);

    setDescription('');

    setSentiment('');

  }

  async function analyzeMe() {
    var locals = "";
    var localsum = [];
    const config = {
          method: "POST",
          url: "https://api.oneai.com/api/v0/pipeline",
          headers: {
            "api-key": apikey,
            "Content-Type": "application/json",
          },
          data: {
            input: Post_text,
            input_type: "article",
            content_type: "text/plain",
            output_type: "json",
            steps: [
              {
                skill: "sentiments"
              },
            ],
          },
        };
    axios(config)
      .then((response) => {
      console.log(JSON.stringify(response.data));
      locals = JSON.stringify(response.data.output[0].labels[0].value);
      console.log(locals);
      setSentiment(locals);
      })
      .catch((error) => {
      console.log(error);
      console.log(error.response.data);
      });

      const configSum = {
        method: "POST",
        url: "https://api.oneai.com/api/v0/pipeline",
        headers: {
          "api-key": apikey,
          "Content-Type": "application/json",
        },
        data: {
          input: Post_text,
          input_type: "article",
          content_type: "text/plain",
          output_type: "json",
          steps: [
            {
              skill: "article-topics"
            }
          ],
        },
      };
  axios(configSum)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    localsum = JSON.stringify(response.data.output[0].labels[0].value);
    console.log(localsum);
    topics = [String];
    for(i = 0; i <= (response.data.output.length + 1); i++){
      console.log(response.data.output[0].labels[i].value);
      topics[i] = response.data.output[0].labels[i].value;
      console.log(topics[i]);
    }
    })
    .catch((error) => {
    console.log(error);
    });

    addPost();
        
  }
  
  function closeModal() {
    setModalVisible(false);
  }

  return (
    <Modal
      animationType="fade"
      onRequestClose={closeModal}
      transparent
      visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <Pressable onPress={closeModal} style={styles.modalDismissButton}>
            <Text style={styles.modalDismissText}>X</Text>
          </Pressable>

          <TextInput
            onChangeText={setDescription}
            placeholder="Description"
            maxLength={100}
            style={styles.modalInput}
            multiline={true}
          />

          <Pressable onPress={analyzeMe} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Save Post</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};



// async function createOpinions() {
//   const postsNew = await DataStore.query(StarDimPost, Predicates.ALL, {
//     sort: s => s.Post_posting_date(SortDirection.DESCENDING)
//     })

// }

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);

  async function sortNew() {
    const postsNew = await DataStore.query(StarDimPost, Predicates.ALL, {
      sort: s => s.Post_posting_date(SortDirection.DESCENDING)
      })
    setPosts(postsNew);
  }
  
    // await DataStore.save(
    //   new StarDimVote({Vote_positive: upVotes,
    //                 Vote_negative: downVotes,
    //                 }),
    // );
    // setUpVotes(0);
    // setDownVotes(0);


  // async function sortPopular() {
  //   const postsPopular = await DataStore.query(StarDimPost, Predicates.ALL, {
  //     sort: s => s.XXX(SortDirection.DECENDING)
  //     })
  //   setPosts(postsPopular);
  // }
  async function sortPositive() {
    const postsPositive = await DataStore.query(await DataStore.query(StarDimPost, c => c.Post_sentiment.eq('POS')));
    setPosts(postsPositive);
  }
  async function sortNegative() {
    const postsNeg = await DataStore.query(await DataStore.query(StarDimPost, c => c.Post_sentiment.eq('NEG')));
    setPosts(postsNeg);
  }
  
  useEffect(() => {
    const subscription = DataStore.observeQuery(StarDimPost).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;
        setPosts(items);
      },
    );

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  async function deletePost(post) {
    try {
      await DataStore.delete(post);
    } catch (e) {
      console.log(`Delete failed: ${e}`);
    }
  }

  async function setComplete(updateValue, post) {
    await DataStore.save(
      StarDimPost.copyOf(post, updated => {
        updated.isComplete = updateValue;
      }),
    );
  }

  async function updateUpVote(post) {

  }

  async function updateDownVote(post) {
    
  }

  const PostItem = ({item}) => (

    <Pressable
      onLongPress={() => {
        deletePost(item);
      }}
      onPress={() => {
        setComplete(!item.isComplete, item);
      }}
      style={styles.postContainer}>
      <Text>
        <Text style={styles.postHeading}>{item.name}</Text>

        {`\n${item.Post_text}`}
        {`\n${item.Post_posting_date}`}
        {`\n${item.Post_sentiment}`}

      </Text>
      <View style={styles.checkboxContainer}>
        <Pressable onPress={() => { upVotes++; }}>
          <Image style={styles.checkbox} source={require('./images/thumbup.png')}></Image>
        </Pressable>
        <Text style={styles.votes}>{upVotes}</Text>
        <Pressable onPress={() => { deletePost(item); }}>
          <Image style={styles.checkbox} source={require('./images/thumbdown.png')}></Image>
        </Pressable>    
        <Text style={styles.votes}>{downVotes}</Text>
      </View>
      </Pressable>
  );
  
  async function setOpinionators() {
    const posts = await DataStore.query(StarDimPost);
    const output = "";
    for (post in posts) {
      output=analyze(post);
      console.log(output);
    }
    setOpinions(post);
  
  }

  if (sort == "new") {
    sortNew();
  } else if (sort == "popular") {
    //sortPopular();
  } 
  else if (sort == "negative") {
    sortNegative();
  }
  else if (sort == "positive") {
    sortPositive();
  }
  else {
    posts = posts;
  }
  
  return (
    <FlatList
      data={posts}
      keyExtractor={({id}) => id}
      renderItem={PostItem}
    />
  );
};

const Options = () => {
  
  return(
  <View style={styles.horizontalFlex}>
    <Pressable onPress={() => { sort = "new"; }} style={styles.choicesContainer} >
      <Text style={styles.buttonText}>New</Text>
    </Pressable> 
    <Pressable onPress={() => { sort = "popular"; }} style={styles.choicesContainer} >
      <Text style={styles.buttonText}>Popular</Text>
    </Pressable> 
    <Pressable onPress={() => { sort = "positive"; }} style={styles.choicesContainer} >
      <Text style={styles.buttonText}>Positive</Text>
    </Pressable> 
    <Pressable onPress={() => { sort = "negative"; }} style={styles.choicesContainer} >
      <Text style={styles.buttonText}>Negative</Text>
    </Pressable> 
  </View>
  )
};


const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <>
      <Header />
      <View style={styles.container}>
          <TextInput 
          placeholder="Search Opinions"
          style={styles.searchInput}
          // value={postString}
          // onChange={setSearch(postString)}
          />
      </View>

      <Options />

      <PostList />

      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={[styles.buttonContainer, styles.floatingButton]}>
        <Text style={styles.buttonText}>+ Add Post</Text>
      </Pressable>

      <AddPostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4696ec',
    paddingTop: Platform.OS === 'ios' ? 44 : null,
  },
  insideHContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '75%',
    paddingTop: 20,
  },
  container: {
    padding: 5,
    alignItems: 'center'
  },
  searchInput: {
    height: 100,
    width: '100%',
    flex: 4,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#4696ec',
    borderRadius: 8,
    color: '#000'
  },
  pressed: {
    activeOpacity: 0.6,
    underlayColor: "#DDDDDD"
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 16,
    textAlign: 'center',
  },
  postContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 4,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 90,
    height: 40,
    borderRadius: 2,
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginRight: 0,
    marginLeft: 'auto',
  },
  postHeading: {
    fontSize: 20,
    fontWeight: '600',
  },
  checkbox: {
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: 'center',
    height: 20,
    width: 20,
  },
  votes: {
    fontWeight: '700',
    height: 20,
    textAlign: 'center',
    width: 10,
  },
  PostContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    pointerEvents: 'none',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    padding: 16,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#4696ec',
    borderRadius: 99,
    paddingHorizontal: 20,
  },
  choicesContainer: {
    backgroundColor: '#4696ec',
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 44,
    elevation: 4,
    shadowOffset: {
      height: 4,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  modalInnerContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 16,
  },
  modalInput: {
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  modalDismissButton: {
    marginLeft: 'auto',
  },
  modalDismissText: {
    fontSize: 20,
    fontWeight: '700',
  },
  horizontalFlex: {
    display: 'flex',
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    pointerEvents: 'none',
    width: '100%',
  },
  bottomframe: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#DCDCDC',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 90,
    justifyContent: 'space-between',
    minWidth: 325,
  },
  icons: {
    height: 40,
    width: 40,
  },
});
