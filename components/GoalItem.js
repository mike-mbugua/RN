import { Text, View, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goals} key={Math.random()}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goals: {
    borderWidth: 1,
    padding: 10,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  goalText: {
    color: "#cccccc",
  },
});
