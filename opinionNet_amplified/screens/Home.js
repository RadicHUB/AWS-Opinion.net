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

import {StarFactOpinion} from '../src/models';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>OpinionNet</Text>
  </View>
);

const AddOpinionModal = ({modalVisible, setModalVisible}) => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  async function addOpinion() {
    await DataStore.save(
      new StarFactOpinion({title, description, isComplete: false}),
    );

    setModalVisible(false);

    setTitle('');

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
            onChangeText={setTitle}
            placeholder="Title"
            style={styles.modalInput}
          />

          <TextInput
            onChangeText={setDescription}
            placeholder="Description"
            style={styles.modalInput}
          />

          <Pressable onPress={addOpinion} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Save Opinion</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const OpinionList = () => {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    const subscription = DataStore.observeQuery(StarFactOpinion).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;

        setOpinions(items);
      },
    );

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  async function deleteOpinion(opinion) {
    try {
      await DataStore.delete(opinion);
    } catch (e) {
      console.log(`Delete failed: ${e}`);
    }
  }

  async function setComplete(updateValue, opinion) {
    await DataStore.save(
      StarFactOpinion.copyOf(opinion, updated => {
        updated.isComplete = updateValue;
      }),
    );
  }

  const OpinionItem = ({item}) => (
    <Pressable
      onLongPress={() => {
        deleteOpinion(item);
      }}
      onPress={() => {
        setComplete(!item.isComplete, item);
      }}
      style={styles.postContainer}>
      <Text>
        <Text style={styles.postHeading}>{item.name}</Text>

        {`\n${item.description}`}
      </Text>

      <Text
        style={[styles.checkbox, item.isComplete && styles.completedCheckbox]}>
        {item.isComplete ? '✓' : ''}
      </Text>
    </Pressable>
  );

  return (
    <FlatList
      data={opinions}
      keyExtractor={({id}) => id}
      renderItem={OpinionItem}
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

      <OpinionList />

      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={[styles.buttonContainer, styles.floatingButton]}>
        <Text style={styles.buttonText}>+ Add Opinion</Text>
      </Pressable>

      <AddOpinionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

// const HomeScreen = () => {

//     return (

//         <View style={styles.horizontal}>

//             <View style={styles.homescreen}>

//                 <View style={styles.homepagedesign}>

//                     <View style={styles.frame106}>

//                     <View style={styles.new}>

//                         <Button onPress={() => {}} title="New" color="#841584"/>

//                     </View>

//                     <View style={styles.popular}>

//                         <Button onPress={() => {}} title="Popular" color="#fff" />

//                     </View>

//                     <View style={styles.positive}>

//                         <Button onPress={() => {}} title="Positive" color="#fff" />

//                     </View>

//                     <View style={styles.negative}>

//                         <Button onPress={() => {}} title="Negative" color="#841584" />

//                     </View>

//                 </View>

//             <View style={styles.title}>

//             <Text style={styles.opinion}>Opinion.</Text>

//             <Text style={styles.net}>net</Text>

//             </View>

//         </View>

//         <View style={styles.modaldialog}>

//             <View style={styles.overflowscroll}>

//             <View style={styles.postexample}>

//                 <View style={styles.overlapgroup}>

//                 <Image style={styles.groupies} source="groupies.jpg"/>

//                 <View style={styles.flexcol}>

//                 <Text style={styles.mocktitle}>

//                     This is a mock post title

//                 </Text>

//                 <View style={styles.flexrow}>

//                     <Text style={styles.mockpost}>

//                     This post can be 36 characters

//                     </Text>

//                     <View style={styles.voting}>

//                     <Image style={styles.increment} source='increment.png'/>

//                     <Text style={styles.votes}>0</Text>

//                     <Image style={styles.decrement} source='decrement.jpg' />

//                     </View>

//                 </View>

//                 </View>

//             </View>

//             </View>

//         </View>

//         </View>

//         <View style={styles.bottomframe}>

//         <View style={styles.framehomebox}>

//             <Image style={styles.chat} source="person.jpg" />

//             <View style={styles.background}></View>

//             <Image style={styles.person} source="groupies.jpg"/>

//             <Image style={styles.addPost} source="increment.png"/>

//         </View>

//         </View>

//     </View>

//     </View>

// );

// };

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4696ec',

    paddingTop: Platform.OS === 'ios' ? 44 : null,
  },
  container: {
    padding: 5,
    //marginTop: 65,
    alignItems: 'center'
  },
  searchInput: {
    height: 100,
    width: '100%',
    //padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#000',
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

  postHeading: {
    fontSize: 20,

    fontWeight: '600',
  },

  checkbox: {
    borderRadius: 2,

    borderWidth: 2,

    fontWeight: '700',

    height: 20,

    marginLeft: 'auto',

    textAlign: 'center',

    width: 20,
  },

  completedCheckbox: {
    backgroundColor: '#000',

    color: '#fff',
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


    paddingHorizontal: 10,
  },

  choicesContainer: {
    //alignSelf: 'center',
    backgroundColor: '#DCDCDC',
    //borderRadius: 99,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,

  },

  floatingButton: {
    position: 'absolute',

    bottom: 44,

    elevation: 6,

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

  screen: {
    display: 'contents',

    textDecorationLine: 'none',

    textDecorationColor: '#000',

    textDecorationStyle: 'solid',
  },

  horizontalFlex: {
    display: 'flex',
    paddingHorizontal: 8,
    
    flexDirection: 'row',

    justifyContent: 'space-between',

    pointerEvents: 'none',

    width: '100%',
    
  },

  homescreen: {
    alignItems: 'flex-start',

    backgroundColor: '#fff',

    display: 'flex',

    flexDirection: 'column',

    gap: 25,

    height: 812,

    overflow: 'hidden',

    width: 367,
  },

  homepagedesign: {
    alignItems: 'flex-start',

    display: 'flex',

    gap: 56,

    height: 73,

    marginLeft: 23,

    marginTop: 27,

    minWidth: 213,
  },

  frame106: {
    alignItems: 'flex-end',

    alignSelf: 'flex-end',

    borderWidth: 1,

    borderColor: '#000',

    borderStyle: 'solid',

    display: 'flex',

    gap: 36,

    height: 25,

    minWidth: 34,
  },

  // new: {

  //     alignItems: 'flex-start',

  //     leftAlign: 10,

  //     backgroundColor: '#dff',

  //     borderWidth: 1,

  //     borderColor: '#000',

  //     borderStyle: 'solid',

  //     display: 'flex',

  //     height: 26,

  //     marginBottom: -1.46,

  //     minWidth: 38,

  // },

  // popular: {

  //     alignItems: 'flex-start',

  //     backgroundColor: '#fff',

  //     borderWidth: 1,

  //     borderColor: '#000',

  //     borderStyle: 'solid',

  //     borderTopLeftRadius: 4,

  //     borderTopRightRadius: 4,

  //     borderBottomRightRadius: 4,

  //     borderBottomLeftRadius: 4,

  //     shadowOffset: {

  //         width: 0,

  //         height: 4,

  //     },

  //     shadowRadius: 32,

  //     shadowColor: '#4660871a',

  //     shadowOpacity: 1,

  //     display: 'flex',

  //     height: 46,

  //     marginBottom: -1.46,

  //     overflow: 'hidden',

  //     paddingTop: 3,

  //     paddingRight: 8,

  //     paddingBottom: 3,

  //     paddingLeft: 8,

  //     width: 76,

  // },

  // positive: {

  //     alignItems: 'flex-start',

  //     backgroundColor: '#fff',

  //     borderWidth: 1,

  //     borderColor: 'black',

  //     borderStyle: 'solid',

  //     borderTopLeftRadius: 4,

  //     borderTopRightRadius: 4,

  //     borderBottomRightRadius: 4,

  //     borderBottomLeftRadius: 4,

  //     shadowOffset: {

  //         width: 0,

  //         height: 4,

  //     },

  //     shadowRadius: 32,

  //     shadowColor: '#4660871a',

  //     shadowOpacity: 1,

  //     display: 'flex',

  //     height: 26,

  //     marginBottom: -1.46,

  //     overflow: 'hidden',

  //     paddingTop: 3,

  //     paddingRight: 8,

  //     paddingBottom: 3,

  //     paddingLeft: 8,

  //     width: 52,

  // },

  // negative: {

  //     alignItems: 'flex-start',

  //     backgroundColor: '#fff',

  //     borderWidth: 1,

  //     borderColor: '#000',

  //     borderStyle: 'solid',

  //     borderTopLeftRadius: 4,

  //     borderTopRightRadius: 4,

  //     borderBottomRightRadius: 4,

  //     borderBottomLeftRadius: 4,

  //     shadowOffset: {

  //         width: 0,

  //         height: 4,

  //     },

  //     shadowRadius: 32,

  //     shadowColor: '#4660871a',

  //     shadowOpacity: 1,

  //     display: 'flex',

  //     height: 26,

  //     marginBottom: -1.46,

  //     overflow: 'hidden',

  //     paddingTop: 3,

  //     paddingRight: 8,

  //     paddingBottom: 3,

  //     paddingLeft: 8,

  //     width: 6,

  // },

  title: {
    color: 'transparent',

    fontWeight: '500',

    letterSpacing: 0,

    lineHeight: 'normal',

    minHeight: 34,

    textAlign: 'center',

    width: 12,
  },

  modeldialog: {
    alignItems: 'flex-end',

    backgroundColor: '#000',

    borderColor: '#00f',

    borderRadius: 12,

    display: 'flex',

    height: 580,

    justifyContent: 'center',

    width: 347,
  },

  overflowscroll: {
    alignItems: 'flex-start',

    borderWidth: 1,

    borderColor: '#000',

    borderStyle: 'solid',

    display: 'flex',

    height: 676,

    marginBottom: -96,

    overflow: 'scroll',

    paddingTop: 6,

    paddingRight: 10,

    paddingBottom: 6,

    paddingLeft: 10,

    width: 343,
  },

  postexample: {
    alignItems: 'flex-start',

    borderWidth: 1,

    borderColor: '#000',

    borderStyle: 'solid',

    display: 'flex',

    marginLeft: 1,

    minWidth: 322,

    paddingTop: 0,

    paddingRight: 4,

    paddingBottom: 0,

    paddingLeft: 4,
  },

  overlapgroup: {
    alignItems: 'flex-start',

    backgroundColor: '#2f80ed1a',

    borderWidth: 1,

    borderColor: '#000',

    borderStyle: 'solid',

    borderTopColor: '#0000001a',

    borderRightColor: '#0000001a',

    borderBottomColor: '#0000001a',

    borderLeftColor: '#0000001a',

    borderTopLeftRadius: 8,

    borderTopRightRadius: 8,

    borderBottomRightRadius: 8,

    borderBottomLeftRadius: 8,

    display: 'flex',

    gap: 12,

    height: 79,

    minWidth: 313,

    paddingTop: 3,

    paddingRight: 6,

    paddingBottom: 3,

    paddingLeft: 6,
  },

  groupies: {
    alignSelf: 'center',

    height: 30,

    marginBottom: 3,

    width: 30,
  },

  flexcol: {
    alignItems: 'flex-start',

    display: 'flex',

    flexDirection: 'column',

    minHeight: 65,

    width: 252,
  },

  mocktitle: {
    height: 24,

    letterSpacing: 0,

    width: 252,
  },

  flexrow: {
    alignItems: 'flex-start',

    display: 'flex',

    gap: 37,

    height: 41,

    minWidth: 158,
  },

  mockpost: {
    height: 40,

    letterSpacing: 0,

    width: 89,
  },

  voting: {
    alignItems: 'center',

    alignSelf: 'flex-end',

    borderWidth: 1,

    borderColor: '#000',

    borderStyle: 'solid',

    display: 'flex',

    minWidth: 32,
  },

  increment: {
    height: 32,

    width: 32,
  },

  votes: {
    height: 23,

    letterSpacing: 0,

    marginBottom: 1,

    marginLeft: 8,

    textAlign: 'center',

    width: 18,
  },

  decrement: {
    height: 32,

    marginLeft: 9,

    width: 32,
  },

  bottomframe: {
    alignItems: 'flex-start',

    borderWidth: 1,

    borderColor: '#000',

    borderStyle: 'solid',

    display: 'flex',

    minWidth: 100,
  },

  framehomebox: {
    alignItems: 'center',

    backgroundColor: '#fff',

    borderWidth: 1,

    borderColor: '#000',

    borderStyle: 'solid',

    display: 'flex',

    height: 86,

    justifyContent: 'flex-end',

    minWidth: 325,
  },

  chat: {
    height: 24,

    width: 24,
  },

  background: {
    backgroundColor: '#ddf',

    borderWidth: 1,

    borderColor: '#000',

    borderStyle: 'solid',

    borderTopLeftRadius: 28,

    borderTopRightRadius: 28,

    borderBottomRightRadius: 28,

    borderBottomLeftRadius: 28,

    height: 56,

    marginLeft: 53,

    width: 56,
  },

  person: {
    height: 24,

    marginLeft: 69,

    width: 24,
  },

  addPost: {
    alignSelf: 'flex-end',

    height: 24,

    marginBottom: -60,

    marginLeft: 94,

    width: 24,
  },
});
