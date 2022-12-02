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

import {DataStore, input, Predicates, SortDirection} from 'aws-amplify';
import {StarDimPost, StarFactOpinion} from '../src/models';

const AddPod = () => {
    
    return (
      <>

        <Options />
  
        <PostList />
  
        <Pressable
          onPress={() => {
            
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
  
  export default AddPost;