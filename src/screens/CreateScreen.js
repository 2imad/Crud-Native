import React, { useContext } from "react";
import { Context } from "../context/ToughtsContext";
import Form from "../components/Form";

const CreateScreen = ({ navigation }) => {
  const { addThougt } = useContext(Context);

  submitThought = (title, content) => {
    addThougt(title, content, () => {
      navigation.navigate("Index");
    });
  };
  return <Form onSubmit={(title, content) => submitThought(title, content)} />;
};

export default CreateScreen;
