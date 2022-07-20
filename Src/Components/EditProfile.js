import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import InputText from "../CustomComponent/InputText";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Header from "../CustomComponent/Header";
import Button from "../CustomComponent/Button";
import { updateprofile, getusermasterdata,uploadimage } from "../Utils/apiconfig";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../store/action/profile/profile";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet"
import ImagePicker from "react-native-image-crop-picker";
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  Snackbar } from 'react-native-paper';
const options = [
  "Cancel",
  <View>
    <Text style={{ color: "black" }}>Gallery</Text>
  </View>,
  <View>
    <Text style={{ color: "black"}}>Camera</Text>
  </View>
]
const EditProfile = ({ navigation }) => {
  const profile = useSelector((state) => state.profileReducer.profile);
  const token = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value1, setValue1] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [ActionSheetRef, setActionSheetRef] = useState(null);
  const [visible, setVisible] = useState(false);
  const [color, setcolor] = useState("green")
  const [message, setmessage] = useState("Profile Updated successfully.")
  const [form, setForm] = useState({
    fullName: profile.User_Name ?profile.User_Name:"",
    email: profile.User_Email ? profile.User_Email:"",
    username: profile.User_MotiID ? profile.User_MotiID:"",
    profession: profile.User_Occupation ? profile.User_Occupation :"",
    language: profile.User_Language ? profile.User_Language.toString():"0",
    dob:profile.User_DOB? moment(profile.User_DOB).format("LL"):"" ,
    company: profile.User_Company ? profile.User_Company:"",
    unitedstates: profile.User_Country ?profile.User_Country:"",
    gender:profile.User_Gender? profile.User_Gender.toString() :"0",
    city: profile.User_City ? profile.User_City:"",
    address: profile.User_Address ?  profile.User_Address:"",
    postal: profile.User_Zip ? profile.User_Zip :"",
    imagepath:profile.User_Image_Path ? profile.User_Image_Path :""
  });
  const [error, setError] = useState("");
  const [errorfirstname, setErrorFirst] = useState("");
  const [loading, setloading] = useState(false);
  const data = [
    { label: "English", value: "1" },
    { label: "Hindi", value: "2" },
    { label: "Franch", value: "3" },
  ];
  const data1 = [
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
    { label: "other", value: "3" },
  ];
  React.useEffect(() => {
      GetLoaction()
  }, []);
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const GetLoaction = async() => {
    let values = await AsyncStorage.multiGet(['currentLatitude', 'currentLongitude','addressComponent'])
    if(values !== null) {
      handleOnChangeText(values[0][1], "latitude")
      handleOnChangeText(values[1][1], "longitude")
      handleOnChangeText(values[2][1], "location")
    }
  } 
  const handleOnChangeText = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    console.log("dateaeatatag", typeof moment(date).format("LL"));
    setForm({ ...form, dob: moment(date).format("LL") });

    hideDatePicker();
  };
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "#9b9c9f" }]}>
          Language
        </Text>
      );
    }
    return null;
  };
  const renderLabel1 = () => {
    if (value1 || isFocus1) {
      return (
        <Text style={[styles.label, isFocus && { color: "#9b9c9f" }]}>Gender</Text>
      );
    }
    return null;
  };
  const {
    fullName,
    email,
    profession,
    username,
    dob,
    company,
    unitedstates,
    gender,
    city,
    address,
    postal,
    language,
  } = form;

  const updateError = (error, stateUpdate) => {
    stateUpdate(error);
    setTimeout(() => {
      stateUpdate("");
    }, 2500);
  };
const onOpenImage = () =>ActionSheetRef.show()

 const ImageGallery = async () => {
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
        multiple: false,
        compressImageQuality: 0.5
      }).then((image) => {
        console.log(image)
          uploadImage(image.data)
      })
    }, 1000)
  }

 const ImageCamera = async () => {
    setTimeout(() => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
        multiple: false,
        compressImageQuality: 0.5
      }).then((image) => {
        console.log(image)
        if (image.data) {
          uploadImage(image.data)
        }
      })
    }, 1000)
  }

 const uploadImage = async (base64) => {
  
    let data = JSON.stringify({
      Type: 2,
      Image_Base: "data:image/png;base64, " + base64
    })
    console.log(data)
    try {
      const res = await uploadimage(data,token)
      console.log(res[0].Image_Path, "resssss")
      handleOnChangeText(res[0].Image_Path, "imagepath")
      setmessage("Profile picture updated successfully.") 
      setcolor("green")
      onToggleSnackBar()

    } catch (error) {
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
    }
  }

  const isValidForm = () => {
    if (!fullName) return updateError("Full Name is Required!", setErrorFirst);

    if (!username) return updateError("Username is Required!", setError);

    return true;
  };
  const GetUserProfile = async () => {
    setloading(true);
    let data = {
      Type: 2,
    };
    console.log("GetUserProfile", data);
    await getusermasterdata(data, token)
      .then((res) => {
        console.log("res:GetUserProfile at edit profile ", res);
        setloading(false);
        dispatch(setProfile(res[0][0]));
      })
      .catch((error) => {
        setloading(false);
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
  };
  const editProfile = async (value) => {
    console.log("first", form);
    if (isValidForm()) {
      // Keyboard.dismiss();
      setloading(true);
      let data = {
        User_Name: form.fullName,
        User_Email: form.email,
        User_DOB: form.dob,
        User_Company: form.company,
        User_Country: form.unitedstates,
        User_Gender: parseInt(form.gender),
        User_City: form.city,
        User_Address: form.address,
        User_Zip: form.postal,
        User_IsActive: 1,
        Type: 8,
        User_Image_Path:form.imagepath,
        User_Occupation:form.profession,
        User_Language:parseInt(form.language),
        User_longitude:form.longitude,
        User_latitude:form.latitude,
        User_MotiID:form.username,
      };

      console.log("edit data", data);
      await updateprofile(data, token)
        .then((res) => {

          console.log("res: ", res);
          setloading(false);
          setmessage("Profile saved successfully.") 
          setcolor("green")
          onToggleSnackBar()
         
          GetUserProfile();
        })
        .catch((error) => {
          setloading(false);
          if (error.response) {
            console.log("error.response", error.response);
          } else if (error.request) {
            setloading(false);
            console.log("request error", error.request);
          } else if (error) {
            alert("Server Error");
            setloading(false);
          }
        });
      console.log("info", form);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F8F8FA", flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={"#F8F8FA" } />
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Edit Profile"}
      />
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ backgroundColor:"#fff",borderTopEndRadius:30,borderTopStartRadius:30,paddingTop:30,marginTop:10}}
      ><Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
         <View style={{marginHorizontal: 20 ,}}>

         <TouchableOpacity onPress={() =>onOpenImage()} style={{justifyContent:"center",alignItems:"center"}}>
         <Image
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50
                }}
                resizeMode="stretch"
                source={{
                  uri: form.imagepath
                    ? form.imagepath
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"}}
              />
            <ActionSheet
              ref={(o) => setActionSheetRef(o)}
              title={
                <Text
                  style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}
                >
                  Profile Photo
                </Text>
              }
              options={options}
              cancelButtonIndex={0}
              destructiveButtonIndex={4}
              useNativeDriver={true}
              onPress={(index) => {
                if (index === 0) {
                  // cancel action
                } else if (index === 1) {
                  ImageGallery()
                } else if (index === 2) {
                  ImageCamera()
                }
              }}
            />

        </TouchableOpacity>
        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 20 }}>
          <View style={styles.textinput}>
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "fullName")}
              label={"Full name*"}
              value={fullName}
              style={{ textTransform: "capitalize" }}
              error={errorfirstname}

            />
            {/* <Text style={{ color: "#DBBE80" }}>{error}</Text> */}
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "username")}
              label={"User name*"}
              value={username}
              style={{ textTransform: "capitalize" }}
              error={error}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "email")}
              label={"Email address"}
              value={email} 
              editable={true}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "profession")}
              label={"Profession/Occupation"}
              value={profession}
            />
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && { borderColor: "#9b9c9f", borderWidth: 1.5 },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                // search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Language" : "..."}
                searchPlaceholder="Search..."
                value={language}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  handleOnChangeText(item.value, "language");
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            <View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <InputText
                onChangeText={(value) => handleOnChangeText(value, "dob")}
                label={"Date of Birth"}
                value={dob}
                right={
                  <TextInput.Icon
                    name="calendar"
                    color={"#9B9C9F"}
                    onPress={() => showDatePicker()}
                  />
                }
                editable={true}
              />
            </View>
            <View style={styles.container}>
              {renderLabel1()}
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus1 && { borderColor: "#9b9c9f", borderWidth: 1.5 },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data1}
                // search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus1 ? "Gender" : "..."}
                searchPlaceholder="Search..."
                value={gender}
                onFocus={() => setIsFocus1(true)}
                onBlur={() => setIsFocus1(false)}
                onChange={(item) => {
                  handleOnChangeText(item.value, "gender");
                  setValue1(item.value);
                  setIsFocus1(false);
                }}
              />
            </View>
          </View>

          <View style={styles.heading2}>
            <Text style={styles.text2}>Billing Information</Text>
          </View>
          <View style={styles.textinput}>
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "company")}
              label={"Company"}
              value={company}
            />
            <InputText
              onChangeText={(value) =>
                handleOnChangeText(value, "unitedstates")
              }
              label={"United States"}
              value={unitedstates}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "city")}
              label={"City"}
              value={city}
            />

            <InputText
              onChangeText={(value) => handleOnChangeText(value, "address")}
              label={"Address"}
              value={address}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "postal")}
              label={"Postal/ZIP"}
              value={postal}
            />
          </View>
      {/* <View style={{marginVertical:10}}>
        {error ? <Text  style={{
          color: "#DBBE80",
          fontSize: 20,
          width: "90%",
        }}>{error}</Text> : null}
      </View> */}
          <View>
            <Button onPress={editProfile} title="Save Changes" />
          </View>
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 15,
    width: "100%",
    height: 32,
    // backgroundColor: 'red',
  },

  textinput: {
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#9b9c9f",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
  },

  heading2: {
    marginTop: 25,
    width: "90%",
    height: 32,
  },
  text2: {
    color: "#424242",
    fontSize: 24,
    // backgroundColor: '#FFFFFF',
    color: "#424242",
    fontWeight: "700",
  },
  container: {
    backgroundColor: "white",
    // padding: 16,
    marginTop: 10,
  },
  dropdown: {
    height: 55,
    borderColor: "#9b9c9f",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 8,
    top: -7,
    zIndex: 999,
    paddingHorizontal: 5,
    fontSize: 12,
    color: "#9b9c9f",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#9b9c9f",
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
 spinnerTextStyle: {
    color: '#FFF'
  },
});
export default EditProfile;
