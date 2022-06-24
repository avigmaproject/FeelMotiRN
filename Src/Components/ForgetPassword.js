import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputText from "../CustomComponent/InputText"

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
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={{flex: 1,marginHorizontal:20}}>
       <View>
          <View>
            <MaterialCommunityIcons
              onPress={() => navigation.navigate('Signin')}
              name={'keyboard-backspace'}
              size={35}
              color="#424242"
            />
        </View>
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
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit} onPress={()=>submitForm()}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.home}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.home}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
          <Text style={styles.home}>Wallet</Text>
        </TouchableOpacity>
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


  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#DBBE80',
    marginBottom: 55,
    borderRadius: 10,
  },
  submit: {
    textAlign: 'center',
    padding: 18,
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  home: {
    width: '45%',
    height: 60,
    backgroundColor: '#DBBE80',
    padding: 20,
    textAlign: 'center',
    left: 100,
    margin: 15,
    borderRadius: 10,
  },
});

export default ForgetPassword;
