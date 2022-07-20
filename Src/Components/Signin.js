import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState ,useEffect} from "react";

import { setLoggedIn, setToken } from "../store/action/auth/action";
import { login,requestLocationPermission } from "../Utils/apiconfig";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "../CustomComponent/InputText";
import Social from "../CustomComponent/Social";
import Button from "../CustomComponent/Button";
import Spinner from 'react-native-loading-spinner-overlay';
import {  Snackbar } from 'react-native-paper';

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [color, setcolor] = useState("green")
  const [message, setmessage] = useState("")
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const { email, password } = userInfo;

  useEffect(() => {
  requestLocationPermission()

  return () => {
    requestLocationPermission()
  }
}, [])
const isValidField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

const updateError = (error, stateUpdate) => {
  stateUpdate(error);
  setTimeout(() => {
    stateUpdate("");
  }, 2500);
};

const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};
  const handleOnChangeText = (value, fieldName) => {
    console.log(value, fieldName);
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  const handleSecureEntry = () => {
    setsecureTextEntry(!secureTextEntry);
  };
  const isValidForm = () => {
    if (!isValidField(userInfo))
      return updateError("Required all fields!", setError);
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    if (!password.trim() || password.length < 8)
      return updateError(
        "Password must be atleast 8 character long!",
        setError
      );
    return true;
  };
const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const submitForm = async () => {
      setloading(true);
    console.log("first", userInfo);
    if (isValidForm()) {
      // Keyboard.dismiss();
      let data = qs.stringify({
        grant_type: "password",
        username: userInfo.email,
        password: userInfo.password,
        ClientId: 1,
        Role: 2,
      });

      console.log("loginnnnnn", data);
      await login(data)
        .then((res) => {
          console.log("res: ", JSON.stringify(res));
          setloading(false);
          setloading(false);
          if (res.access_token) {
            dispatch(setToken(res.access_token));
            dispatch(setLoggedIn());
          }
        })
        .catch((error) => {
          setloading(false);
          if (error.response) {
            console.log("error.response", error.response);    
            if (error.response.data.error == "0") {
                 setmessage("The Email or password is incorrect.") 
                setcolor("red")
                onToggleSnackBar()
              // alert("The Email or password is incorrect.");
            }
          } else if (error.request) {
            setloading(false);
            console.log("request error", error.request);
          } else if (error) {
            alert("Server Error");
            setloading(false);
          }
        });
      console.log("info", userInfo);
    }            
    setloading(false);
  };
  const onClickFB = () => {
    alert("onClickFB");
  };
  const onClickGmail = () => {
    alert("onClickGmail");
  };
  const onClickApple = () => {
    alert("onClickApple");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
 <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <View>
          <View style={styles.heading}>
            <Text style={styles.text}>Sign In</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.text2}>Please sign in to enter in app</Text>
          </View>

          <View style={styles.textinput}>
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "email")}
              label={"Email address*"}
              value={email}
            />
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
          </View>
          <View>
            <TouchableOpacity
              style={{marginBottom:10}}
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text style={styles.reset1}>Reset password?</Text>
            </TouchableOpacity>
          </View> */}
          <View>
            <Button onPress={()=>submitForm()} title="Sign In" />
          </View>
          {/* <View style={styles.bar_container}>
          <View style={styles.bar} />
          <View>
            <Text style={styles.or}>OR</Text>
          </View>
          <View style={styles.bar} />
        </View> */}
          {/* <Image
            resizeMode="stretch"
            source={Separator}
            style={{ height: 25, width: "90%", alignSelf: "center" }}
          /> */}
          <Social
            onClickFB={() => onClickFB()}
            onClickGmail={() => onClickGmail()}
            onClickApple={() => onClickApple()}
          />
          <View style={styles.containerFooter}>
            <Text style={styles.footer}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.footer1}>Sign Up</Text>
            </TouchableOpacity>
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
    marginTop: 25,
    width: "90%",
    height: 43,

    marginVertical: 10,
  },
  text: {
    fontSize: 30,

    color: "#424242",
    fontWeight: "700",
  },
  header: {
    width: "90%",
  },
  text2: {
    fontSize: 16,

    color: "#9B9C9F",
    fontWeight: "400",
  },
  textinput: {
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
  },
  email: {
    height: 47,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    marginVertical: 20,
    padding: 10,
  },

  forgot: {
    textAlign: "right",
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    color: "#9B9C9F",
  },
  reset1: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
    color: "#9B9C9F",
    marginVertical: 5,
  },
  containerFooter: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 16,
    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
  },
  footer: {
    fontSize: 16,

    fontWeight: "400",
    color: "#98A6AE",
    height: 22,
  },
  footer1: {
    fontSize: 16,

    fontWeight: "400",
    color: "#DBBE80",
    height: 22,
  },
  error: {
    // textAlign: 'center',
    // justifyContent: 'center',
    color: "#DBBE80",

    fontSize: 15,
    width: "90%",
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
});

export default Signin;
