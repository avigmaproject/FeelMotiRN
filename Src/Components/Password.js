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
import { resetpassword } from "../Utils/apiconfig";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../store/action/auth/action";
const Password = ({ navigation }) => {
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [csecureTextEntry, csetsecureTextEntry] = useState(true);
  const [osecureTextEntry, setosecureTextEntry] = useState(true);
  const profile = useSelector((state) => state.profileReducer.profile);
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const [color, setcolor] = useState("green");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(signout());
  };
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

  const passwordLength = () => {
    let cancel = false;
    if (NewPassword.length < 8) {
      cancel = true;
    }
    console.log("cancel brfore", cancel);

    if (cancel) {
      console.log("cancel after", cancel);
      return updateError(
        "Password length should not be less then 8.",
        setError
      );
    } else {
      return true;
    }
  };
  const passwordEmpty = () => {
    let cancel = false;
    if (NewPassword.length === 0) {
      cancel = true;
    }

    if (cancel) {
      return updateError("Fields can not be empty.", setError);
    } else {
      return true;
    }
  };
  const passwordEqual = () => {
    let cancel = false;
    if (NewPassword !== confirmPassword) {
      cancel = true;
    }
    if (cancel) {
      return updateError(
        "Password and confirm password does not match.",
        setError
      );
      return false;
    } else {
      return true;
    }
  };
  const updateError = (error, stateUpdate) => {
    stateUpdate(error);
    setTimeout(() => {
      stateUpdate("");
    }, 2500);
  };

  const submitForm = async () => {
    console.log("form", form);
    if (passwordLength() && passwordEmpty() && passwordEqual()) {
      let data = {
        User_Email: profile.email,
        Type: 5,
        User_Password: form.NewPassword,
        User_Type: 1,
      };
      console.log(data);
      setloading(true);
      console.log("form1", form);
      await resetpassword(data)
        .then((res) => {
          setloading(false);
          console.log("res: ", JSON.stringify(res));
          onToggleSnackBar();
          setmessage(
            "Your password has been changed successfully. Use your new password to login."
          );
          setForm({
            NewPassword: "",
            confirmPassword: "",
          });
          setcolor("green");
          const a = setTimeout(() => {
            onLogout();
          }, 2000);
        })
        .catch((error) => {
          if (error.request) {
            setmessage("Request Error");
            setcolor("red");
            onToggleSnackBar();
            console.log(error.request);
          } else if (error.responce) {
            setmessage("Responce Error");
            setcolor("red");
            onToggleSnackBar();
            console.log(error.responce);
          } else {
            setmessage("Somthing went wrong....");
            setcolor("red");
            onToggleSnackBar();
            console.log(error);
          }
          setloading(false);
        });
      setloading(false);
    }
  };

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
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableOpacity style={styles.button} onPress={() => submitForm()}>
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
