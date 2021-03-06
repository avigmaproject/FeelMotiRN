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
  ImageBackground,
StatusBar,
Animated
} from "react-native";
import moti from "../Assets/moti.png";
import bell from "../Assets/bell.png";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import DeviceInfo from "react-native-device-info";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { getuserpost, getusermasterdata ,createupdateuserfavorite,requestLocationPermission,uploadimage,getuserstory,createupdateuserlike,getuserhome} from "../Utils/apiconfig";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { useSelector, useDispatch } from "react-redux";
import { setProfile ,setMenu,setPagecount} from "../store/action/profile/profile";
import * as Progress from 'react-native-progress';
import Spinner from 'react-native-loading-spinner-overlay';
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet"
import ImagePicker from "react-native-image-crop-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TrackPlayer ,{State,Capability,useProgress}from 'react-native-track-player';
import Menu from "../CustomComponent/Menu"
import { useFocusEffect } from "@react-navigation/native";
import RNFetchBlob from 'rn-fetch-blob'
import { WebView } from 'react-native-webview';
import Share from 'react-native-share';
import { SliderBox } from "react-native-image-slider-box";
import VideoPlayer from 'react-native-video-player';
import HomeHeader from "../CustomComponent/HomeHeader"
const postheight = DeviceInfo.hasNotch ? windowHeight - 350 : windowHeight - 250
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

TrackPlayer.updateOptions({
   stopWithApp: true,
    // Media controls capabilities
    capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
});
     const progress = useProgress();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.profileReducer.profile);
  const showmenu = useSelector((state) => state.profileReducer.showmenu);
  const pagecount = useSelector((state) => state.profileReducer.pagecount);
  const countInterval = React.useRef(null);
  const [loading, setloading] = useState(false);
  const [userpost, setuserpost] = useState([]);
  const [like, setlike] = useState(false);
  const [save, setsave] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [count, setCount] = useState(0);
  const [statue, setstatue] = useState([]);
  const [userstatus, setuserstatus] = useState([])
  const [id, setid] = useState(0)
  const [showshare, setshowshare] = useState(false)
  const [song, setsong] = useState("")
  const [play, setplay] = useState(false)
  const [RefPlayer, setRefPlayer] = useState(null)
const [focusedIndex, setFocusedIndex] = React.useState(0);
const [ispaused, setispaused] = useState(false)
  const [form, setForm] = useState({
    text: "",
    document: "",
    imagepath:"",
    location:""
  });
  React.useEffect(() => {
      setid(0)
      requestLocationPermission()
      dispatch(setPagecount(10));
      GetLoaction()
      IntilaizeSetup()
      dispatch(setMenu(false));
      GetUserHome()
console.log("userpost",userpost)
    return () => {
      GetLoaction()
      IntilaizeSetup()
      dispatch(setMenu(false));
    };
  }, []);
 useFocusEffect(
    React.useCallback(() => {
     GetUserHome()
      // GetUserStory()
      return () => console.log("close");
    }, [])
  );
  const handleOnChangeText = (value, fieldName) =>  setForm({ ...form, [fieldName]: value });
  const GetLoaction = async() => {
  const value = await AsyncStorage.getItem('addressComponent')
    console.log(value)
    if(value !== null) {
      handleOnChangeText(value, "location")
    }
  } 
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
          source={{uri:statue.US_ImagePath
    // "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/places-to-visit-in-Bangalore-in-June1.jpg"
      }} style={{height:"100%",width:"100%"}}>
     <SafeAreaView>
      <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20,width:"100%",justifyContent:"space-between"}}>
      <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20,width:"70%",}}>
      <TouchableOpacity>
       <Image
        resizeMode="stretch"
        source={{ uri: statue.User_Image_Path ?statue.User_Image_Path  : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",}}
        style={{height:50,width:50,borderRadius:50}}
        />
      </TouchableOpacity>
      <Text style={{color:"black",textTransform:"capitalize",fontSize:30,marginLeft:20}}>{statue.User_Name}</Text>
      </View>
       <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20,width:"30%",backgroundColor:"pink"}}>
        <Entypo
          onPress={()=>setShowModal(false)}
          name={"cross"}
          size={35}
          color="#424242"
          style={{ position:"absolute",right:10,}}
        />
      </View>
      </View>
  <View style={{width:"100%" ,padding:10}}>
<Progress.Bar color={"#DBBE80"} progress={count} width={null} />
</View>
        {statue.US_Doc_Type === "Document" && <TouchableOpacity  onPress={()=>WebViewPage(statue.US_ImagePath)} style={{width:"100%",height:200,justifyContent:"center",alignItems:"center"}} ><AntDesign name={"filetext1"} size={100} color="#DBBE80" /><Text>{form.text}</Text></TouchableOpacity>}
        {statue.US_Doc_Type === "Audio" && <TouchableOpacity onPress={()=>PlayTrack()} style={{width:"100%",paddingVertical:40,justifyContent:"center",alignItems:"center"}} ><AntDesign name={"sound"} size={100} color="#DBBE80" /><Text style={{marginTop:10}}>{form.text}</Text></TouchableOpacity>}
        {statue.US_Doc_Type === "Video" && <TouchableOpacity onPress={()=>PlayTrack()} style={{width:"100%",paddingVertical:40,justifyContent:"center",alignItems:"center"}} >
         <AntDesign name={"sound"} size={100} color="#DBBE80" /><Text style={{marginTop:10}}>{form.text}</Text>
         {/* <VideoPlayer
    video={{ uri: `"${statue.US_ImagePath}"` }}
    videoWidth={windowHeight}
    videoHeight={900}
    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }} */}
{/* /> */}

          {/* <WebView 
                      mediaPlaybackRequiresUserAction={true}
                      allowsInlineMediaPlayback={true}
                      allowsFullscreenVideo={false}
                      shouldStartLoad={"No"}
                      style={{width:windowWidth,height: DeviceInfo.hasNotch ? windowHeight - 350 : windowHeight - 250}}
                        // source={{  uri: "http://apifeelmoti.ikaart.org//UploadDocuments/637934963226839019_0.MOV"}} 
                       source={{
                        html: `
                        <video width="100%" height="50%" style="background-color:pink}" controls>
                            <source src="${statue.US_ImagePath}" type="video/mp4">
                        </video>`,}}
                  /> */}
          <Text style={{marginTop:10}}>{form.text}</Text></TouchableOpacity>}

</SafeAreaView>
</ImageBackground>
</Modal>)
}
  const GetUserPost = async (count) => {
    setloading(true);
    let data = {
    PageNumber:1,
    NoofRows:count *10,    
    Type:1
    };
    console.log("GetUserPost data", data);
    await getuserpost(data, token)
      .then((res) => {
        console.log("res:GetUserPost ", res[0]);
        setloading(false);
        setuserpost(res[0]);
  
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
const GetUserStory = async () => {
    setloading(true);
    let data = {
    PageNumber:1,
    NoofRows:100,     
    Type:1
    };
    console.log("GetUserStory", data);
    await getuserstory(data, token)
      .then((res) => {
        console.log("res:GetUserStory ", res[0]);
        setloading(false);
          setuserstatus(res[0])
      })
      .catch((error) => {
        setloading(false);
        if (error.response) {
          console.log("error.response", error.response);
        } else if (error.request) {
          setloading(false);
          console.log("request error", error.request);
        } else if (error) {
          console.log("Server Error GetUserStory");
          setloading(false);
        }
      });
  };
 
  
const GetUserHome = async () => {
    setloading(true);
    let data = {
 PageNumber:1,
    NoofRows:100,     
    Type:1    };
    console.log("*****GetUserHome*****", data);
    await getuserhome(data, token)
      .then((res) => {
        console.log("res:GetUserHome ", res);
        console.log("res:GetPOST", res[0]);
        console.log("res:GetStory", res[1]);
        console.log("res:GetUSERData", res[2]);
        dispatch(setProfile(res[2][0]));
        setuserstatus(res[1])
        setuserpost(res[0]);
        setloading(false);
        // sethomedate(res[0])
      })
      .catch((error) => {
        setloading(false);
        if (error.response) {
          console.log("error.response", error.response);
        } else if (error.request) {
          setloading(false);
          console.log("request error", error.request);
        } else if (error) {
          console.log("Server Error GetUserHome");
          setloading(false);
        }
      });
  };
 const CreateUpdateUserFavorite = async (item) => {

  // return 0 
    setloading(true);
    let data = {
    UF_User_PkeyID:profile.User_PkeyID,
    UF_UP_PKeyID: item.UP_PKeyID,
    Type:1,
    UF_IsActive: !item.FavCount
    };
    console.log("CreateUpdateUserFavorite", data);
    await createupdateuserfavorite(data, token)
      .then((res) => {
        console.log("res:CreateUpdateUserFavoritedata ", res);
        setloading(false);
GetUserHome()
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


const CreateUpdateUserLike = async (id,like) => {
    setloading(true);
    let data = {
    UL_UP_PKeyID:id,
    Type:1,
    UL_IsActive:!like
    };
    console.log("CreateUpdateUserLike", data);
    await createupdateuserlike(data, token)
      .then((res) => {
        console.log("res:CreateUpdateUserLikedata ", res);
        setloading(false);
        GetUserHome()
      })
      .catch((error) => {
        setloading(false);
        if (error.response) {
          console.log("error.response", error.response);
        } else if (error.request) {
          setloading(false);
          console.log("request error", error.request);
        } else if (error) {
          console.log("Server Error CreateUpdateUserLike");
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
    

 
 const IntilaizeSetup = async() =>{ 
    await TrackPlayer.setupPlayer()
    useTrackPlayerEvents([Event.PlaybackQueueEnded], async event => {
      if (event.type === Event.PlaybackQueueEnded && event.nextTrack !== undefined) {
        TrackPlayer.stop();
      }
    });
  }
 const ResetSetup = async() =>await TrackPlayer.stop();
 React.useEffect(() => {
    IntilaizeSetup()
    return () => {
      ResetSetup()
    }
  }, [])
  
  const PlayTrack = async (url) => {
      const state = await TrackPlayer.getState();
        console.log("state",state)
      if (state === State.Playing) {
          ResetSetup()
      };
    console.log("url ==>" , url,TrackPlayer)
    const track = {
      url,// "http://apifeelmoti.ikaart.org//UploadDocuments/637932503293946244_0.mp3",
      //url: "http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3", // Load media from the file system
      // title: 'Ice Age',
      // artist: 'deadmau5',
      // Load artwork from the file system:
      artwork: 'file:///storage/sdcard0/Downloads/cover.png',
      // duration: 411
    };
    await TrackPlayer.add(track);
    await TrackPlayer.play();
  };
const WebViewPage1 = (url) =>{
navigation.navigate("WebViewPage",{url})
}
const WebViewPage = (url) => {
    console.log(url)
    setloading(true);
    let FilePath =url
    const { dirs } = RNFetchBlob.fs
    if (Platform.OS === 'android') {
      RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: `${dirs.DownloadDir}/test.pdf`,
          description: 'Downloading..'
        }
      })
        .fetch('GET', FilePath, {})
        .then((res) => {
          console.log('The file saved to ', res.data)
    setloading(false);
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      const configfb = {
        fileCache: true,
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        path: `${dirs.DocumentDir}/${FilePath}.pdf`
      }
      const configOptions = Platform.select({
        ios: {
          fileCache: configfb.fileCache,
          path: configfb.path
        }
      })
      RNFetchBlob.config(configOptions)
        .fetch('GET', FilePath, {})
        .then((res) => {
        setloading(true);
          RNFetchBlob.ios.openDocument(res.data)
        })
        .catch((e) => {
          console.log('The file saved to ERROR', e.message)
        })
    }
    setloading(false);
  }

const renderItem = (item) =>{

return(
<View style={{justifyContent:"center",alignItems:"center",marginLeft:10,height:80,width:60}}>
{item.US_Doc_Type === "Image" && ( 
  <TouchableOpacity onPress={()=>OpenStatus(item)} style={{height:55,width:55,borderRadius:50,borderWidth:2,borderColor:"#DBBE80",justifyContent:"center",alignItems:"center"}}>
    <Image 
     resizeMode="stretch"
     style={{height:50,width:50,borderRadius:50}}
     source={{ uri: item.US_ImagePath }}/>
  </TouchableOpacity>)}
  {item.US_Doc_Type === "Document" && (<TouchableOpacity onPress={()=>OpenStatus(item)} style={{height:55,width:55,borderRadius:50,borderWidth:2,borderColor:"#DBBE80",justifyContent:"center",alignItems:"center"}}><AntDesign name={"filetext1"} size={30} color="#DBBE80" /></TouchableOpacity>)}
  {item.US_Doc_Type === "Audio" && (<TouchableOpacity onPress={()=>OpenStatus(item)} style={{height:55,width:55,borderRadius:50,borderWidth:2,borderColor:"#DBBE80",justifyContent:"center",alignItems:"center"}} ><AntDesign name={"sound"} size={30} color="#DBBE80" /></TouchableOpacity>)}
  {item.US_Doc_Type === "Video" && (
    <TouchableOpacity style={{height:55,width:55,borderRadius:50,borderWidth:2,borderColor:"#DBBE80",justifyContent:"center",alignItems:"center"}} >
      <FontAwesome5 name={"file-video"} size={30} color="#DBBE80" />
    </TouchableOpacity>)}
    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.User_Name}</Text>
  </View>
)
}
const ShowShareButton = (item) => {
console.log(item)
setid(item.UP_PKeyID)
setshowshare(!showshare)
}
const ShareOpen = async (item) => {
    try {
      await Share.open({ 
         url: `Post Image : - ${item.UP_ImagePath}`,
        message: `User name : - ${item.User_Name}`
      })
    } catch (err) {
      console.log(err)
    }
  }
    const onVideoLayout = (event) =>{
    console.log("onVideoLayout",event)
    }
    const onViewRef = React.useRef(async (viewableItems)=> {
  
    if(viewableItems.viewableItems[0].item.UP_Doc_Type === "Audio")
        { 
    const url = viewableItems.viewableItems[0].item.UP_ImagePath

        console.log("im inside audioooooo",viewableItems.viewableItems[0].item.UP_ImagePath )
      const track = {
      url,// "http://apifeelmoti.ikaart.org//UploadDocuments/637932503293946244_0.mp3",
      //url: "http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3", // Load media from the file system
      // title: 'Ice Age',
      // artist: 'deadmau5',
      // Load artwork from the file system:
      artwork: 'file:///storage/sdcard0/Downloads/cover.png',
      // duration: 411
    };
    await TrackPlayer.add(track);
    await TrackPlayer.play();

          }else{
             ResetSetup()
          }
        if(viewableItems.viewableItems[0].item.UP_Doc_Type === "Video")
        { console.log(viewableItems.viewableItems[0].item.UP_ImagePath)
           setispaused(false)
          }else{
            console.log("else",ispaused)
            setispaused(true)
          }
      // Use viewable items in state or as intended
    })
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}
const renderUserPost = (item,index) =>{
return( <View style={{ marginTop: 10 }}>
          <View style={styles.bar}>
            <View style={styles.bar1}>
              <TouchableOpacity><Image source={{ uri: item.User_Image_Path ? item.User_Image_Path  : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"}} style={styles.user}/></TouchableOpacity>
                    <View style={styles.text}>
                      <TouchableOpacity>
                        <Text style={styles.text1}>{item.User_Name}</Text>
                        <Text style={styles.text2}>{item.UP_Location}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {item.UP_PKeyID === id &&(
                    <TouchableOpacity onPress={()=> ShareOpen(item)} 
                    style={{padding:5,position:"absolute",backgroundColor:"#fff",
                    right:32,top:20, borderWidth:1,borderColor:"#DBBE80"}}>
                <Text style={{color:"#DBBE80"}}>Share</Text></TouchableOpacity>)}
                  <View style={styles.dot}>
                    <TouchableOpacity onPress={()=>ShowShareButton(item)}>
                      <Entypo
                        name={"dots-three-vertical"}
                        size={24}
                        color="#BDBEC1"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.image}>
                  {item.UP_Doc_Type === "Image" && ( 
                  <TouchableOpacity>
                    <Image
                      resizeMode="stretch"
                      source={{ uri: item.UP_ImagePath }}
                      style={styles.image1}
                    />
                   <Text style={{alignSelf:"center",marginVertical:10,color:"#DBBE80"}}>{item.UP_ImageName}</Text>
                  </TouchableOpacity>)}
                  {item.UP_Doc_Type === "Document" && (<TouchableOpacity onPress={()=>WebViewPage(item.UP_ImagePath)}  style={{...styles.image1,justifyContent:"center",alignItems:"center"}} ><AntDesign name={"filetext1"} size={100} color="#DBBE80" /><Text style={{alignSelf:"center",marginVertical:10,color:"#DBBE80"}}>{item.UP_ImageName}</Text></TouchableOpacity>)}
                  {item.UP_Doc_Type === "Audio" && (<TouchableOpacity onPress={()=>PlayTrack(item.UP_ImagePath)} style={{...styles.image1,justifyContent:"center",alignItems:"center"}} ><AntDesign name={"sound"} size={100} color="#DBBE80" />
                  {/* <Progress.Bar color={"#DBBE80"}  width={100}
                    progress={progress.position}
                    buffered={progress.buffered}/> */}
                  <Text style={{alignSelf:"center",marginVertical:10,color:"#DBBE80"}}>{item.UP_ImageName}</Text></TouchableOpacity>)}
                    {item.UP_Doc_Type === "Video" && (
              <TouchableOpacity style={{width:"100%",height:postheight,}} >
                  <Text>{item.UP_ImagePath}</Text>
                <Text>{ispaused}</Text>

                  <VideoPlayer
                    paused={ispaused}
                     shouldPlay={focusedIndex === index ? true : false}
                    video={{uri: item.UP_ImagePath,}}
                    resizeMode={"cover"}  
                    style={{height:postheight}}
                    playInBackground={false}
                    autoplay={true}
                    ref={(player) => setRefPlayer(player)}
                    />
                <Text style={{alignSelf:"center",color:"#DBBE80"}}>{item.UP_ImageName}</Text>
                </TouchableOpacity>)}
                </View>
                <View style={styles.content}>
                  <Text style={styles.content1}>
                    {item.UP_Coll_Desc ? item.UP_Coll_Desc.trimStart():""}
                  </Text>
                  <View style={styles.icon10}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent:"space-between",
                        width: "35%",
                        paddingtop: 10,
                        paddingHorizontal: 10,
                      }}>
                      <View style={styles.icontext}>
                        <TouchableOpacity onPress={()=>CreateUpdateUserLike(item.UP_PKeyID,item.MyLike)}>
                          <AntDesign
                            name={item.MyLike ? "heart" : "hearto"}
                            size={20}
                            color={item.MyLike ? "red" : "#807C7D"}
                          />
                        </TouchableOpacity>
                        <View>
                          <Text style={styles.liketext}>{kFormatter(item.LikeCount)}</Text>
                        </View>
                      </View>
                      <View style={styles.icontext}>
                        <TouchableOpacity>
                          <Feather
                            name={"message-circle"}
                            size={20}
                            color="#807C7D"
                          />
                        </TouchableOpacity>
                        <View>
                          <Text style={styles.liketext}>
                            {item.commentCount}{22}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.icontext}>
                        <TouchableOpacity onPress={()=>CreateUpdateUserFavorite(item)}>
                        <FontAwesome
                          name={item.FavCount  ? "bookmark" : "bookmark-o"}
                          size={24}
                          color={"#898788"}
                          style={{marginRight:10}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>)
}
  const LoadMoreRandomData =() =>{
    if(userpost.length === 0 ){
    dispatch(setPagecount(10));
      GetUserPost(10)
    }else{
    dispatch(setPagecount(pagecount+10));
      GetUserPost(pagecount)
    }
// alert("load more data")
}
//  const handleScroll = (event) => {
//     const positionX = event.nativeEvent.contentOffset.x;
//     const positionY = event.nativeEvent.contentOffset.y;
//     // console.log(`positionX ${positionX},positionY ${positionY}`)
//     // console.log(`post size =  ${positionY - windowHeight}`)

//   };
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
  }
const handleScroll = React.useCallback(({ nativeEvent: { contentOffset: { y } } }: NativeSyntheticEvent<NativeScrollEvent>) => {
  const offset = Math.round(y / postheight);
  setFocusedIndex(offset)
}, [setFocusedIndex]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar  backgroundColor={"#FFFFFF"} barStyle="dark-content" />
      <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <HomeHeader navigation={navigation}/>
      {showmenu && (<Menu navigation={navigation}/>)}
      
        <View style={{ backgroundColor: "#fff" ,flex: 1,}}>
        
            {/* <ScrollView
              onMomentumScrollEnd={(event) => { 
                if (isCloseToBottom(event.nativeEvent)) {
                  LoadMoreRandomData()}}}
              keyboardShouldPersistTaps={"always"}
              contentContainerStyle={{ flexGrow: 1,paddingBottom:100 }}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            > */}
            
           <View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:10,}}>
            <TouchableOpacity onPress={()=>  navigation.navigate("AddTab",{screen:"AddStory"})} style={{justifyContent:"center",alignItems:"center"}}><View style={{height:50,width:50,borderColor:"gray",borderWidth:1,borderStyle:"dashed",borderRadius:50,justifyContent:"center",alignItems:"center"}}><Feather name={"plus"} size={24} color="#DBBE80" /></View>
          <Text style={{marginTop:10}}>Add story</Text></TouchableOpacity>
          <View><FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={userstatus}
            renderItem={({ item }) => renderItem(item)}
            ListFooterComponent={()=> <View style={{width:50}}/>}
          /></View>
          </View>
          <View style={{flex:1}}>
            <FlatList
            data={userpost}
            renderItem={({ item ,index}) => renderUserPost(item,index)}
            ListFooterComponent={()=> <View style={{width:150}}/>}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
            onScroll={handleScroll}
            ListEmptyComponent={()=> {
            return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text>No Post Fond</Text></View>
             )
            }}
          />
          </View>
          {/* </ScrollView> */}
        </View>
      {renderModal()}
    </SafeAreaView>
  );
};
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
    paddingLeft: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    
  },
  bar1: {
    flexDirection: "row",
    width:"90%",
    alignItems:"center",
    marginVertical:5
  },
  user: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  text: {
    paddingLeft: 20,
    fontSize: 12,
    fontWeight: "300",
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
  },
  image1: {
    height: postheight,
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
    fontWeight: "500",
    fontSize: 15,
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
