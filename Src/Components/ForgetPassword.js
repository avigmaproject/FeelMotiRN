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

const ForgetPassword = ({ navigation }) => {
  const [email, setemail] = useState("")
  const [error, setError] = useState("");
  const [device, setdevice] = useState(0)
  const [loading, setloading] = useState(false);


 

generateLink = async () => {
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
    console.log("tetorf")
  }
},[])

 const submitForm = async () => {
  const link =   await generateLink();
      console.log(email, 'email');
      console.log(link, 'link');
      if (isValidForm()) {
        let data = {
          EmailID: email,
          Type: 1,
          Email_Url: link,
          Device: device,
        };
        console.log(data);
        await forgotpassword(data)
          .then(res => {
            console.log('res: ', JSON.stringify(res));
            console.log('res:123', res[0].UserCode);
            if (res[0].UserCode === 'Sucesss') {
              console.log('successs');
              alert(
                'Link sent successfully. Please check your registered email.',
              );
            }
            if (res[0].UserCode === 'Error') {
              alert('Please check your email.');
            }
          })
          .catch(error => {
            if (error.response) {
              console.log('responce_error', error.response);
            } else if (error.request) {
              console.log('request error', error.request);
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
