import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  Modal,
} from 'react-native';

import {DataStore} from 'aws-amplify';
import {StarDimPost} from '../src/models';
import { useNavigate } from "react-router-dom";

function LoginLayout() {
  
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    let pathTo = path; 
    navigate(pathTo);
  }


const m = new Date(100000000000);

const Header = () => (
  <View style={styles.headerContainer}>
    <View style={styles.insideHContainer}>
    <Image style={styles.personleft} source={require('./images/person.png')}></Image>        
    <Text style={styles.headerTitle}>OpinionNet</Text>
    <Button style={styles.settingsright} onClick={routeChange('./SettingScreen.js')}>
    <Image style={styles.settingsright} source={require('./images/settings.png')}></Image></Button>
  </View>
  </View>
);

const AddPostModal = ({modalVisible, setModalVisible}) => {

  const [Post_text, setDescription] = useState('');

  async function addPost() {
    await DataStore.save(
      new StarDimPost({Post_text}),
    );

    setModalVisible(false);

    setDescription('');
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
            style={styles.modalInput}
          />

          <Pressable onPress={addPost} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Save Post</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const PostList = () => {
  const [posts, setPosts] = useState([]);

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
      </Text>

      <View style={styles.checkboxContainer}>
        <Image style={styles.checkbox} source={require('./images/thumbup.png')}></Image>
        <Text style={styles.votes}>0 </Text>
        <Image style={styles.checkbox} source={require('./images/thumbdown.png')}></Image>     
      </View>
      </Pressable>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={({id}) => id}
      renderItem={PostItem}
    />
  );
};

const Options = () => (
  <View style={styles.horizontalFlex}>
    <Pressable style={styles.choicesContainer} OnPress={() => {}}>
      <Text style={styles.buttonText}>New</Text>
    </Pressable>

    <Pressable style={styles.choicesContainer} OnPress={() => {}}>
      <Text style={styles.buttonText}>Popular</Text>
    </Pressable>

    <Pressable style={styles.choicesContainer} OnPress={() => {}}>
      <Text style={styles.buttonText}>Positive</Text>
    </Pressable>

    <Pressable style={styles.choicesContainer} OnPress={() => {}}>
      <Text style={styles.buttonText}>Negative</Text>
    </Pressable>
  </View>
);

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Header />
      <View style={styles.container}>
          <TextInput 
          placeholder="Search Opinions"
          style={styles.searchInput}
          //value={}
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
    //marginTop: 65,
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
    marginVertical: 4,
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
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 80,
    height: 30,
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
    borderRadius: 1,
    borderWidth: 1,
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
    //paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    pointerEvents: 'none',
    //width: '20%',
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
    //alignSelf: 'center',
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
  // overflowscroll: {
  //   alignItems: 'flex-start',

  //   borderWidth: 1,

  //   borderColor: '#000',

  //   borderStyle: 'solid',

  //   display: 'flex',

  //   height: 676,

  //   marginBottom: -96,

  //   overflow: 'scroll',

  //   paddingTop: 6,

  //   paddingRight: 10,

  //   paddingBottom: 6,

  //   paddingLeft: 10,

  //   width: 343,
  // },

  
  // overlapgroup: {
  //   alignItems: 'flex-start',

  //   backgroundColor: '#2f80ed1a',

  //   borderWidth: 1,

  //   borderColor: '#000',

  //   borderStyle: 'solid',

  //   borderTopColor: '#0000001a',

  //   borderRightColor: '#0000001a',

  //   borderBottomColor: '#0000001a',

  //   borderLeftColor: '#0000001a',

  //   borderTopLeftRadius: 8,

  //   borderTopRightRadius: 8,

  //   borderBottomRightRadius: 8,

  //   borderBottomLeftRadius: 8,

  //   display: 'flex',

  //   gap: 12,

  //   height: 79,

  //   minWidth: 313,

  //   paddingTop: 3,

  //   paddingRight: 6,

  //   paddingBottom: 3,

  //   paddingLeft: 6,
  // },
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
  personleft: {
    height: 40,
    width: 40,
  },
  settingsright: {
    height: 40,
    width: 40,
  }
});
