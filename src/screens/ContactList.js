import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";

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
          return <Button style={styles.userButtonStyle} title={item.name} />;
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
