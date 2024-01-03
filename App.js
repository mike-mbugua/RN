import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredText) {
    if (enteredText.trim() !== "") {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { text: enteredText, id: Math.random().toString() },
      ]);
    }
    alert("cannot add empty goals");
  }

  function onDeleteHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add new Goal" onPress={startAddGoalHandler} />

      {modalIsVisible && (
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
      )}
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              addOnDeleteHandler={onDeleteHandler}
              id={itemData.item.id}
            />
          )}
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
