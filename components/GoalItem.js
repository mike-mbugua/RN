import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goals}>
      <Pressable
        onPress={props.addOnDeleteHandler.bind(this, props.id)}
        android_ripple={{ color: "#210664" }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goals: {
    borderWidth: 1,
    // padding: 0,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  goalText: {
    color: "#cccccc",
    padding: 10,
  },
});
