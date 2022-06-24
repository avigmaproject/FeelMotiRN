import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import InputText from "../CustomComponent/InputText"
import Header from "../CustomComponent/Header"
import Button from "../CustomComponent/Button"

const ForgetPassword = ({navigation}) => {
  const [ForgetPassword, setForgetPassword] = useState({
    password: '',
  });
  const [error, setError] = useState('');

  const handleOnChangeText = e => {
    console.log(e);
    setForgetPassword({ForgetPassword: e});
  };

  const submitForm = () => {
 if (isValidForm()) {
    console.log('info', ForgetPassword);
}
  };

const updateError = (error, stateUpdate) => {
  stateUpdate(error);
  setTimeout(() => {
    stateUpdate('');
  }, 2500);
};
const isValidEmail = value => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

const isValidForm = () => {
    if (!isValidEmail(ForgetPassword)) return updateError('Invalid email!', setError);
    return true;
  };
  return (
    <SafeAreaView style={{flex:1 ,backgroundColor:"#fff"}}>
      <ScrollView contentContainerStyle={{flex: 1,marginHorizontal:20}}>
       <View>
          <Header onPress={() => navigation.navigate('Signin')}/>
        <View style={styles.heading}>
          <Text style={styles.text}>Forgot Password</Text>
        </View>
        <View style={styles.textinput}>
        <InputText             
            onChangeText={e => handleOnChangeText(e)}
            label={"Enter Email Address*"}
            value={ForgetPassword}
            error={error}
          />
        </View>
      <View>
        <Button onPress={()=>submitForm()} title="Submit"/>
      </View>

      </View>
    </ScrollView>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    width: '90%',
    marginVertical: 10,
  },
  text: {
    fontSize: 30,
    color: '#424242',
    fontWeight: '700',
  },
  textinput: {
    width: '100%',
  },
  
});

export default ForgetPassword;
