
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
StatusBar,
} from "react-native";
import React, { useState ,useEffect} from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import { uploaddocumnet,createupdateuserstory} from "../Utils/apiconfig";
import { useSelector, useDispatch } from "react-redux";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet"
import ImagePicker from "react-native-image-crop-picker";
import DocumentPicker, {isInProgress} from 'react-native-document-picker'
import { SliderBox } from "react-native-image-slider-box";
import TrackPlayer from 'react-native-track-player';
import { useFocusEffect } from "@react-navigation/native";
import Spinner from 'react-native-loading-spinner-overlay';
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

export default function AddStory({navigation}) {
  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.profileReducer.profile);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [inputcount, setinputcount] = useState(5000)
  const [showkeyboard, setshowkeyboard] = useState(false)
  const [userpostdata, setuserpostdata] = useState([])
  const [ActionSheetRef, setActionSheetRef] = useState(null);
  const [type, settype] = useState("Text")
  const [lodingtext, setlodingtext] = useState("")
  const [visible, setVisible] = useState(false);
  const [color, setcolor] = useState("green")
  const [message, setmessage] = useState("")
  const [imageurl, setimageurl] = useState([])
  const [form, setForm] = useState({
    text: "",
    location:"",
    longitude:0,
    latitude:0,
  });

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const handleError = (err) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err
    }
  }
const OpenDocumentPicker = () => {
settype("Document")
 DocumentPicker.pickMultiple({
  type: [DocumentPicker.types.csv,DocumentPicker.types.xls,DocumentPicker.types.xlsx,DocumentPicker.types.pptx,DocumentPicker.types.ppt,DocumentPicker.types.pdf,DocumentPicker.types.docx,DocumentPicker.types.doc,DocumentPicker.types.plainText],
  allowMultiSelection:true,
}).then((item)=>{
console.log(item)
const formData = new FormData()
      formData.append('file', item[0]);
      console.log(formData)
      uploadDocumnet(formData)  
}).catch(handleError)
}
const OpenMusicPicker = () => {
settype("Audio")
 DocumentPicker.pickMultiple({
  allowMultiSelection:true,
  type: [DocumentPicker.types.audio],
  }).then((item)=>{
      console.log(item)
      const formData = new FormData()
      formData.append('file', item[0]);
      console.log(formData)
      uploadDocumnet(formData)  
}).catch(handleError)
}
const ImageGallery = async () => {
    settype("Image")
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
          if (image) {  
      for(let i = 0;i< image.length ; i++){
          const imagedata ={
            fileCopyUri: null,
            name: image[i].filename,
            size: image[i].size,
            type:image[i].mime,
            uri:image[i].sourceURL,
          }
            const formData = new FormData()
            formData.append('file', imagedata);
            console.log(formData)
            uploadDocumnet(formData)
        }
        }
      })
    }, 1000)
  }
const selectVideo = async () => {
 settype("Video")
      ImagePicker.openPicker({
      mediaType: "video",
      multiple: true,
    }).then((video) => {
for(let i = 0;i< video.length ; i++){
          const videodata ={
            fileCopyUri: null,
            name: video[i].filename,
            size: video[i].size,
            type:video[i].mime,
            uri:video[i].sourceURL,
          }
           const formData = new FormData()
      formData.append('file', videodata);
      console.log(formData)
      uploadDocumnet(formData) 
        }
     
    });
    }

 const ImageCamera = async () => {
    settype("Image")
    setTimeout(() => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
        multiple: true,
        compressImageQuality: 0.5,
      }).then((image) => {
        console.log(image)
       const formData = new FormData()
      formData.append('file', image[0]);
      console.log(formData)
      uploadDocumnet(formData)  
      })
    }, 1000)
  }
const onOpenImage = () => ActionSheetRef.show()
// const handleOnChangeText = (value, fieldName) =>  setForm({ ...form, [fieldName]: value });
const uploadDocumnet = async (data) => {
    setloading(true)
    setlodingtext("Uploading multimedia file.....")
    console.log("chekkk data",data)
    try {
      const res = await uploaddocumnet(data,token)
      console.log("uploadDocumnet ===>",res.Data[0])
      const postdata = {
        UI_Name :res.Data[0].name,
        UI_File_Name: res.Data[0].name,
        UI_File_Path :res.Data[0].url,
        UI_File_Type :res.Data[0].ext
    }
      console.log(postdata)
      userpostdata.push(postdata)
      setuserpostdata([...userpostdata ,postdata ])
      imageurl.push(res.Data[0].url)
      setimageurl(imageurl)
     
      setlodingtext("Uploaded file.")
      setloading(false)
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
ImagePicker.clean().then(() => {
  console.log('removed all tmp images from tmp directory');
}).catch(e => {
  alert(e);
});
  }
const CreateUpdateUserStory = async () => {
 console.log(userpostdata.length > 0)
// return 0
  if(userpostdata.length > 0 && userpostdata[0].UI_File_Path) {
    setloading(true);
    let data = {
  US_ImageName:userpostdata.length > 0 ? userpostdata[0].UI_File_Name : "",
    US_ImagePath:userpostdata.length > 0 ? userpostdata[0].UI_File_Path : "",
    US_IsActive:1,
    US_Product_URL:"",
    US_Doc_Type:type,
    User_Image_Post_DTO:userpostdata.length > 0  ? JSON.stringify(userpostdata) : [],
    Type:1,    
    };
   console.log("==============================")
   console.log("CreateUpdateUserStory", data);
   console.log("==============================")

// return 0
    await createupdateuserstory(data, token)
      .then((res) => {
        console.log("res:CreateUpdateUserStory ", res);
        setloading(false);
        setuserpostdata([])
        setimageurl([])
          setForm({
            text: "",
            location:""
          })
           onToggleSnackBar()
          setmessage("Story uploaded successfully.") 
          setcolor("green")
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
     }else{
    setmessage("Select atleast one media file....") 
    setcolor("red")
    onToggleSnackBar()
  }
  };
    const IntilaizeSetup = async() => await TrackPlayer.setupPlayer()
    const ResetSetup = async() =>await TrackPlayer.reset();
  useEffect(() => {
    IntilaizeSetup()
    return () => {
      ResetSetup()
    }
  }, [])
  
    const PlayTrack = async () => {  
    console.log(imageurl[0].url)
    const track3 = {
      url: imageurl[0].url,//"http://apifeelmoti.ikaart.org//UploadDocuments/637932503293946244_0.mp3",
      //url: "http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3", // Load media from the file system
      // title: 'Ice Age',
      // artist: 'deadmau5',
      // Load artwork from the file system:
      artwork: 'file:///storage/sdcard0/Downloads/cover.png',
      // duration: 411
    };
    console.log(track3);
    await TrackPlayer.add(track3);
    await TrackPlayer.play();
  };
  return (
   <SafeAreaView  style={{flex:1,backgroundColor:"#fff"}}>
   <StatusBar backgroundColor={"#FFFFFF" } />

    <ScrollView style={{flex:1,marginHorizontal:10}}>
      <Spinner visible={loading} textContent={lodingtext} />
         {/* <View style={styles.box}>
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
          </View> */}
          <View style={{marginVertical:20,flexDirection:"row",justifyContent:"center",alignItems:"center",}}><Text style={{color:"#DBBE80",fontWeight:"bold",fontSize:30}}>Create Story</Text>
        <Entypo
          onPress={()=>navigation.navigate("Home")}
          name={"cross"}
          size={35}
          color="#424242"
          style={{ position:"absolute",right:10,}}
        /></View>
        <View style={{backgroundColor:"#fff",shadowColor: "#000",
            shadowOffset: { width: 5, height: 3 }, 
            shadowOpacity: 0.1, shadowRadius: 2, 
            elevation: 10,}}>
        <View style={styles.textarea}>
            <TouchableOpacity>
             <Image
                resizeMode="stretch"
                source={{ uri: profile.User_Image_Path ? profile.User_Image_Path 
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
                       }}
                style={styles.profile}
              />
            </TouchableOpacity>
            <View style={{marginLeft:20}}><Text style={{color:"#DBBE80",fontWeight:"bold",fontSize:20}}>{profile.User_Name}</Text></View>
          </View>
          <View style={{marginVertical:20}}>
          {imageurl.length < 0 &&(<View style={{alignSelf:"center", marginVertical:20,borderWidth:1,borderColor:"#DBBE80",borderRadius:100,height:120,width:120,alignItems:"center",justifyContent:'center'}}><Text style={{color:"#DBBE80",fontWeight:"bold",fontSize:20,alignSelf:"center",textAlign:"center"}}>Preview Story</Text></View>)}
          {imageurl.length > 0 && type === "Image" && <View>
          <SliderBox
          images={imageurl}
          sliderBoxHeight={300}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          resizeMode="stretch"
        /><Text>{form.text}</Text></View>}
        {imageurl.length > 0 && type === "Document" && <TouchableOpacity style={{width:"100%",height:200,justifyContent:"center",alignItems:"center"}} ><AntDesign name={"filetext1"} size={100} color="#DBBE80" /><Text>{form.text}</Text></TouchableOpacity>}
        {imageurl.length > 0 && type === "Audio" && <TouchableOpacity onPress={()=>PlayTrack(imageurl[0])} style={{width:"100%",paddingVertical:40,justifyContent:"center",alignItems:"center"}} ><AntDesign name={"sound"} size={100} color="#DBBE80" /><Text style={{marginTop:10}}>{form.text}</Text></TouchableOpacity>}
          </View>
          <View style={styles.iconbox}>
            <Text style={{color:"#DBBE80",fontWeight:"bold"}}>Add to Your story</Text>
              <TouchableOpacity onPress={()=>OpenDocumentPicker()}>
              <View>
                <AntDesign name={"filetext1"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>onOpenImage()}>
              <View>
                <Feather name={"image"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>selectVideo()}>
              <View>
                <Feather name={"video"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={()=>OpenMusicPicker()}>
              <View>
                <Feather name={"mic"} size={24} color="#DBBE80" />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>CreateUpdateUserStory()}>
              <View style={styles.buttonbox1}>
                <Text style={styles.buttontext1}>Publish</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amounttext}>{inputcount}</Text>
          </View>

        </View>
      </ScrollView>
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
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{backgroundColor:color}}
        action={{label: 'OK',onPress: () => {onDismissSnackBar}}}>{message}</Snackbar>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  profile: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  text1: {
    fontSize: 20,
    color: "#36596A",
    fontWeight: "400",
    textTransform: "capitalize",
  },
 
  buttonbox: {
    marginTop: 20,
    width: "100%",
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
    marginTop: 20,
    width: "100%",
    alignItems:"center"
   
  },
  textareatext: {
    textAlignVertical: "top",
    width: "80%",
    height: 70,
  },
  iconbox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding:10,
    justifyContent:"space-between",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#DBBE80",
    borderRadius:10
  },
  icon: {
    marginLeft: 15,
  },
  buttonbox1: {
    marginTop: 15,
    width: "100%",
    height: 40,
    backgroundColor: "#DBBE80",
    borderRadius: 20,
  },
  buttontext1: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 9,
    fontSize: 16,
    color: "#FFFFFF",
  },
  icon1: {
    marginLeft: 30,
  },
  amount: {
    marginTop: 15,
    width: "95%",
    marginBottom: 15,
  },
  amounttext: {
    textAlign: "right",
  },
  text: {
    marginTop: 7,
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "300",
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
 box: {
    // marginLeft: 20,
    backgroundColor: "#f8f8f8f8",
    width: "100%",
    height: 140,
  },
});
