import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import TasklistItem from "./TasklistItem";

interface tasksInterface {
  id: number;
  description: string;
}

const initialTasks: tasksInterface[] = [
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
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<tasksInterface[]>(initialTasks);
  const createTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, description: task }]);


    console.log("createTask");
  };

  const handleChange = (text: string) => {
    setTask(text);
    console.log(text);
  }; 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo</Text>
      <FlatList
        style={styles.flatlist}
        data={tasks}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
      />
      <TextInput
        placeholder="Add a task"
        placeholderTextColor="white"
        style={styles.input}
        onChangeText={handleChange}
      />
      <Button title="Add Task" onPress={createTask} />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "100%",
    width: "90%",
    backgroundColor: "#101112",
    marginTop: 20,
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  flatlist: {},
  input: {
    color: "white",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  list: {
    gap: 10,
  },
});
