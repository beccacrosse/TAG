import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FriendOption from './FriendOption';
import Images from '../assets/images/images'; // Make sure this path is correct

const FriendSelector = () => {
  const [selectedFriend, setSelectedFriend] = useState('');
  const navigation = useNavigation();

  const handleSelectFriend = (friendName) => {
    setSelectedFriend(friendName);
    navigation.navigate('Missing', { selectedFriendName: friendName });
  };

  
  return (
    <ScrollView>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => handleSelectFriend("Rhea")}>
        <FriendOption userName="Rhea Malhotra" profilePic={Images.rhea} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("Lucy")}>
        <FriendOption userName="Lucy Zimmerman" profilePic={Images.lucy} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("Julia")}>
        <FriendOption userName="Julia Rhee" profilePic={Images.julia} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("Maya")}>
        <FriendOption userName="Maya Alvarez-Coyne" profilePic={Images.maya} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("Dia")}>
        <FriendOption userName="Dia Crosse" profilePic={Images.dia} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("Sam")}>
        <FriendOption userName="Sam Cohn" profilePic={Images.sam} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("DG")}>
        <FriendOption userName="DG Ganesan" profilePic={Images.dg} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("Riley")}>
        <FriendOption userName="Riley Feng" profilePic={Images.riley} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("Rachel")}>
        <FriendOption userName="Rachel Liu" profilePic={Images.rachel} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectFriend("Morgan")}>
        <FriendOption userName="Morgan Moreno" profilePic={Images.morgan} />
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Cutive",
    color:'#00FFFFF',
  },
});

export default FriendSelector;
