import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Name1 from "../screens/signup/Name1";
import Birthday2 from "../screens/signup/Birthday2";
import ProfilePic3 from "../screens/signup/ProfilePic3";
import Handwriting4 from "../screens/signup/Handwriting4";
import Theme5 from "../screens/signup/Theme5";
import Phone6 from "../screens/signup/Phone6";
import JoinorCreateScreen from "../screens/groups/JoinorCreateScreen";
import JoinGroupScreen from "../screens/groups/JoinGroupScreen";
import CreateGroupScreen from "../screens/groups/CreateGroupScreen";
import HomeScreen from "../screens/prompt/HomeScreen";
import TagsScreen from "../screens/profile/TagsScreen";
import ScrapsScreen from "../screens/profile/ScrapsScreen";
import LoginScreen from "../screens/signup/LoginScreen0";
import MyScrapsScreen from "../screens/myProfile/MyScrapsScreen";
import MyTagsScreen from "../screens/myProfile/MyTagsScreen";
import missing from "../screens/missing";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // This hides the header globally for all screens
      }}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen name="Missing" component={missing} />
      <Stack.Screen name="Name1" component={Name1} />
      <Stack.Screen name="Birthday2" component={Birthday2} />
      <Stack.Screen name="ProfilePic3" component={ProfilePic3} />
      <Stack.Screen name="Handwriting4" component={Handwriting4} />
      <Stack.Screen name="Theme5" component={Theme5} />
      <Stack.Screen name="Phone6" component={Phone6} />
      <Stack.Screen name="JoinorCreate" component={JoinorCreateScreen} />
      <Stack.Screen name="JoinGroup" component={JoinGroupScreen} />
      <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TagsScreen" component={TagsScreen} />
      <Stack.Screen name="ScrapsScreen" component={ScrapsScreen} />
      <Stack.Screen name="MyTagsScreen" component={MyTagsScreen} />
      <Stack.Screen name="MyScrapsScreen" component={MyScrapsScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
