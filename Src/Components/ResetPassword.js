import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import InputText from "../CustomComponent/InputText";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import Button from "../CustomComponent/Button";

const ResetPassword = ({ navigation }) => {
  const [resetPassword, setResetPassword] = useState({
    password: "",
    confirmpassword: "",
  });
  const [secureTextEntry, setsecureTextEntry] = useState(false);
  const [csecureTextEntry, csetsecureTextEntry] = useState(false);
  const [error, setError] = useState("");

  const { password, confirmpassword } = resetPassword;
  const handleSecureEntry = () => {
    setsecureTextEntry(!secureTextEntry);
  };
  const ChandleSecureEntry = () => {
    csetsecureTextEntry(!csecureTextEntry);
  };
  const handleOnChangeText = (value, fieldName) => {
    console.log(value, fieldName);
    setResetPassword({ ...resetPassword, [fieldName]: value });
  };
  const submitForm = () => {
    console.log("info", resetPassword);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
        <View>
          <Header onPress={() => navigation.navigate("Signin")} />
          <View style={styles.heading}>
            <Text style={styles.text}>Reset Password</Text>
          </View>
          <View style={styles.textinput}>
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "password")}
              label={"Password*"}
              value={password}
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
                handleOnChangeText(value, "confirmpassword")
              }
              label={"Confirm Password*"}
              value={confirmpassword}
              secureTextEntry={csecureTextEntry}
              right={
                <TextInput.Icon
                  forceTextInputFocus={csecureTextEntry}
                  name={csecureTextEntry ? "eye-off" : "eye"}
                  onPress={() => ChandleSecureEntry()}
                  color={"#9B9C9F"}
                />
              }
              error={error}
            />
            {/* <TextInput
            value={password}
            style={styles.input}
            autoCapitalize="none"
            label="Password"
            theme={{colors: {primary: '#9B9C9F'}}}
            onChangeText={value => handleOnChangeText(value, 'password')}
          />
          <TextInput
            value={confirmpassword}
            style={styles.input}
            autoCapitalize="none"
            label="confirm password"
            theme={{colors: {primary: '#9B9C9F'}}}
            onChangeText={value => handleOnChangeText(value, 'confirmpassword')}
          /> */}
          </View>
          <View>
            <Button onPress={() => submitForm()} title="Submit" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    width: "90%",
    marginVertical: 10,
  },
  text: {
    fontSize: 30,
    color: "#424242",
    fontWeight: "700",
  },
  textinput: {
    width: "100%",
  },

  input: {
    height: 45,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 10,
    marginVertical: 15,
    padding: 10,
  },
});

export default ResetPassword;
