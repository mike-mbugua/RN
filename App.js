import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal here ..."
        />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalContainer}>
        <Text>list of goals ....</Text>
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
});
