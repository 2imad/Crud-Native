import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Context } from "../context/ToughtsContext";

const IndexScreen = () => {
  const { state, addThougt } = useContext(Context);
  return (
    <View>
      <Text> Index Screen </Text>
      <Button title="add thought" onPress={addThougt} />
      <FlatList
        data={state}
        keyExtractor={i => i.title}
        renderItem={({ item }) => {
          return <Text> {item.title} </Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default IndexScreen;
