import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";

const Underconstruction = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps={"always"} contentContainerStyle={{ marginHorizontal: 20 }}>
        <View>
          <Text style={styles.container}>Under Construction</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
});
export default Underconstruction;
