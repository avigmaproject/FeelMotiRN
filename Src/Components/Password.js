import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Header from "../CustomComponent/Header";
import InputText from "../CustomComponent/InputText";
import { TextInput } from "react-native-paper";
import Button from "../CustomComponent/Button";
const Password = ({ navigation }) => {
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const handleSecureEntry = () => {
    setsecureTextEntry(!secureTextEntry);
  };
  const handleOnChangeText = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };
  const [form, setForm] = useState({
    oldPassword: "",

    NewPassword: "",
    confirmPassword: "",
  });
  const { oldPassword, NewPassword, confirmPassword } = form;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Password"}
      />
      <ScrollView keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{
          backgroundColor: "#ffffff",
          borderRadius: 25,
          marginTop: 10,
        }}
      >
        <View style={styles.textinput}>
          <InputText label={"Old Password*"} />
          {/* <InputText label={"New Password*"} /> */}
          <InputText
            onChangeText={(value) => handleOnChangeText(value, "  NewPassword")}
            label={"New Password*"}
            value={NewPassword}
            secureTextEntry={secureTextEntry}
            right={
              <TextInput.Icon
                forceTextInputFocus={secureTextEntry}
                name={secureTextEntry ? "eye-off" : "eye"}
                onPress={() => handleSecureEntry()}
                color={"#9B9C9F"}
              />
            }
          />
          <InputText label={"Confirm Password*"} />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textinput: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
    width: "90%",
    height: 60,
    backgroundColor: "#DBBE80",
    marginTop: 205,
    borderRadius: 10,
    marginTop: 195,
    left: 20,
  },
  submit: {
    textAlign: "center",
    padding: 18,
    fontSize: 18,

    fontWeight: "700",
    color: "#FFFFFF",
  },
});
export default Password;
