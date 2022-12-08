import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  Button,
  Modal,
} from 'react-native';

import {DataStore, input, Predicates, SortDirection, Auth} from 'aws-amplify';
import {StarDimPost, StarFactOpinion} from '../src/models';

import axios from 'axios';

const apikey = '05f30b8a-6e95-4edc-9272-becb944a54fb';

var sort = 'new';

// Create the AddPostModal which is the pop-up that appears when you click "+ Add Post"
// The return statement in this block of code contains the components that are added to the HomeScreen UI
// The rest of the code block contains a series of functions that are executed when the user inputs text
// or submits a new post.

const AddPostModal = ({modalVisible, setModalVisible}) => {
  const [Post_text, setDescription] = useState('');
  const [opinions, setOpinions] = useState([]);
  var Post_classify = '';
  var Post_sentiment = '';

  // Get the current user to display on a post
  async function getUserInfo() {
    const user = await Auth.currentAuthenticatedUser();
    console.log('attributes:', user.attributes.preferred_username);
    userName = user.attributes.preferred_username.slice(0,10);
    console.log(userName);
  }

  getUserInfo();

  // Get all the Opinions in the database and assign it to a state variable
  // useEffect runs the function during every rerender
  useEffect(() => {
    const subscription = DataStore.observeQuery(StarFactOpinion).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;
        setOpinions(items);
        console.log(items);
      },
    );

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  // Analyze a Post with an NLP every time the Post_text variable is updated
  useEffect(() => {
    const timer = setTimeout(() => {
      analyzeMe();
    }, 1000);

    return () => clearTimeout(timer);
  }, [Post_text]);

  // Analyze the current Post_text for sentiment and topics
  function analyzeMe() {
    let localTopics = [String];

    // Axios request configuration for sentiment
    const config = {
      method: 'POST',
      url: 'https://api.oneai.com/api/v0/pipeline',
      headers: {
        'api-key': apikey,
        'Content-Type': 'application/json',
      },
      data: {
        input: Post_text,
        input_type: 'article',
        content_type: 'text/plain',
        output_type: 'json',
        steps: [
          {
            skill: 'sentiments',
          },
        ],
      },
    };
    
    // Send the request and get the Post_sentiment reponse to a variable
    axios(config)
      .then(response => {
        Post_sentiment = response.data.output[0].labels[0].value;
      })
      .catch(error => {
        console.log(error);
      });

    // Axios request configuration for topics
    const configSum = {
      method: 'POST',
      url: 'https://api.oneai.com/api/v0/pipeline',
      headers: {
        'api-key': apikey,
        'Content-Type': 'application/json',
      },
      data: {
        input: Post_text,
        input_type: 'article',
        content_type: 'text/plain',
        output_type: 'json',
        steps: [
          {
            skill: 'article-topics',
          },
        ],
      },
    };

    // Send the request and get the Post_classify reponse to a variable
    axios(configSum)
      .then(response => {
        for (i = 0; i <= response.data.output.length; i++) {
          localTopics[i] = response.data.output[0].labels[i].value;
          console.log(localTopics[i]);
          Post_classify += localTopics[i];
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Add a new post to the database with the parameters necessary
  async function addPost() {

    // Only add a post if the user input is more than 10 characters
    if (Post_text.length < 10) {
      console.log('Your text is less than what is required.');
    } else {
      const newPost = await DataStore.save(
        new StarDimPost({
          Post_text,
          Post_posting_date: new Date().toISOString(),
          Post_classify,
          Post_sentiment,
          Post_user: userName,
        }),
      );

      // Once each post is saved, check if a similar opinion exists
      checkOpinions(newPost);
    }

    // Disable/hide the add post pop up
    setModalVisible(false);
  }

  // Delete the post from the database
  async function deletePost(post) {
    try {
      await DataStore.delete(post);
    } catch (e) {
      console.log(`Delete failed: ${e}`);
    }
  }

  // For the newPost, determine if the topics and sentiment match an opinion already
    // If they do, an opinion exists so continue, otherwise, create an Opinion
  async function checkOpinions(newPost) {
    for (var i = 0; i < opinions.length; i++) {
      // if (opinions[i].XXX contains Post_classify) {
      //   if (opinions[i].sentiment == Post_sentiment) {
      //     continue;
      //   }
      //   else {
      await DataStore.save(new StarFactOpinion({PostKey: newPost.id}));
      deletePost(newPost);
    }
  }

  function closeModal() {
    setModalVisible(false);
  }

  // Pop up modal that appears when the AddPost button is clicked
    // with the logic to run the above functions
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
            placeholder="Description"
            maxLength={100}
            style={styles.modalInput}
            multiline={true}
            onChangeText={setDescription}
          />

          <Pressable onPress={addPost} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Save Post</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

// Create a list of Opinions to display
function PostList() {
  const [posts, setPosts] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);

  // Sort all Posts in the databse by date using the GraphQL query
  async function sortNew() {
    const postsNew = await DataStore.query(StarDimPost, Predicates.ALL, {
      sort: s => s.Post_posting_date(SortDirection.DESCENDING),
    });
    setPosts(postsNew);
  }
  
  // Sort all Posts in the databse by likes using the GraphQL query
  // async function sortPopular() {
  //   const postsPopular = await DataStore.query(StarDimPost, Predicates.ALL, {
  //     sort: s => s.XXX(SortDirection.DECENDING)
  //     })
  //   setPosts(postsPopular);
  // }

  // Sort all Posts in the databse with positive sentiment using the GraphQL query
  async function sortPositive() {
    const postsPositive = await DataStore.query(
      await DataStore.query(StarDimPost, c => c.Post_sentiment.eq('POS')),
    );
    setPosts(postsPositive);
  }

  // Sort all Posts in the databse with positive sentiment using the GraphQL query
  async function sortNegative() {
    const postsNeg = await DataStore.query(
      await DataStore.query(StarDimPost, c => c.Post_sentiment.eq('NEG')),
    );
    setPosts(postsNeg);
  }

  useEffect(() => {
    const subscription = DataStore.observeQuery(StarDimPost).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;
        setPosts(items);
      },
    );

    // Unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  // Delete the post from the database
  async function deletePost(post) {
    try {
      await DataStore.delete(post);
    } catch (e) {
      console.log(`Delete failed: ${e}`);
    }
  }

  // Create an individual Post to be displayed in the PostList
  const PostItem = ({item}) => (
    <Pressable
      onLongPress={() => {
        deletePost(item);
      }}
      style={styles.postContainer}>
      <Text>
        <Text style={styles.postHeading}>{item.name}</Text>

        {`\n${item.Post_user}`}
        {`\n${item.Post_text}`}
        {`\n${item.Post_sentiment}`}

      </Text>
      <View style={styles.checkboxContainer}>
        <Pressable
          onPress={() => {
            upVotes++;
          }}>
          <Image
            style={styles.checkbox}
            source={require('./images/thumbup.png')}></Image>
        </Pressable>
        <Text style={styles.votes}>{upVotes}</Text>
        <Pressable
          onPress={() => {
            deletePost(item);
          }}>
          <Image
            style={styles.checkbox}
            source={require('./images/thumbdown.png')}></Image>
        </Pressable>
        <Text style={styles.votes}>{downVotes}</Text>
      </View>
    </Pressable>
  );

  // When each option is clicked, the status of "sort" is updated.
    // Depending on the state of "sort", determine how the posts will be sorted
  if (sort == 'new') {
    sortNew();
  } else if (sort == 'popular') {
    //sortPopular();
  } else if (sort == 'negative') {
    sortNegative();
  } else if (sort == 'positive') {
    sortPositive();
  } else {
    posts = posts;
  }

  return (
    <FlatList data={posts} keyExtractor={({id}) => id} renderItem={PostItem} />
  );
}

// Return the screen that will be rendered with all necessary functionality
const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <Button title="Sign Out" onPress={() => Auth.signOut()} />
      <View style={styles.container}>
        <TextInput
          placeholder="Search Opinions"
          //style={styles.searchInput}
          // value={postString}
          // onChange={setSearch(postString)}
        />
      </View>

      <View style={styles.horizontalFlex}>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
          style={[styles.buttonContainer, styles.floatingButton]}>
          <Text style={styles.buttonText}>+ Add Post</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            sort = 'new';
          }}
          style={styles.choicesContainer}>
          <Text style={styles.buttonText}>New</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            sort = 'positive';
          }}
          style={styles.choicesContainer}>
          <Text style={styles.buttonText}>Positive</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            sort = 'negative';
          }}
          style={styles.choicesContainer}>
          <Text style={styles.buttonText}>Negative</Text>
        </Pressable>
      </View>

      <PostList />

      <AddPostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default HomeScreen;

// Styling for all components
// React CSS is slightly different than normal CSS
const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
  },
  searchInput: {
    height: 100,
    width: '100%',
    flex: 4,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#4696ec',
    borderRadius: 8,
    color: '#000',
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
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    padding: 16,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#4696ec',
  },
  choicesContainer: {
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
  },
  floatingButton: {
    backgroundColor: '#4696ec',
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
