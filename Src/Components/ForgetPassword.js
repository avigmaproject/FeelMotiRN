import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import InputText from "../CustomComponent/InputText";
import Header from "../CustomComponent/Header";
import Button from "../CustomComponent/Button";
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {forgotpassword} from "../Utils/apiconfig"
import Spinner from 'react-native-loading-spinner-overlay';
import {  Snackbar } from 'react-native-paper';

const ForgetPassword = ({ navigation }) => {
  const [email, setemail] = useState("")
  const [error, setError] = useState(null);
  const [device, setdevice] = useState(0)
  const [loading, setloading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [color, setcolor] = useState("green")
  const [message, setmessage] = useState("")

  const generateLink = async () => {
    const link = await dynamicLinks().buildShortLink({
      link: `https://feelmoti.page.link/forgetpassword/${email}`,
      domainUriPrefix: 'https://feelmoti.page.link',
      ios: {
        bundleId: "com.Feelmoti",
        appStoreId: "1634422569",
        fallbackUrl: "https://apps.apple.com/us/app/com.Feelmoti/id1634422569",
      },
      android: {
        packageName: 'com.feelmoti',
        fallbackUrl: 'https://play.google.com/store/apps/details?id=com.feelmoti',
      },
      navigation: {
        forcedRedirectEnabled: true,
      },
    });
    // Clipboard.setString(link)
    console.log(link);
    return link
  };
React.useEffect(() => {
  if (Platform.OS === 'android') {
    setdevice(1)
  } else {
    setdevice(2)
    }

  return () => {
    console.log("unmount")
  }
},[])
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

 const submitForm = async () => {
  const link =   await generateLink();
      if (isValidForm()) {
        let data = {
          EmailID: email,
          Type: 1,
          Email_Url: link,
          Device: device,
        };
      setloading(true);

        console.log(data);
        await forgotpassword(data)
          .then(res => {
            console.log('res: ', JSON.stringify(res));
            console.log('res:123', res[0].UserCode);
            onToggleSnackBar()

            if (res[0].UserCode === 'Sucesss') {
              console.log('successs');
              setmessage("Link sent successfully. Please check your registered email.") 
            setcolor("green")
            }
            if (res[0].UserCode === 'Error') {
            setmessage("This email is not register with us.") 
            setcolor("green")
            }
            setloading(false);
           
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
          });
      } 
    
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

  const isValidForm = () => {
    if (!isValidEmail(email))
      return updateError("Invalid email!", setError);
    return true;
  };
  return (
    <SafeAreaView  style={{flex:1,backgroundColor:"#fff"}}>
      <StatusBar barStyle="dark-content" backgroundColor={"#FFFFFF" } />
      {/* <StatusBar backgroundColor="#ffffff" /> */}
       <Header color={true} onPress={() => navigation.navigate('Signin')}/>
      <ScrollView keyboardShouldPersistTaps={"always"} contentContainerStyle={{ flex: 1, marginHorizontal: 20 }}>
       <Spinner
          visible={loading}
          textContent={'Loading...'}
        />
         <View>
          <View style={styles.heading}>
            <Text style={styles.text}>Forgot Password</Text>
          </View>
          <View style={styles.textinput}>
            <InputText
              onChangeText={(email) => setemail(email)}
              label={"Enter Email Address*"}
              value={email}
              error={error}
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
});

export default ForgetPassword;
