import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function globalInputHandler(enterText) {
    setEnteredGoalText(enterText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(" ");
  }

  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter UR goal!!"
        onChangeText={globalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
