import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 6,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
  },
});
