import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

const LandingPage = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.welcomeText}>Welcome To Connect</Text>
      <Text style = {styles.bodyText}>
        Welcome To Connect! A video platform made for nursing homes and
        residents. With Connect, you can add multiple user to the same account.
      </Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => props.navigation.navigate("Login")}
        title="Get Started"
      />

    </SafeAreaView>
  );
};

// TODO: when page for Sign in is complete, connect to the button.
// Modify names of attributes and variables.
//Todo: create a styleSheet for the welcome text, modify the button and format the layout
//Create an src folder.
// create new app.js

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E4E9F",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText:{
    
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 30
    
    
  },
  bodyText:{
    
    alignItems: "center",
    justifyContent: "center",
    margin:20, 
    color:"white"
    
  }
});

export default LandingPage;
