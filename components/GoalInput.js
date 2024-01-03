import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
  Image,
} from "react-native";

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
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal here ..."
          onChangeText={goalInputHandler}
          value={enteredText}
        />

        <View style={styles.modalButton}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button
              title="View Goals"
              onPress={props.endGoalHandler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 7,
    width: "80%",
    marginRight: 5,
    color: "#120438",
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  goalContainer: {
    marginTop: 15,
    flex: 5,
  },
  modalButton: {
    flexDirection: "row",
    margin: 10,
    alignContent: "center",
  },
  button: {
    margin: 10,
    justifyContent: "center",
    width: "40%",
    borderRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
});
