import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Linking,
  TextInput,
  FlatList,
} from "react-native";

//tESTING purposes

///const supportedURL = "https://google.com";

const unsupportedURL = "https://linkello.com/4WzaHMKhC";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const ContactList = (props) => {
  //For now, implement a list of users From an array
  const user = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.headerText}>Contact List</Text>
      </View>
      <View styles={styles.viewHeaderCover}></View>

      <FlatList
        keyExtractor={(user) => user.name}
        data={user}
        renderItem={({ item }) => {
          return (
            <OpenURLButton
              url={unsupportedURL}
              style={styles.userButtonStyle}
              title={item.name}
            >
              {item.name}
            </OpenURLButton>
          );
        }}
      />

      <Button title="Create Contact" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

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
    //position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 7,
  },

  viewHeaderCover: {
    height: 100,
  },
  userButtonStyle: {
    marginVertical: 50,
    justifyContent: "center",
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
});

export default ContactList;
