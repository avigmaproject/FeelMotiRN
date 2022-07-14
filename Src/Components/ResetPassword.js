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

const ResetPassword = ({ navigation ,...props}) => {
  const [resetPassword, setResetPassword] = useState({
    password: "",
    confirmpassword: "",
  });
  const [secureTextEntry, setsecureTextEntry] = useState(false);
  const [csecureTextEntry, csetsecureTextEntry] = useState(false);
  const [error, setError] = useState("");
  const [email, setemail] = useState("");

console.log("navigation",navigation)
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
    if (confirmpassword.length === 0) {
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
    if (confirmpassword.length < 8 ) {
      cancel = true;
    }
    if (cancel) {
      return updateError('Password length should not be less then 8.', setError);
      return false;
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
      return updateError('Password and confirm password not match.', setError);
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
        await resetpassword(data)
          .then(res => {
            console.log('res: ', JSON.stringify(res));
            this.setState({isLoading: false});
            this.showMessage('Password Changed Successfully');
            setTimeout(() => {
              this.props.navigation.navigate('SuccessScreen');
            }, 2000);
          })
          .catch(error => {
            if (error.response) {
              this.showerrorMessage('Something went wrong!!!');
              console.log('responce_error', error.response);
              this.setState({isLoading: false});
            } else if (error.request) {
              this.showerrorMessage('Something went wrong!!!');
              this.setState({isLoading: false});
              console.log('request error', error.request);
            }
          });
      
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <StatusBar backgroundColor="#ffffff" /> */}
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
