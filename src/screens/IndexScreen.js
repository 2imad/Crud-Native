import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Context } from "../context/ToughtsContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = () => {
  const { state, addThougt, deleteThought } = useContext(Context);
  const { row, title, icon } = styles;
  return (
    <View>
      <Button title="add thought" onPress={addThougt} />
      <FlatList
        data={state}
        keyExtractor={i => i.title}
        renderItem={({ item }) => {
          return (
            <View style={row}>
              <Text style={title}> {item.title} </Text>
              <TouchableOpacity onPress={() => deleteThought(item.id)}>
                <Feather style={icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 25
  }
});
export default IndexScreen;
