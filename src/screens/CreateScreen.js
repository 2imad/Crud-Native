import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/ToughtsContext";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { input, label, container } = styles;
  const { addThougt } = useContext(Context);

  submitThought = () => {
    addThougt(title, content);
  };

  return (
    <View style={container}>
      <Text style={label}> Title </Text>
      <TextInput
        style={input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={label}> Content </Text>
      <TextInput
        style={input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title="Add Thought" onPress={submitThought} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 7
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 4,
    borderColor: "grey",
    marginBottom: 15
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  }
});
export default CreateScreen;
