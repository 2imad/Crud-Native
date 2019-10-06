import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/ToughtsContext";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

let thoughtId;
const ShowScreen = ({ navigation }) => {
  thoughtId = navigation.getParam("id");
  const { state } = useContext(Context);

  const thought = state.find(t => t.id === thoughtId);
  return (
    <View>
      <Text> {thought.title} </Text>
      <Text> {thought.content} </Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit", { id: thoughtId })}
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
