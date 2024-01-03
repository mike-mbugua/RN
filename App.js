import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredText) {
    setCourseGoals((currentGoals) => [...currentGoals, enteredText]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <Text>list of goals ....</Text>

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item} />}
        />
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

  goalContainer: {
    marginTop: 15,
    flex: 5,
  },
});
