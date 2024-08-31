import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TasklistItem from "./TasklistItem";

const tasks = [
  {
    id: 1,
    description: "First Task",
  },
  {
    id: 2,
    description: "Second Task",
  },
];

const renderItem = ({ item }: { item: any }) => {
  return <TasklistItem description={item.description} />;
};

const TaskList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo</Text>
      <FlatList data={tasks} renderItem={renderItem} />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
