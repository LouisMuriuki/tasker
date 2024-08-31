import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
interface TasklistItemProps {
  description?: string;
  onDelete?: () => void;
  onEdit?: () => void;
  onComplete?: () => void;
  isCompleted?: boolean;
  id?: string;
}
const TasklistItem = ({
  description,
  onDelete,
  onEdit,
  onComplete,
  isCompleted,
  id,
}: TasklistItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
      <AntDesign name="delete" size={24} color="white" />
    </View>
  );
};

export default TasklistItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
    width: "90%",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
