import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  SafeAreaView,
Modal,
ImageBackground
} from "react-native";
import moti from "../Assets/moti.png";
import bell from "../Assets/bell.png";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import DeviceInfo from "react-native-device-info";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { getuserpost, getusermasterdata ,createupdateuserfavorite,createupdateuserpost,uploadimage} from "../Utils/apiconfig";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../store/action/profile/profile";
import * as Progress from 'react-native-progress';
import Spinner from 'react-native-loading-spinner-overlay';
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet"
import ImagePicker from "react-native-image-crop-picker";
const options = [
  "Cancel",
  <View>
    <Text style={{ color: "black" }}>Gallery</Text>
  </View>,
  <View>
    <Text style={{ color: "black"}}>Camera</Text>
  </View>
]
const Home = ({ navigation }) => {
  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.profileReducer.profile);
  const dispatch = useDispatch();
  const countInterval = React.useRef(null);
  const [text, settext] = useState("");
  const [loading, setloading] = useState(false);
  const [userpost, setuserpost] = useState([]);
  const [like, setlike] = useState(false);
  const [save, setsave] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [count, setCount] = useState(0);
  const [statue, setstatue] = useState([]);
  const [imageset, setimageset] = useState([]);
  const [ActionSheetRef, setActionSheetRef] = useState(null);
  const [form, setForm] = useState({
    text: "",
    document: "",
    imagepath:""
  });
  React.useEffect(() => {
    console.log("statue",statue)
      GetUserPost();
      GetUserProfile();
    return () => {
      GetUserPost();
      GetUserProfile();
    };
  }, []);
  const onLoadStart = () =>{
    setloading(true)
  }
  const onLoadEnd = () =>{
    setloading(false)
    setTimeout(() => {
    setShowModal(false) 
    }, 3000)
  }
const renderModal = () =>{
return (
 <Modal transparent={true} visible={showModal}>
  <ImageBackground defaultSource={require("../Assets/default.png")} onLoadEnd={()=>onLoadEnd()} onLoadStart={()=>onLoadStart()}
          source={{uri:statue.UP_ImagePath
    // "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/places-to-visit-in-Bangalore-in-June1.jpg"
      }} style={{height:"100%",width:"100%"}}>
     <SafeAreaView>
      <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20,width:"100%"}}>
      <TouchableOpacity>
       <Image
        resizeMode="stretch"
        source={{ uri: statue.User_Image_Path ?statue.User_Image_Path  : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",}}
        style={{height:50,width:50,borderRadius:50}}
        />
      </TouchableOpacity>
      <Text style={{color:"black",textTransform:"capitalize",fontSize:30,marginLeft:20}}>{statue.User_Name}</Text>
      </View>
  <View style={{width:"100%" ,padding:10}}>
<Progress.Bar color={"#DBBE80"} progress={count} width={null} />
</View>

</SafeAreaView>
</ImageBackground>
</Modal>)
}
const handleOnChangeText = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };

  const GetUserPost = async () => {
    let imageset1=[]
    setloading(true);
    let data = {
      Type: 1,
    };
    console.log("loginnnnnn", data);
    await getuserpost(data, token)
      .then((res) => {
        console.log("res:minal ", res[0]);
        setloading(false);
        setuserpost(res[0]);
       res[0].filter((item)=> imageset1.push({url:item.User_Image_Path}))
        setimageset(imageset1)
        console.log("imabeee",imageset)
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
  const GetUserProfile = async () => {
    setloading(true);
    let data = {
      Type: 2,
    };
    console.log("GetUserProfile", data);
    await getusermasterdata(data, token)
      .then((res) => {
        console.log("res:GetUserProfile ", res);
        setloading(false);
        // setuseinfo(res[0][0]);
        dispatch(setProfile(res[0][0]));
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
 const CreateUpdateUserPost = async () => {
    setloading(true);
    let data = {
     // "UP_PKeyID":1,
    // "UP_ImageName":"flower",
    // "UP_Size":2,
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
    UP_Product_URL:"www.google.com",
    UP_Coll_Desc:form.text,
    Type:1
    };
    console.log("CreateUpdateUserPost", data);
    await createupdateuserpost(data, token)
      .then((res) => {
        console.log("res:CreateUpdateUserPost ", res);
        setloading(false);
          setForm({
            text: "",
            document: "",
            imagepath:""})
       GetUserPost()
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
 const CreateUpdateUserFavorite = async (id) => {
        setlike(!like)

  return 0 
    setloading(true);
    let data = {
    UF_User_PkeyID:profile.User_PkeyID,
    UF_UP_PKeyID:id,
    };
    console.log("CreateUpdateUserFavorite", data);
    await createupdateuserfavorite(data, token)
      .then((res) => {
        console.log("res:CreateUpdateUserFavorite ", res);
        setloading(false);
        setlike(!like)
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
  const OpenStatus = (item) =>{
    setCount(0)
    setstatue(item)
    setShowModal(true)
  }
  React.useEffect(() => {
    if(count===0){
        countInterval.current = setInterval(() => setCount((old) => old + 0.3), 3000);
        return () => {
          clearInterval(countInterval); //when user exits, clear this interval.
        };}
  }, [count]);
    const onOpenImage = () => ActionSheetRef.show()

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
      <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={{ backgroundColor: "#fff" }}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={moti} style={styles.moti} />
            </TouchableOpacity>
            <View style={styles.header1}>
              <TouchableOpacity>
                <Image source={bell} style={styles.bell} />
              </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                  <Image
                     resizeMode="stretch"
                    source={{ uri: profile.User_Image_Path ?profile.User_Image_Path 
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
                       }}
                    style={styles.profile}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
                  onChangeText={(value) => handleOnChangeText(value, "text")}
                  value={form.text}
                  editable
                  multiline={true}
                  numberOfLines={3}
                  placeholder="write something.."
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
                <AntDesign name={"tago"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon1}>
                <Feather name={"lock"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon1}>
                <Foundation name={"sound"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.icon1}>
                <Feather name={"smile"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
          </View>
         
          <View>
            <TouchableOpacity onPress={()=>CreateUpdateUserPost()}>
              <View style={styles.buttonbox1}>
                <Text style={styles.buttontext1}>Publish</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amounttext}>5000</Text>
          </View>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={userpost}
            renderItem={({ item }) => (
              <View style={{justifyContent:"center",alignItems:"center",marginLeft:10,height:80,width:60}}>
              <TouchableOpacity onPress={()=>OpenStatus(item)} style={{height:55,width:55,borderRadius:50,borderWidth:2,borderColor:"#DBBE80",justifyContent:"center",alignItems:"center"}}>
                <Image 
                  resizeMode="stretch"
                  style={{height:50,width:50,borderRadius:50}}
                  source={{ uri: item.UP_ImagePath }}
                  />
              </TouchableOpacity>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.User_Name}</Text>
            </View>
            )}
          />
          <FlatList
            data={userpost}
            renderItem={({ item }) => (
              <View style={{ marginTop: 10 }}>
                <View style={styles.bar}>
                  <View style={styles.bar1}>
                    <TouchableOpacity>
                      <Image
                        source={{ uri: item.User_Image_Path ? item.User_Image_Path  : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"}}
                        style={styles.user}
                      />
                    </TouchableOpacity>
                    <View style={styles.text}>
                      <TouchableOpacity>
                        <Text style={styles.text1}>{item.User_Name}</Text>
                        <Text style={styles.text2}>{item.UP_Location}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.dot}>
                    <TouchableOpacity>
                      <Entypo
                        name={"dots-three-vertical"}
                        size={24}
                        color="#BDBEC1"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.image}>
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={{ uri: item.UP_ImagePath }}
                      style={styles.image1}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  <Text style={styles.content1}>
                    {item.UP_Coll_Desc.trimStart()}
                  </Text>
                  <View style={styles.icon10}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent:"space-between",
                        width: "50%",
                         paddingtop: 10,
                        paddingHorizontal: 10,

                      }}
                    >
                      <View style={styles.icontext}>
                        <TouchableOpacity onPress={()=>CreateUpdateUserFavorite(item.UP_PKeyID)}>
                          <AntDesign
                            name={like ? "heart" : "hearto"}
                            size={22}
                            color={like ? "red" : "#807C7D"}
                          />
                        </TouchableOpacity>
                        <View>
                          <Text style={styles.liketext}>22k</Text>
                        </View>
                      </View>
                      <View style={styles.icontext}>
                        <TouchableOpacity>
                          <Feather
                            name={"message-circle"}
                            size={24}
                            color="#807C7D"
                          />
                        </TouchableOpacity>
                        <View>
                          <Text style={styles.commenttext}>
                            {item.commentCount}{22}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.icontext}>
                        <TouchableOpacity>
                          <AntDesign
                            name={"sharealt"}
                            size={24}
                            color="#898788"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.icontext}>
                        <TouchableOpacity onPress={()=>setsave(!save)}>
                        <FontAwesome
                          name={save ? "bookmark" : "bookmark-o"}
                          size={24}
                          color={"#898788"}
                          style={{marginRight:10}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
      {renderModal()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "90%",
    marginTop: 5,
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
    shadowColor: "#DBBE80",
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
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
    marginBottom: 40,
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

export default Home;
