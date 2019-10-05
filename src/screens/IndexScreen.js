import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Context } from "../context/ToughtsContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({ navigation }) => {
  const { state, addThougt, deleteThought } = useContext(Context);
  const { row, title, icon } = styles;
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={i => i.title}
        renderItem={({ item }) => {
          return (
            <View style={row}>
              <Text
                onPress={() => navigation.navigate("Show", { id: item.id })}
                style={title}
              >
                {item.title}
              </Text>
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

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather style={styles.header} name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  header: {
    marginRight: 5
  },
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
