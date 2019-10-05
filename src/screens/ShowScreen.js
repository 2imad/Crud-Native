import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/ToughtsContext";

const ShowScreen = ({ navigation }) => {
  const thoughtId = navigation.getParam("id");
  const { state } = useContext(Context);

  const thought = state.find(t => t.id === thoughtId);
  return (
    <View>
      <Text> {thought.title} </Text>
      <Text> {thought.content} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
