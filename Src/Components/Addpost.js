import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import moti from "../Assets/moti.png";
import bell from "../Assets/bell.png";
import React, { useState ,useEffect} from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import DeviceInfo from "react-native-device-info";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { createupdateuserpost,uploaddocumnet,uploadimage} from "../Utils/apiconfig";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { useSelector, useDispatch } from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet"
import ImagePicker from "react-native-image-crop-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
const options = [
  "Cancel",
  <View>
    <Text style={{ color: "black" }}>Gallery</Text>
  </View>,
  <View>
    <Text style={{ color: "black"}}>Camera</Text>
  </View>
]

export default function Addpost({navigation}) {
  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.profileReducer.profile);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [imageset, setimageset] = useState([]);
  const [inputcount, setinputcount] = useState(5000)
  const [ActionSheetRef, setActionSheetRef] = useState(null);
  const [showkeyboard, setshowkeyboard] = useState(false)
  const [form, setForm] = useState({
    text: "",
    document: "",
    imagepath:"",
    location:""
  });
  React.useEffect(() => {
      GetLoaction()
    return () => {
      GetLoaction()
    };
  }, []);
const ImageGallery = async () => {
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
        multiple: true,
        compressImageQuality: 0.5
      }).then((image) => {
        console.log(image)
          for(let i = 0 ;i<image.length;i++){
          uploadImage(image[i].data,image[i])}
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
        multiple: true,
        compressImageQuality: 0.5
      }).then((image) => {
        console.log(image)
        if (image) {
                    for(let i = 0 ;i<image.length;i++){
          uploadImage(image[i].data,image[i])
                    }
        }
      })
    }, 1000)
  }
const uploadImage = async (base64,image) => {
    let data = JSON.stringify({
      Type: 2,
      Image_Base: "data:image/png;base64, " + base64
    })
    // console.log(data)
    try {
      const res = await uploadimage(data,token)
      console.log(res[0].Image_Path, "resssss")
       handleOnChangeText(res[0].Image_Path, "imagepath")
      if(res[0].Image_Path){
          let data = {  
                UI_Name :image.filename,
                UI_File_Name :image.filename,
                UI_File_Path :res[0].Image_Path,
                UI_File_Type :image.mime
            }   
          // imageset.push(data)
      setimageset(oldArray => [data,...oldArray])
      }
    } catch (error) {
      if (error.request) {
        console.log(error.request)
      } else if (error.responce) {
        console.log(error.responce)
      } else {
        console.log(error)
      }
    }
  }

  const GetLoaction = async() => {
  let values = await AsyncStorage.multiGet(['currentLatitude', 'currentLongitude','addressComponent'])
    if(values !== null) {
      handleOnChangeText(values[0][1], "latitude")
      handleOnChangeText(values[1][1], "longitude")
      handleOnChangeText(values[2][1], "location")
    }
  } 
const onOpenImage = () => ActionSheetRef.show()
const handleOnChangeText = (value, fieldName) =>  setForm({ ...form, [fieldName]: value });

const CreateUpdateUserPost = async () => {
    setloading(true);
    let data = {
    UP_ImageName:"flower",
    UP_Size:2,
    UP_ImagePath:form.imagepath,
    UP_IsFirst:1,
    UP_Number:1,
    UP_UserID:profile.User_PkeyID,
    UP_UC_PKeyID:profile.User_PkeyID,
    UP_COLL_PKeyID:1,
    UP_IsActive:1,
    UP_IsDelete:0,
    UP_Show:1,
    UP_AddSpotlight:1,
    UP_Closet:1,
    UP_Product_URL:www.google.com,
    UP_Coll_Desc:form.text,
    UP_Doc_Type:"file",
    UP_Location:form.location,
    UP_latitude:form.latitude,
    UP_longitude:form.longitude,
    UP_IsAdmin:1,
    Type:2
    };
    console.log("CreateUpdateUserPost", data);
    await createupdateuserpost(data, token)
      .then((res) => {
        console.log("res:CreateUpdateUserPost ", res);
        setloading(false);
          setForm({
            text: "",
            document: "",
            imagepath:""
          })
      })
      .catch((error) => {
        setloading(false);
        if (error.response) {
          console.log("error.response", error.response);
        } else if (error.request) {
          setloading(false);
          console.log("request error", error.request);
        } else if (error) {
          console.log("Server Error");
          setloading(false);
        }
      });
  };
useEffect(() => {
  console.log("imageset",imageset)
}, [imageset])
const printimage = () =>{
 console.log("imageset",imageset)
}
  return (
    <SafeAreaView>
         <View style={styles.box}>
            <TouchableOpacity>
              <View style={styles.buttonbox}>
                <View style={styles.buttonboxicon}>
                  <SimpleLineIcons
                    name={"compass"}
                    size={15}
                    style={styles.buttonboxicon}
                  />
                </View>
                <Text style={styles.buttontext}>Explore Posts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonbox}>
                <View style={styles.buttonboxicon}>
                  <SimpleLineIcons
                    name={"compass"}
                    size={15}
                    style={styles.buttonboxicon}
                  />
                </View>
                <Text style={styles.buttontext}>Explore Creators</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.textarea}>
            <TouchableOpacity>
             <Image
                resizeMode="stretch"
                source={{ uri: profile.User_Image_Path ?profile.User_Image_Path 
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
                       }}
                style={styles.profile}
              />
            </TouchableOpacity>
                <TextInput
                  style={styles.textareatext}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace' ) {
                      if( inputcount <= 4999 ){  
                        let count = inputcount + 1
                        setinputcount(count)}
                    }else{
                      let count = 5000 - (form.text.length +1)
                      setinputcount(count) }
                  }}
                  maxLength={5000}
                  onChangeText={(value) => handleOnChangeText(value, "text")}
                  value={form.text}
                  multiline={true}
                  numberOfLines={3}
                  placeholder="Write something.."
                />
          </View>
          <View style={styles.iconbox}>
            <TouchableOpacity onPress={() =>onOpenImage()}>
              <View style={styles.icon}>
                <FontAwesome name={"photo"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
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
            <TouchableOpacity>
              <View style={styles.icon1}>
                <FontAwesome name={"file-zip-o"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon1}>
                <Foundation name={"sound"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              // onPress={()=>setshowkeyboard(!showkeyboard)}
              >
              <View style={styles.icon1}>
                <Feather name={"smile"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
          </View>
         
          <View>
            <TouchableOpacity onPress={()=>printimage()}>
              <View style={styles.buttonbox1}>
                <Text style={styles.buttontext1}>Publish</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amounttext}>{inputcount}</Text>
          </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  header1: {
    flexDirection: "row",
  },
  moti: {
    width: 90,
    height: 45,
  },
  bell: {
    margin: 15,
    marginRight: 25,
    // backgroundColor: "red",
    width: 25,
    height: 25,
  },
  profile: {
    // marginHorizontal: 10,

    height: 50,
    width: 50,
    borderRadius: 50,
  },
  bar: {
    padding: 5,
    marginTop: 20,
    marginLeft: 5,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bar1: {
    flexDirection: "row",
  },
  user: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  text: {
    marginLeft: 10,
  },
  text1: {
    fontSize: 20,
    color: "#36596A",
    fontWeight: "400",
    textTransform: "capitalize",
  },
  text2: {
    fontSize: 15,
    height: 16,
    color: "#A6A6A6",
    fontWeight: "400",
    textTransform: "capitalize",
  },
  image: {
    width: "100%",
    // backgroundColor: "green",
  },
  image1: {
    height: DeviceInfo.hasNotch ? windowHeight - 350 : windowHeight - 250,
    width: "100%",
  },
  dot: {
    marginRight: 20,
    justifyContent: "flex-end",
    width: 15,
    height: 30,
  },
  content: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingtop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    // shadowColor: "#DBBE80",
    // shadowOffset: { width: 5, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 10,
  },
  content1: {
    padding: 10,
    fontWeight: "400",
    fontSize: 14,
    color: "#9B9C9F",
    lineHeight: 22,
  },
  like: {
    marginLeft: 20,
    height: 25,
  },
  liketext: {
    marginLeft: 10,
    fontWeight: "400",
    fontSize: 14,
    color: "#231F20",
  },
  icon10: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  icontext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  commenttext: {
    marginLeft: 10,
    fontWeight: "400",
    fontSize: 14,
    color: "#231F20",
  },
  share: {
    marginRight: 50,
    // backgroundColor: 'purple',
  },
  header: {
    marginLeft: 20,
    width: "90%",
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  header1: {
    flexDirection: "row",
  },
  moti: {
    width: 90,
    height: 45,
  },
  box: {
    // marginLeft: 20,
    backgroundColor: "#f8f8f8f8",
    width: "100%",
    height: 140,
  },
  buttonbox: {
    marginLeft: 20,
    marginTop: 20,
    width: "90%",
    height: 40,
    backgroundColor: "#DBBE80",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  buttonboxicon: {
    marginTop: 6,
    marginLeft: 60,
    color: "#FFFFFF",
  },
  buttontext: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 10,
    marginTop: 9,
    fontSize: 16,
    color: "#FFFFFF",
  },
  textarea: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 90,
    width: "90%",
   
  },
  textareatext: {
    marginLeft: 20,
    textAlignVertical: "top",
    width: "80%",
    height: 70,
  },
  iconbox: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    width: "90%",
    marginLeft: 20,
  },
  icon: {
    marginLeft: 15,
  },
  buttonbox1: {
    marginLeft: 20,
    marginTop: 15,
    width: "90%",
    height: 40,
    backgroundColor: "#DBBE80",
    borderRadius: 20,
  },
  buttontext1: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 10,
    marginTop: 9,
    fontSize: 16,
    color: "#FFFFFF",
  },
  icon1: {
    marginLeft: 30,
  },
  amount: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 10,
    width: "90%",
    marginBottom: 15,
  },
  amounttext: {
    textAlign: "right",
  },
  space: {
    backgroundColor: "#f8f8f8f8",
    height: 20,
  },
  profilearea: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width: "90%",
  },
  historybox: {
    display: "flex",
    flexDirection: "row",
  },
  textareatext1: {
    marginLeft: 20,
    marginTop: 0,
    color: "#DBBE80",
    fontSize: 20,
  },
  months: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "300",
  },
  lock: {
    marginLeft: 3,
    fontWeight: "100",
  },
  icon2: { marginTop: 7, marginLeft: 5 },

  text: {
    marginTop: 7,
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "300",
  },
  icon3: {
    marginLeft: 45,
  },
  body: {
    marginLeft: 20,
  },
 title: {
    marginTop: 2,
    color: "#424242",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "capitalize",
  }, 
  spinnerTextStyle: {
    color: '#FFF'
  },
});
