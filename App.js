import { StatusBar } from "expo-status-bar";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { stackNavigator } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import UserList from "./src/screens/UserList";
import ContactList from "./src/screens/ContactList";

// need to install react navigation

import LandingPage from "./src/screens/LandingPage";

//stack navigator decides what content shows up on screen at any given time

// This is a tool in a react library called react navigation
// used to show different screens to users

const navigator = createStackNavigator(
  {
    Land: LandingPage,
    Login: LoginScreen,
    User: UserList,
    Contact: ContactList,
  },
  {
    headerMode: "none",
  },

  { initialRouteName: "Land" } //"Home",}
);

export default createAppContainer(navigator);
