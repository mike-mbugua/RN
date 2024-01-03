import { useState } from "react";
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  // function endGoalHandler() {
  //   setModalIsVisible(false);
  // }

  function addGoalHandler(enteredText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function onDeleteHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal"
        onPress={startAddGoalHandler}
        color="#b180f0"
      />

      {modalIsVisible && (
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          endGoalHandler={() => {
            setModalIsVisible(false);
          }}
        />
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
    paddingTop: 50,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#311b6b",
  },

  goalContainer: {
    marginTop: 15,
    flex: 5,
  },
});
