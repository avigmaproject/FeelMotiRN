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
  StatusBar,
  SafeAreaView,
} from "react-native";
import Header from "../CustomComponent/Header";
import InputText from "../CustomComponent/InputText";
import { TextInput } from "react-native-paper";
import Button from "../CustomComponent/Button";
const Password = ({ navigation }) => {
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [csecureTextEntry, csetsecureTextEntry] = useState(true);
  const [osecureTextEntry, setosecureTextEntry] = useState(true);

  const handleSecureEntry = () => {
    setsecureTextEntry(!secureTextEntry);
  };
  const ChandleSecureEntry = () => {
    csetsecureTextEntry(!csecureTextEntry);
  };
  const OhandleSecureEntry = () => {
    setosecureTextEntry(!osecureTextEntry);
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
      <StatusBar barStyle="dark-content" backgroundColor={"#f8f8f8"} />
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Password"}
      />
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          paddingBottom: 20,
          backgroundColor: "#fff",
          borderRadius: 30,
          paddingTop: 10,
          marginTop: 10,
        }}
      >
        <View style={styles.textinput}>
          <InputText
            onChangeText={(value) => handleOnChangeText(value, "oldPassword")}
            label={"Old Password*"}
            value={oldPassword}
            secureTextEntry={osecureTextEntry}
            right={
              <TextInput.Icon
                forceTextInputFocus={osecureTextEntry}
                name={csecureTextEntry ? "eye-off" : "eye"}
                onPress={() => OhandleSecureEntry()}
                color={"#9B9C9F"}
              />
            }
          />
          <InputText
            onChangeText={(value) => handleOnChangeText(value, "NewPassword")}
            label={"Password*"}
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
          <InputText
            onChangeText={(value) =>
              handleOnChangeText(value, "confirmPassword")
            }
            label={"Confirm Password*"}
            value={confirmPassword}
            secureTextEntry={csecureTextEntry}
            right={
              <TextInput.Icon
                forceTextInputFocus={csecureTextEntry}
                name={csecureTextEntry ? "eye-off" : "eye"}
                onPress={() => ChandleSecureEntry()}
                color={"#9B9C9F"}
              />
            }
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("AddNewPost")}>
          <View>
            <Text>heelo</Text>
          </View>
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.submit}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textinput: {
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#DBBE80",
    borderRadius: 10,
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
