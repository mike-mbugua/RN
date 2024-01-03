import { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goal here ..."
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 5,
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalContainer: {
    marginTop: 15,
    flex: 5,
  },
});
