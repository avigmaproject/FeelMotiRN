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
  StatusBar,
  Platform,
} from "react-native";
import moti from "../Assets/moti.png";
import bell from "../Assets/bell.png";
import React, { useState, useEffect } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import DeviceInfo from "react-native-device-info";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import {
  createupdateuserpost,
  uploaddocumnet,
  uploadimage,
} from "../Utils/apiconfig";
import Header from "../CustomComponent/Header";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
import ImagePicker from "react-native-image-crop-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DocumentPicker, { isInProgress } from "react-native-document-picker";
import { SliderBox } from "react-native-image-slider-box";
import TrackPlayer from "react-native-track-player";
import { useFocusEffect } from "@react-navigation/native";
import { Snackbar } from "react-native-paper";
import { WebView } from "react-native-webview";
import profile from "../Assets/profile.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const options = [
  "Cancel",
  <View>
    <Text style={{ color: "black" }}>Gallery</Text>
  </View>,
  <View>
    <Text style={{ color: "black" }}>Camera</Text>
  </View>,
];

const OnDemand = ({ navigation }) => {
  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.profileReducer.profile);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [inputcount, setinputcount] = useState(5000);
  const [userpostdata, setuserpostdata] = useState([]);
  const [ActionSheetRef, setActionSheetRef] = useState(null);
  const [type, settype] = useState("Text");
  const [lodingtext, setlodingtext] = useState("");
  const [visible, setVisible] = useState(false);
  const [color, setcolor] = useState("green");
  const [message, setmessage] = useState("");
  const [imageurl, setimageurl] = useState([]);
  const [form, setForm] = useState({
    text: "",
    location: "",
    longitude: 0,
    latitude: 0,
  });
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const handleError = (err) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn("cancelled");
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        "multiple pickers were opened, only the last will be considered"
      );
    } else {
      throw err;
    }
  };
  const OpenDocumentPicker = () => {
    settype("Document");
    DocumentPicker.pickMultiple({
      type: [
        DocumentPicker.types.csv,
        DocumentPicker.types.xls,
        DocumentPicker.types.xlsx,
        DocumentPicker.types.pptx,
        DocumentPicker.types.ppt,
        DocumentPicker.types.pdf,
        DocumentPicker.types.docx,
        DocumentPicker.types.doc,
        DocumentPicker.types.plainText,
      ],
      allowMultiSelection: true,
    })
      .then((item) => {
        console.log(item);
        const formData = new FormData();
        formData.append("file", item[0]);
        console.log(formData);
        uploadDocumnet(formData);
      })
      .catch(handleError);
  };
  const OpenMusicPicker = () => {
    settype("Audio");
    DocumentPicker.pickMultiple({
      allowMultiSelection: true,
      type: [DocumentPicker.types.audio],
    })
      .then((item) => {
        console.log(item);
        const formData = new FormData();
        formData.append("file", item[0]);
        console.log(formData);
        uploadDocumnet(formData);
      })
      .catch(handleError);
  };
  const selectVideo = async () => {
    settype("Video");
    ImagePicker.openPicker({
      mediaType: "video",
      multiple: true,
    }).then((video) => {
      console.log("videovideo", video);
      for (let i = 0; i < video.length; i++) {
        const videodata = {
          fileCopyUri: null,
          name:
            Platform.OS === "ios"
              ? video[i].filename
              : video[i].modificationDate,
          size: video[i].size,
          type: video[i].mime,
          uri: Platform.OS === "ios" ? video[i].sourceURL : video[i].path,
        };
        const formData = new FormData();
        formData.append("file", videodata);
        console.log(formData);
        uploadDocumnet(formData);
      }
    });
  };

  const ImageGallery = async () => {
    settype("Image");
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
        multiple: true,
        compressImageQuality: 0.5,
      }).then((image) => {
        console.log(image);
        if (image) {
          for (let i = 0; i < image.length; i++) {
            const imagedata = {
              fileCopyUri: null,
              name:
                Platform.OS === "ios"
                  ? image[i].filename
                  : image[i].modificationDate,
              size: image[i].size,
              type: image[i].mime,
              uri: Platform.OS === "ios" ? image[i].sourceURL : image[i].path,
            };
            const formData = new FormData();
            formData.append("file", imagedata);
            console.log(formData);
            uploadDocumnet(formData);
          }
        }
      });
    }, 1000);
  };

  const ImageCamera = async () => {
    settype("Image");
    setTimeout(() => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
        multiple: true,
        compressImageQuality: 0.5,
      }).then((image) => {
        console.log(image);
        for (let i = 0; i < image.length; i++) {
          const imagedata = {
            fileCopyUri: null,
            name:
              Platform.OS === "ios"
                ? image[i].filename
                : image[i].modificationDate,
            size: image[i].size,
            type: image[i].mime,
            uri: Platform.OS === "ios" ? image[i].sourceURL : image[i].path,
          };
          const formData = new FormData();
          formData.append("file", imagedata);
          console.log(formData);
          uploadDocumnet(formData);
        }
      });
    }, 1000);
  };
  const onOpenImage = () => ActionSheetRef.show();
  const handleOnChangeText = (value, fieldName) =>
    setForm({ ...form, [fieldName]: value });
  const uploadDocumnet = async (data) => {
    setimageurl([]);
    // console.log("uploadDocumnetuploadDocumnet==",data)
    setloading(true);
    setlodingtext("Uploading multimedia file.....");
    try {
      const res = await uploaddocumnet(data, token);
      console.log("uploadDocumnet ===>", res.Data[0]);
      console.log(res);
      const postdata = {
        UI_Name: res.Data[0].name,
        UI_File_Name: res.Data[0].name,
        UI_File_Path: res.Data[0].url,
        UI_File_Type: res.Data[0].ext,
      };
      console.log(postdata);
      userpostdata.push(postdata);
      setuserpostdata(userpostdata);
      imageurl.push(res.Data[0].url);
      setimageurl(imageurl);
      setlodingtext("Uploaded file.");
      setloading(false);
    } catch (error) {
      if (error.request) {
        setmessage("Request Error");
        setcolor("red");
        onToggleSnackBar();
        console.log(error.request);
      } else if (error.responce) {
        setmessage("Responce Error");
        setcolor("red");
        onToggleSnackBar();
        console.log(error.responce);
      } else {
        setmessage("Somthing went wrong....");
        setcolor("red");
        onToggleSnackBar();
        console.log(error);
      }
      setloading(false);

      ImagePicker.clean()
        .then(() => {
          console.log("removed all tmp images from tmp directory");
        })
        .catch((e) => {
          alert(e);
        });
    }
  };
  const Validation = () => {
    let validation = false;
    if (form.text.length > 0) {
      validation = true;
    }
    return validation;
  };
  const CreateUpdateUserPost = async () => {
    let values = await AsyncStorage.multiGet([
      "currentLatitude",
      "currentLongitude",
      "addressComponent",
    ]);
    console.log(userpostdata.length > 0);
    // return 0
    if (values !== null && Validation()) {
      console.log(values[0][1], values[1][1], values[2][1]);
      setloading(true);
      let data = {
        UP_ImageName:
          userpostdata.length > 0 ? userpostdata[0].UI_File_Name : "",
        UP_ImagePath:
          userpostdata.length > 0 ? userpostdata[0].UI_File_Path : "",
        UP_UserID: profile.User_PkeyID,
        UP_UC_PKeyID: profile.User_PkeyID,
        UP_Product_URL: "",
        UP_Coll_Desc: form.text,
        UP_Doc_Type: type,
        UP_Location: values[2][1],
        UP_latitude: values[0][1],
        UP_longitude: values[1][1],
        Type: 1,
        User_Image_Post_DTO:
          userpostdata.length > 0 ? JSON.stringify(userpostdata) : [],
      };
      console.log("==============================");
      console.log("CreateUpdateUserPost", data);
      console.log("==============================");

      // return 0
      await createupdateuserpost(data, token)
        .then((res) => {
          console.log("res:CreateUpdateUserPost ", res);
          setloading(false);
          setuserpostdata([]);
          setimageurl([]);
          setForm({
            text: "",
            location: "",
          });
          onToggleSnackBar();
          setmessage("Post uploaded successfully.");
          setcolor("green");
        })
        .catch((error) => {
          setloading(false);
          if (error.request) {
            setmessage("Request Error");
            setcolor("red");
            onToggleSnackBar();
            console.log(error.request);
          } else if (error.responce) {
            setmessage("Responce Error");
            setcolor("red");
            onToggleSnackBar();
            console.log(error.responce);
          } else {
            setmessage("Somthing went wrong....");
            setcolor("red");
            onToggleSnackBar();
            console.log(error);
          }
        });
    } else {
      setmessage("Select atleast one media file or enter some text....");
      setcolor("red");
      onToggleSnackBar();
    }
  };

  const IntilaizeSetup = async () => await TrackPlayer.setupPlayer();
  const ResetSetup = async () => await TrackPlayer.reset();
  useEffect(() => {
    IntilaizeSetup();
    return () => {
      ResetSetup();
    };
  }, []);

  const PlayTrack = async () => {
    const track3 = {
      url: "http://apifeelmoti.ikaart.org//UploadDocuments/637932503293946244_0.mp3",
      //url: "http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3", // Load media from the file system
      // title: 'Ice Age',
      // artist: 'deadmau5',
      // Load artwork from the file system:
      artwork: "file:///storage/sdcard0/Downloads/cover.png",
      // duration: 411
    };
    console.log(track3);
    await TrackPlayer.add(track3);
    await TrackPlayer.play();
  };
  console.log("imageurl", imageurl[0]);

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:"#F8F8FA" }}>
      <StatusBar barStyle="dark-content" backgroundColor={"#F8F8FA"} />
      <Header  onPress={() => navigation.navigate("Home")} title={"On Demand"} />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          marginVertical: 30,
          borderRadius: 10,
          flex: 1,
        }}
      >
        <Spinner visible={loading} textContent={lodingtext} />
        <View style={{ marginHorizontal: 20, flex: 1 }}>
          <View style={styles.body}>
            <TouchableOpacity>
              <Image
                resizeMode="stretch"
                source={{
                  uri: profile.User_Image_Path
                    ? profile.User_Image_Path
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
                }}
                style={styles.profile}
              />
            </TouchableOpacity>
            <View
              style={{
                width: "85%",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.textareatext}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    if (inputcount <= 4999) {
                      let count = inputcount + 1;
                      setinputcount(count);
                    }
                  } else {
                    let count = 5000 - (form.text.length + 1);
                    setinputcount(count);
                  }
                }}
                maxLength={5000}
                onChangeText={(value) => handleOnChangeText(value, "text")}
                value={form.text}
                multiline={true}
                numberOfLines={3}
                placeholder={`Whats on your mind, ${profile.User_Name}??`}
              />
            </View>
          </View>
        </View>
        <View style={styles.media}>
          <TouchableOpacity onPress={() => onOpenImage()}>
            <View style={styles.imagemedia}>
              <Feather
                name={"image"}
                size={24}
                color="#36596A"
                style={{ marginTop: 15, marginLeft: 20 }}
              />
              <Text style={styles.imagemediatext}>Upload a Image</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectVideo()}>
            <View style={styles.imagemedia}>
              <Feather
                name={"video"}
                size={24}
                color="#36596A"
                style={{ marginTop: 15, marginLeft: 20 }}
              />
              <Text style={styles.imagemediatext}>Upload a Video</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => OpenDocumentPicker()}>
            <View style={styles.imagemedia}>
              <AntDesign
                name={"filetext1"}
                size={24}
                color="#36596A"
                style={{ marginTop: 15, marginLeft: 20 }}
              />
              <Text style={styles.imagemediatext}>Upload a Document</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => OpenMusicPicker()}>
            <View style={styles.imagemedia}>
              <Feather
                name={"mic"}
                size={24}
                color="#36596A"
                style={{ marginTop: 15, marginLeft: 20 }}
              />
              <Text style={styles.imagemediatext}>Upload a Voice</Text>
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => CreateUpdateUserPost()}
            >
              <Text style={styles.submit}>Publish</Text>
            </TouchableOpacity>
          </View>
        </View>
        {imageurl.length > 0 && type === "Image" && (
          <View>
            <SliderBox
              resizeMode="stretch"
              images={imageurl}
              sliderBoxHeight={150}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
            />
            <Text>{form.text}</Text>
          </View>
        )}
        {imageurl.length > 0 && type === "Document" && (
          <TouchableOpacity
            style={{
              width: "100%",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name={"filetext1"} size={100} color="#DBBE80" />
            <Text>{form.text}</Text>
          </TouchableOpacity>
        )}
        {imageurl.length > 0 && type === "Audio" && (
          <TouchableOpacity
            onPress={() => PlayTrack()}
            style={{
              width: "100%",
              paddingVertical: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name={"sound"} size={100} color="#DBBE80" />
            <Text style={{ marginTop: 10 }}>{form.text}</Text>
          </TouchableOpacity>
        )}
        {imageurl.length > 0 && type === "Video" && (
          <TouchableOpacity
            onPress={() => PlayTrack()}
            style={{
              width: "100%",
              paddingVertical: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WebView
              mediaPlaybackRequiresUserAction={true}
              allowsInlineMediaPlayback={true}
              allowsFullscreenVideo={false}
              shouldStartLoad={"No"}
              style={{
                width: windowWidth,
                height: DeviceInfo.hasNotch
                  ? windowHeight - 350
                  : windowHeight - 250,
              }}
              // source={{  uri: "http://apifeelmoti.ikaart.org//UploadDocuments/637934963226839019_0.MOV"}}
              source={{
                html: `
                          <video width="100%" height="50%" style="background-color:pink}" controls>
                              <source src="${imageurl[0]}" type="video/mp4">
                          </video>`,
              }}
            />
            <Text style={{ marginTop: 10 }}>{form.text}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <ActionSheet
        ref={(o) => setActionSheetRef(o)}
        title={
          <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
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
            ImageGallery();
          } else if (index === 2) {
            ImageCamera();
          }
        }}
      />
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{ backgroundColor: color }}
        action={{
          label: "OK",
          onPress: () => {
            onDismissSnackBar;
          },
        }}
      >
        {message}
      </Snackbar>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    marginTop: 30,

    display: "flex",
    flexDirection: "row",
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  textareatext: {
    marginTop: 30,
    backgroundColor: "#fff",
    textAlignVertical: "top",
    width: "99%",
    height: 100,
    marginVertical: 10,
    paddingTop: 10,
    paddingLeft: 20,
    marginBottom: 200,
  },
  media: {
    backgroundColor: "#FAFAFA",
    elevation: 10,
    borderWidth: 1,
    borderColor: "#F1E7E7",
    borderRadius: 10,
  },
  imagemedia: {
    display: "flex",
    flexDirection: "row",
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginTop: 15,
    marginLeft: 20,
    width: "90%",
  },
  imagemediatext: {
    padding: 17,
    // marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#36596A",
  },
  button: {
    marginTop: 30,
    marginLeft: 20,
    width: "90%",
    height: 60,
    backgroundColor: "#DBBE80",
    borderRadius: 5,
  },
  submit: {
    textAlign: "center",
    padding: 18,
    fontSize: 18,

    fontWeight: "700",
    color: "#FFFFFF",
  },
});
export default OnDemand;
