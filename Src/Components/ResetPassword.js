import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
StatusBar
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import InputText from "../CustomComponent/InputText";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import Button from "../CustomComponent/Button";
import {resetpassword} from "../Utils/apiconfig"
import Spinner from 'react-native-loading-spinner-overlay';
import {  Snackbar } from 'react-native-paper';

const ResetPassword = ({ navigation ,...props}) => {
  const [resetPassword, setResetPassword] = useState({
    password: "",
    confirmpassword: "",
  });
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [csecureTextEntry, csetsecureTextEntry] = useState(true);
  const [error, setError] = useState("");
  // const [error1, setError1] = useState(null);
  const [error1, setError1] = useState(null);

  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [color, setcolor] = useState("green")
  const [message, setmessage] = useState("")
  const { password, confirmpassword } = resetPassword;

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

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
const updateError = (error, stateUpdate) => {
    stateUpdate(error);
    setTimeout(() => {
      stateUpdate("");
    }, 2500);
  };

  React.useEffect(() => {
    const {link} = props.route.params;
    const spliturl = link.split('/');
    console.log('spliturl', spliturl[4]);
    setemail(spliturl[4])
  }, [email])
  
const passwordEmpty = () => {
    let cancel = false;
    if (password.length === 0) {
      cancel = true;
    }
    
    if (cancel) {
      return updateError("Fields can not be empty.", setError);
    } else {
      return true;
    }
  };
const passwordLength = () => {
    let cancel = false;
    if (password.length < 8) {
      cancel = true;
    }
    console.log("cancel brfore",cancel)

    if (cancel) {
    console.log("cancel after",cancel)
      return updateError('Password length should not be less then 8.', setError);
    } else {
      return true;
    }
  };
const passwordEqual = () => {
    let cancel = false;
    if (password !== confirmpassword) {
      cancel = true;
    }
    if (cancel) {
      return updateError('Password and confirm password does not match.', setError);
      return false;
    } else {
      return true;
    }
  };
const submitForm = async () => {
    if (
      passwordLength() &&
      passwordEmpty() && passwordEqual() 
    ) {   

        let data = {
          User_Email: email,
          Type: 5,
          User_Password: password,
          User_Type: 1,
        };
        console.log(data);
    setloading(true); 

        await resetpassword(data)
          .then(res => {
           setloading(false); 
           console.log('res: ', JSON.stringify(res));
           onToggleSnackBar()
           setmessage("Your password has been changed successfully. Use your new password to login.") 
          setResetPassword({
            password: "",
            confirmpassword: "",})
           setcolor("green")
            const a = setTimeout(() => { navigation.navigate("Signin")}, 2000);

          })
          .catch(error => {
            if (error.request) {
                setmessage("Request Error") 
                setcolor("red")
                onToggleSnackBar()
                console.log(error.request)
              } else if (error.responce) {
                setmessage("Responce Error") 
                setcolor("red")
                onToggleSnackBar()
                console.log(error.responce)
              } else {
                setmessage("Somthing went wrong....") 
                setcolor("red")
                onToggleSnackBar()
                console.log(error)
              }
           setloading(false); 

          });
                 setloading(false); 

    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Spinner
          visible={loading}
          textContent={'Loading...'}
        />
      <Header color={true} onPress={() => navigation.navigate("Signin")} />
      <ScrollView keyboardShouldPersistTaps={"always"} contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
        <View>
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
              error={error}
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
              error1={error1}

            />
          </View>
          <View>
            <Button onPress={() => submitForm()} title="Submit" />
          </View>
        </View>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={{backgroundColor:color}}
          action={{
            label: 'OK',
            onPress: () => {
              onDismissSnackBar
            },
          }}>{message}</Snackbar>
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
