import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import back from '../Assets/back.png';
import InputText from "../CustomComponent/InputText"
import {TextInput} from 'react-native-paper';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';

const EditProfile = ({navigation}) => {
const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    username:'',
    profession: '',
    language: '',
    dob:'',
    gender:''
  });
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];



const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
  const {fullName, email, profession, language,username,dob,gender} = form;
  return (
  <SafeAreaView>
  <ScrollView
      style={{
        height: Dimensions.get('screen').height,
      }}>
      <View style={styles.heading}>
        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Image source={back} style={styles.back1} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={{backgroundColor: '#FFFFFF', borderRadius: 20}}>
        <View style={styles.textinput}>
          <InputText             
            onChangeText={value => handleOnChangeText(value, 'fullName')}
             label={"Full name*"}
            value={fullName}
          />
<InputText             
            onChangeText={value => handleOnChangeText(value, 'username')}
             label={"User name*"}
            value={username}
          />
 <InputText             
            onChangeText={value => handleOnChangeText(value, 'email')}
            label={"Email address*"} 
            value={email}
          />
<InputText             
            onChangeText={value => handleOnChangeText(value, 'profession')}
             label={"Profession/Ocupation*"}
            value={profession}
          />
<View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Language*' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            handleOnChangeText(item.value, 'language')
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
{/* <InputText             
            onChangeText={value => handleOnChangeText(value, 'language')}
             label={"Language*"}
            value={language}
          /> */}
<InputText             
            onChangeText={value => handleOnChangeText(value, 'dob')}
             label={"Date of Birth*"}
            value={dob}
            right={<TextInput.Icon name= "calendar"  color={"#9B9C9F"} />}

          />
<InputText             
            onChangeText={value => handleOnChangeText(value, 'gender')}
             label={"Gender*"}
            value={gender}
          />
          {/* <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Full name*"
            placeholder="Full name* "
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="username"
            placeholder="username*"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Email Address"
            placeholder="Email Address"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Profession/Ocupation"
            placeholder="Profession/Ocupation"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Language"
            placeholder="Language"
          />

          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Date of Birth"
            placeholder="Date of Birth"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Gender"
            placeholder="Gender"
          /> */}
        </View>

        <View style={styles.heading2}>
          <Text style={styles.text2}>Billing Information</Text>
        </View>
        <View style={styles.textinput}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Company"
            placeholder="Company "
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="United States"
            placeholder="United States"
          />

          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="City"
            placeholder="City"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Address"
            placeholder="Address"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Postal/ZIP"
            placeholder="Postal/ZIP"
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 15,
    width: '90%',
    height: 32,
    // backgroundColor: 'red',
  },
  text: {
    color: '#424242',
    fontSize: 24,
    marginRight: 120,
    color: '#424242',
    // fontFamily: 'Open Sans',
    fontWeight: '700',
  },
  textinput: {
    marginTop: 10,
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    margin: 15,
  },

  input: {
    height: 65,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,

    marginVertical: 10,
    padding: 15,
  },
  button: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    height: 60,
    backgroundColor: '#DBBE80',
    marginBottom: 55,
    borderRadius: 10,
    left: 20,
  },
  submit: {
    // backgroundColor: '#FFFFFF',
    textAlign: 'center',
    padding: 18,
    fontSize: 18,
    // fontFamily: 'Open Sans',
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
  heading2: {
    // backgroundColor: '#FFFFFF',
    marginTop: 25,
    marginLeft: 20,
    width: '90%',
    height: 32,
  },
  text2: {
    color: '#424242',
    fontSize: 24,
    // backgroundColor: '#FFFFFF',
    color: '#424242',
    // fontFamily: 'Open Sans',
    fontWeight: '700',
  },
 container: {
      backgroundColor: 'white',
      // padding: 16,
    },
    dropdown: {
      height: 55,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color:"gray"
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
});
export default EditProfile;
