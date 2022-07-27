import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import InputText from "../CustomComponent/InputText";
import { TextInput } from "react-native-paper";
import Header from "../CustomComponent/Header";
const Sponsor = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [form, setForm] = useState({
    heading: "",
    description: "",
    amount: "",
  });
  const { heading, description, amount } = form;
  const handleOnChangeText = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };
  return (
    <SafeAreaView>
      <Header
        onPress={() => navigation.navigate("Profile")}
        title={"Sponsor"}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          marginVertical: 30,
          borderRadius: 10,
        }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ backgroundColor: "#FFFFFF", borderRadius: 20 }}>
            <View style={styles.textinput}>
              <InputText
                onChangeText={(value) => handleOnChangeText(value, "heading")}
                label={"Heading*"}
                value={heading}
                style={{ textTransform: "capitalize" }}
              />
              <InputText
                onChangeText={(value) =>
                  handleOnChangeText(value, "description")
                }
                label={"Brief Description *"}
                value={description}
                style={{ textTransform: "capitalize" }}
                multiline={true}
                numberOfLines={4}
              />
              <InputText
                onChangeText={(value) => handleOnChangeText(value, "amount")}
                label={"Amount*"}
                value={amount}
                style={{ textTransform: "capitalize" }}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.submit}>Send Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textinput: {
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  button: {
    marginTop: 300,
    width: "100%",
    height: 60,
    backgroundColor: "#DBBE80",
    borderRadius: 5,
  },
  submit: {
    textAlign: "center",
    padding: 18,
    fontSize: 18,

    fontWeight: "700",
    color: "#FFFFFF",
  },
});
export default Sponsor;
