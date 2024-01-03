import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, enteredText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal here ..."
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <Text>list of goals ....</Text>

        {courseGoals.map((goal) => (
          <View style={styles.goals} key={Math.random()}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
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
  goals: {
    borderWidth: 1,
    padding: 10,
    margin: 8,
    borderRadius: 3,
    backgroundColor: "blue",
  },
  goalText: {
    color: "#cccccc",
  },
});
