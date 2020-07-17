import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";

const LoginScreen = (props) => {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <Text style={styles.bodyText}>
        Place holder for a title text or a pretty picture
      </Text>
      <Text styles={styles.promptText}>UserName</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length < 4 ? <Text>Name must be atleast 4 characters</Text> : null}

      <Text styles={styles.promptText}>Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name2}
        onChangeText={(newValue) => setName2(newValue)}
      />
      {name.length < 4 ? <Text>This is not a valid password</Text> : null}
      <StatusBar style="auto" />
      <Button
        onPress={() => props.navigation.navigate("User")}
        title="Sign In"
      />
      
      <Button title="Sign Up" />
    </SafeAreaView>
  );
};

// TODO: Add sign up page functionality
// Modify names of attributes and variables.

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
  },
  viewHeader: {
    //alignSelf: "flex-start",
    alignSelf: "stretch",
    backgroundColor: "#2E4E9F",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 7,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "stretch",
  },
  headerText: {
    alignSelf: "stretch",
    backgroundColor: "#2E4E9F",
    justifyContent: "center",
    color: "white",
    fontSize: 30,
  },
  bodyText: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    color: "black",
  },
  promptText: {
    justifyContent: "flex-start",
    margin: 10,
    padding: 5,
  },
});

export default LoginScreen;
