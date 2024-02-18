// DatabaseManager.js

import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to save a user to AsyncStorage
export const saveUser = async (userData) => {
  try {
    // Get existing users from AsyncStorage
    const existingUsersJSON = await AsyncStorage.getItem("users");
    let existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    // Add the new user to the array of users
    existingUsers.push(userData);

    // Save the updated users array back to AsyncStorage
    await AsyncStorage.setItem("users", JSON.stringify(existingUsers));
    console.log(AsyncStorage.getItem("users"));
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

// Function to get all users from AsyncStorage
export const getUsers = async () => {
  try {
    // Get users from AsyncStorage
    const usersJSON = await AsyncStorage.getItem("users");
    console.log(usersJSON);
    return usersJSON ? JSON.parse(usersJSON) : [];
  } catch (error) {
    console.error("Error getting users:", error);
    return [];
  }
};
export const updateUserElement = async (userId, updatedElement) => {
  try {
    // Get existing users from AsyncStorage
    const existingUsersJSON = await AsyncStorage.getItem("users");
    let existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    // Find the index of the user with the provided userId
    const userIndex = existingUsers.findIndex((user) => user.phone === userId);

    // If user with the provided userId is found
    if (userIndex !== -1) {
      // Update the desired element of the user
      existingUsers[userIndex] = {
        ...existingUsers[userIndex], // Copy existing user data
        ...updatedElement, // Update the desired element
      };

      // Save the updated users array back to AsyncStorage
      await AsyncStorage.setItem("users", JSON.stringify(existingUsers));
    } else {
      console.warn("User not found with id:", userId);
    }
  } catch (error) {
    console.log(usersJSON);
    console.error("Error updating user element:", error);
  }
};
export const getUsername = async (userId) => {
  try {
    // Retrieve the user's data from AsyncStorage
    const usersJSON = await AsyncStorage.getItem("users");
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    // Find the user with the provided userId
    const user = users.find((user) => user.phone === userId);

    // If user with the provided userId is found
    if (user) {
      // Return the username of the user
      return user.name;
    } else {
      console.warn("User not found with id:", userId);
      return null; // Return null if user not found
    }
  } catch (error) {
    console.error("Error getting username:", error);
    return null; // Return null if error occurs
  }
};
export const getUserProfilePic = async (userId) => {
  try {
    // Retrieve the user's data from AsyncStorage
    const usersJSON = await AsyncStorage.getItem("users");
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    // Find the user with the provided userId
    const user = users.find((user) => user.phone === userId);

    // If user with the provided userId is found
    if (user) {
      // Return the profile picture of the user
      return user.profilepic;
    } else {
      console.warn("User not found with id:", userId);
      return null; // Return null if user not found
    }
  } catch (error) {
    console.error("Error getting user profile picture:", error);
    return null; // Return null if error occurs
  }
};
// Function to remove all users from AsyncStorage
export const removeAllUsers = async () => {
  try {
    // Remove users from AsyncStorage
    await AsyncStorage.removeItem("users");
  } catch (error) {
    console.error("Error removing users:", error);
  }
};
