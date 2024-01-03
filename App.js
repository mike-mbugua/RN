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
      <View>
        <Text>list of goals ....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 30,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 5,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
