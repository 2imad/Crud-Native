import React, { useContext } from "react";
import { Context } from "../context/ToughtsContext";
import Form from "../components/Form";

const EditScreen = ({ navigation }) => {
  const { state, editThought } = useContext(Context);
  const id = navigation.getParam("id");
  const thought = state.find(post => post.id === id);

  return (
    <Form
      initialValues={{ title: thought.title, content: thought.content }}
      onSubmit={(title, content) => {
        editThought(id, title, content, () => navigation.pop());
      }}
    />
  );
};
export default EditScreen;
