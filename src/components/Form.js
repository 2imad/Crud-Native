import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Form = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const { input, label, container } = styles;
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
      <Button title="Submit Thought" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

Form.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
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
export default Form;
