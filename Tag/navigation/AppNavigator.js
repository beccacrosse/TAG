import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen1 from '../screens/signup/SignupScreen1';
import SignupScreen2 from '../screens/signup/SignupScreen2';
import SignupScreen3 from '../screens/signup/SignupScreen3';
import SignupScreen4 from '../screens/signup/SignupScreen4';
import SignupScreen5 from '../screens/signup/SignupScreen5';
import SignupScreen6 from '../screens/signup/SignupScreen6';
import JoinorCreateScreen from '../screens/groups/JoinorCreateScreen';
import JoinGroupScreen from '../screens/groups/JoinGroupScreen';
import CreateGroupScreen from '../screens/groups/CreateGroupScreen';
import HomeScreen from '../screens/prompt/HomeScreen'


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup1" component={SignupScreen1} />
      <Stack.Screen name="Signup2" component={SignupScreen2} />
      <Stack.Screen name="Signup3" component={SignupScreen3} />
      <Stack.Screen name="Signup4" component={SignupScreen4} />
      <Stack.Screen name="Signup5" component={SignupScreen5} />
      <Stack.Screen name="Signup6" component={SignupScreen6} />
      <Stack.Screen name="JoinorCreate" component={JoinorCreateScreen} />
      <Stack.Screen name="JoinGroup" component={JoinGroupScreen} />
      <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* other screens */}
    </Stack.Navigator>
  );
}

export default AppNavigator;