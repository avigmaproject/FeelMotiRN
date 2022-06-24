import {
  View,
  Button,
  Text,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {register, getverificationlink} from '../Utils/apiconfig';
import qs from 'qs';
import {useDispatch, useSelector} from 'react-redux';
import {setLoggedIn, setToken} from '../store/action/auth/action';
import {TextInput} from 'react-native-paper';
import Separator from '../Assets/Separator.png';
import InputText from "../CustomComponent/InputText"
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Social from "../CustomComponent/Social"

const isValidField = obj => {
  return Object.values(obj).every(value => value.trim());
};

const updateError = (error, stateUpdate) => {
  stateUpdate(error);
  setTimeout(() => {
    stateUpdate('');
  }, 2500);
};
const onClickFB = () =>{
alert("onClickFB")
}
const onClickGmail = () =>{
alert("onClickGmail")
}
const onClickApple = () =>{
alert("onClickApple")
}
const isValidEmail = value => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

const Signup = ({navigation}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [secureTextEntry, setsecureTextEntry] = useState(false);
  const [csecureTextEntry, csetsecureTextEntry] = useState(false);

  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const {fullName, email, password, confirmPassword} = form;
 const handleSecureEntry =() =>{
  setsecureTextEntry(!secureTextEntry)
  }
 const ChandleSecureEntry =() =>{
  csetsecureTextEntry(!csecureTextEntry)
  }
  const handleOnChangeText = (value, fieldName) => {
    setForm({...form, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidField(form))
      return updateError('Required all fields!', setError);
    if (!fullName.trim() || fullName.length < 3)
      return updateError('Invalid name!', setError);
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    if (!password.trim() || password.length < 8)
      return updateError('Password must be atleast 8 chracter long!', setError);
    if (password !== confirmPassword)
      return updateError('Password does not match!', setError);
    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      // Keyboard.dismiss();
      // const link = await generateLink(form.email);
      setloading(true);
      let data = qs.stringify({
        grant_type: 'password',
        UserName: form.email,
        Password: form.password,
        ClientId: 2,
        Role: 3,
        FullName: form.fullName,
        User_IsActive: 1,
      });
      console.log('register data', data);
      await register(data)
        .then(async res => {
          console.log('res: ', JSON.stringify(res));
          console.log('res:123', res.access_token);
          setloading(false);
          if (res.access_token) {
            dispatch(setToken(res.access_token));
            dispatch(setLoggedIn());
          }
        })
        .catch((error)=>{
      console.log("mianlll",error)
        if (error.response) {
            setloading(false);
            console.log(error);
            if (error.response.data.error == '-99') {
              alert('Email Already Exist.');
            }
          } else if (error.request) {
            setloading(false);
            console.log('request error', error);
          } else if (error) {
            alert('Server Error');
            setloading(false);
          }
});
      console.log('formsubmit', form);
    }
  };

  console.log(form);

  return (
  <SafeAreaView style={{flex:1,backgroundColor: '#FFFFFF'}}>
  <ScrollView
      contentContainerStyle={{flexGrow: 1,marginHorizontal:20}}
>
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
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.text2}>Please sign up to enter in a app</Text>
        </View>
        <View style={styles.textinput}>
        <InputText             
            onChangeText={value => handleOnChangeText(value, 'fullName')}
            label={"Full name"}
            value={fullName}
          />
        <InputText             
            onChangeText={value => handleOnChangeText(value, 'email')}
            label={"Email address*"} 
            value={email}
          />
          <InputText             
            onChangeText={value => handleOnChangeText(value, 'password')}
            label={"Password*"}
             value={password}
            secureTextEntry={secureTextEntry}
            right={<TextInput.Icon forceTextInputFocus ={secureTextEntry}name= {secureTextEntry ?"eye-off" : "eye" } onPress={()=>handleSecureEntry()} color={"#9B9C9F"} />}

          />
          <InputText             
            onChangeText={value => handleOnChangeText(value, 'confirmPassword')}
            label={"Confirm Password*"}
            value={confirmPassword}
            secureTextEntry={csecureTextEntry}
            right={<TextInput.Icon forceTextInputFocus ={csecureTextEntry}name= {csecureTextEntry ?"eye-off" : "eye" } onPress={()=>ChandleSecureEntry()} color={"#9B9C9F"} />}
            error={error}

          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit} onPress={submitForm}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
       <Image resizeMode="stretch" source={Separator} style={{height:25,width:"90%",alignSelf:"center"}} />

        <Social onClickFB = {()=>onClickFB()} onClickGmail = {()=>onClickGmail()}onClickApple = {()=>onClickApple()}/>

        <View style={styles.containerFooter}>
          <Text style={styles.footer}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.footer1}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
</SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  back: {
    marginTop: 18,
    marginLeft: 20,

  },
  heading: {
    marginTop: 2,
    width: '90%',
    height: 43,
    marginVertical: 10,
  },
  text: {
    fontSize: 30,

    color: '#424242',
    fontWeight: '700',
  },
  header: {
    width: '90%',
  },
  text2: {
    fontSize: 16,

    color: '#9B9C9F',
    fontWeight: '400',
  },
  textinput: {
    justifyContent: 'space-between',
    width: '90%',
    margin: 4,
  },
  input: {
    height: 45,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },

  button: {
    width: '90%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#DBBE80',
    marginBottom: 10,
    alignSelf: 'center',
  },
  submit: {
    textAlign: 'center',
    padding: 18,
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 16,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  footer: {
    fontSize: 16,
    fontWeight: '400',
    color: '#98A6AE',
    height: 22,
  },
  footer1: {
    fontSize: 16,
    fontWeight: '400',
    color: '#98A6AE',
    height: 22,
    color: '#DBBE80',
  },
  error: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#DBBE80',

    fontSize: 15,
    width: '90%',
    marginLeft: 20,
  },
});
