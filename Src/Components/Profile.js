import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
StatusBar,
Platform
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import { getuserpost, getuserstory} from "../Utils/apiconfig";
import { useSelector, useDispatch } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DATA = [
  {
    button: "Subscribe",
  },
  {
    button: "Message",
  },
  {
    button: "Sponsor",
  },
  {
    button: "Tip",
  },
];
// const DATA1 = [
//   {
//     image: require("../Assets/story1.png"),
//     title: "Title here",
//   },
//   {
//     image: require("../Assets/story2.png"),
//     title: "Title here",
//   },
//   {
//     image: require("../Assets/story3.png"),
//     title: "Title here",
//   },
//   {
//     image: require("../Assets/story4.png"),
//     title: "Title here",
//   },
//   {
//     image: require("../Assets/story4.png"),
//     title: "Title here",
//   },
//   {
//     image: require("../Assets/story4.png"),
//     title: "Title here",
//   },
// ];

export default function Profile({ navigation }) {
  const insets = useSafeAreaInsets();

  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.profileReducer.profile);
  const [loading, setloading] = useState(false);
  const [userpost, setuserpost] = useState([]);
  const [userstatus, setuserstatus] = useState([])
  const [isdoc, setisdoc] = useState(true)
  const [isimg, setisimg] = useState(false)
  const [isvdo, setisvdo] = useState(false)
  const [ismic, setismic] = useState(false)
  const [issubscriber, setissubscriber] = useState(true)
  const [ismsg, setismsg] = useState(false)
  const [issponsor, setissponsor] = useState(false)
  const [istip, setistip] = useState(false)
  const [doucmentdata, setdoucmentdata] = useState([])
  const [audiodata, setaudiodata] = useState([])
  const [vediodata, setvediodata] = useState([])
  const [imagedata, setimagedata] = useState([])
 React.useEffect(() => {
setdoucmentdata([])
setaudiodata([])
setvediodata([])
setimagedata([])
GetUserPost();
    console.log("useEffect",insets)

      GetUserStory()
    return () => {
      GetUserPost();
      GetUserStory()
    };
  }, []);
const GetUserPost = async () => {
    setloading(true);
    let data = {
      Type: 2,
    };
    console.log("GetUserPostminal", data);
    await getuserpost(data, token)
      .then((res) => {
        console.log("res:GetUserPost minal", res[0]);
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
          console.log("Server ErrorGetUserPost");
          setloading(false);
        }
      });
  };
 
const GetUserStory = async () => {
setdoucmentdata([])
setaudiodata([])
setvediodata([])
setimagedata([])
    setloading(true);
    let data = {
      Type: 3,
    };
    console.log("GetUserStory data", data);
    await getuserstory(data, token)
      .then((res) => {
        // console.log("res:GetUserStory ", res[0]);
        setuserstatus(res[0])
        setloading(false);
        for(let i = 0;i< res[0].length ; i++){
                if(res[0][i].US_Doc_Type ==="Image"){
                    imagedata.push(res[0][i])
                    setimagedata(imagedata);
                }else  if(res[0][i].US_Doc_Type === "Audio"){
                    audiodata.push(res[0][i])
                    setaudiodata(audiodata);
                }else  if(res[0][i].US_Doc_Type === "Document"){
                     doucmentdata.push(res[0][i])
                    setdoucmentdata(doucmentdata);
                }else if(res[0][i].US_Doc_Type === "Video"){
                     setvediodata([...vediodata, ]);
                  vediodata.push(res[0][i])
                  setvediodata(vediodata)

                }
            }
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

const OpenMsg = () => {
   setissubscriber(false)
  setismsg(true)
setissponsor(false)
setistip(false) 
}
const onOpenSponsor = () => {
 setissubscriber(false)
  setismsg(false)
setissponsor(true)
setistip(false)
}
const openTip = () => {
setissubscriber(false)
  setismsg(false)
setissponsor(false)
setistip(true)
 
}
const openSubscribe = () => {
setissubscriber(true)
  setismsg(false)
setissponsor(false)
setistip(false)
 
}
const renderItem = (item) =>{
return(
<View style={{justifyContent:"center",alignItems:"center",marginLeft:10,height:120,width:70,marginVertical:10}}>
  {item.US_Doc_Type === "Image" && (<TouchableOpacity  style={styles.storyContainer}><Image resizeMode="stretch" style={{ height:60,width:70,borderRadius:500}} source={{ uri: item.US_ImagePath ?item.US_ImagePath  : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",}}  /></TouchableOpacity>)}   
  {item.US_Doc_Type === "Document" && (<TouchableOpacity  style={styles.storyContainer}><AntDesign name={"filetext1"} size={40} color="#DBBE80" /></TouchableOpacity>)}
  {item.US_Doc_Type === "Audio" && (<TouchableOpacity  style={styles.storyContainer} ><AntDesign name={"sound"} size={40} color="#DBBE80" /></TouchableOpacity>)}
  {item.US_Doc_Type === "Video" && (<TouchableOpacity style={styles.storyContainer} ><FontAwesome5 name={"file-video"} size={30} color="#DBBE80" /></TouchableOpacity>)}
  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.US_ImageName}</Text>
</View>
)
}
const OpenDocument = () => {
 setismic(false)
  setisvdo(false)
setisimg(false)
setisdoc(true)
 
}
const onOpenImage = () => {
 setismic(false)
  setisvdo(false)
setisimg(true)
setisdoc(false)
}
const openVideo = () => {
setismic(false)
  setisvdo(true)
setisimg(false)
setisdoc(false)
 
}
const OpenMusic = () => {
  setismic(true)
  setisvdo(false)
setisimg(false)
setisdoc(false)
}
  return (
<View style={{ flex: 1, backgroundColor: "#F5F5F5" ,paddingTop:Platform.OS === "ios" ?  insets.top :0}}>
   <StatusBar barStyle="dark-content" backgroundColor={"#F5F5F5" } />
      <Header
        settings={true}
        onPress={() => navigation.navigate("Home")}
        onPress2={() => navigation.navigate("Setting")}
        title={profile.User_Name}
      />
        <View style={{marginHorizontal: 10,flex:1,marginTop:5}}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ width: "20%" }}>
                <TouchableOpacity>
                  <Image
                    resizeMode="stretch"
                    source={{
                      uri: profile.User_Image_Path
                        ? profile.User_Image_Path
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
                    }}
                    style={{ height: 75, width: 75, borderRadius: 50 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: "75%" }}>
                <Text
                  style={{ fontSize: 15, color: "#9B9C9F", lineHeight: 22 }}
                >
                  Lorem Ipsum has been the to going industry's standard dummy
                  text ever since the 1500s.
                </Text>
              </View>
            </View>
          </View>
           <View style={styles.buttonConatainer}>
          <TouchableOpacity  onPress={()=>openSubscribe()} style={{...styles.box, backgroundColor:issubscriber ?  "#DBBE80" : "#EAE2D1",borderWidth: 1, borderColor: "#EAE2D1",}}>
              <Text style={{...styles.subscribe, color:issubscriber ?  "#ffffff":"#DBBE80",}}>{"Subscribe"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>OpenMsg()} style={{...styles.box, backgroundColor:ismsg ?  "#DBBE80" : "#EAE2D1",borderWidth: 1, borderColor: "#EAE2D1",}}>
                      <Text style={{...styles.subscribe, color:ismsg ?  "#ffffff":"#DBBE80",}}>{"Message"}</Text>
                  </TouchableOpacity>
          <TouchableOpacity  onPress={()=>onOpenSponsor()}  style={{...styles.box, backgroundColor: issponsor ?  "#DBBE80" : "#EAE2D1",borderWidth: 1, borderColor: "#EAE2D1",}}>
                      <Text style={{...styles.subscribe, color:issponsor ?  "#ffffff":"#DBBE80",}}>{"Sponsor"}</Text>
                  </TouchableOpacity>
          <TouchableOpacity  onPress={()=>openTip()}  style={{...styles.box, backgroundColor: istip ?  "#DBBE80" : "#EAE2D1",borderWidth: 1, borderColor: "#EAE2D1",}}>
                      <Text style={{...styles.subscribe, color:istip ?  "#ffffff":"#DBBE80",}}>{"Tip"}</Text>
                  </TouchableOpacity>
        </View>
          <View><FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={userstatus}
            renderItem={({ item }) => renderItem(item)}
            ListFooterComponent={()=> <View style={{width:50}}/>}
          /></View>
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{...styles.button,borderBottomWidth:isdoc ? 2 :1,borderBottomColor : isdoc ? "#DBBE80":"lightgray" }} onPress={()=>OpenDocument()}>
              <View style={styles.view}>
                <AntDesign size={25} name={"filetext1"} color= {isdoc ? "#DBBE80" :"#424242" } />
                <Text style={{color: isdoc ? "#DBBE80" :"#424242" }}>28</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.button,borderBottomWidth:isimg ? 2 :1,borderBottomColor : isimg ? "#DBBE80":"lightgray"}} onPress={() =>onOpenImage()}>
              <View style={styles.view}>
                <Feather name={"image"} size={25} color= {isimg ? "#DBBE80" :"#424242" } />
                <Text style={{color: isimg ? "#DBBE80" :"#424242" }}>28</Text>
              </View>
            </TouchableOpacity > 
            <TouchableOpacity style={{...styles.button,borderBottomWidth:isvdo ? 2 :1,borderBottomColor : isvdo ? "#DBBE80":"lightgray"}} onPress={()=>openVideo()}>
              <View style={styles.view}>
                <Feather name={"video"} size={25} color= {isvdo ? "#DBBE80" :"#424242" } />
                <Text style={{color: isvdo ? "#DBBE80" :"#424242" }}>28</Text>
              </View>
            </TouchableOpacity>
          <TouchableOpacity style={{...styles.button,borderBottomWidth:ismic ? 2 : 1,borderBottomColor : ismic ? "#DBBE80":"lightgray"}} onPress={()=>OpenMusic()}>
              <View style={styles.view}>
                <Feather name={"mic"} size={25} color= {ismic ? "#DBBE80" :"#424242" }/>
                <Text style={{color: ismic ? "#DBBE80" :"#424242" }}>28</Text>
              </View>
            </TouchableOpacity>
        
        </View>
           <ScrollView>
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',marginTop:10  }}>
         {isimg && (
          imagedata.map((item) =>{
                return(<View style={{width:"33%",height:120,padding:5}}>
                <FastImage
                style={{ height:"100%",width:"100%",borderRadius:10}} 
                source={{ uri: item.US_ImagePath,
                headers: {Authorization: token},
                priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.stretch}          
                />
            </View>)
              })
            )}
           {isvdo && (
          vediodata.map((item) =>{
                return(<View style={styles.post}>
                  <Feather name={"video"} size={40} color="#DBBE80" />
            </View>)
              })
            )}
        {ismic && (
          audiodata.map((item) =>{
                return(<View style={styles.post}>
                  <Feather name={"mic"} size={40} color="#DBBE80" />
            </View>)
              })
            )}
        {isdoc && (
          doucmentdata.map((item) =>{
                return(<View style={styles.post}>
                   <AntDesign name={"filetext1"} size={40} color="#DBBE80" />
            </View>)
              })
            )}
        </View>
      </ScrollView>
        </View> 
    </View>
  );
}
const styles = StyleSheet.create({
  buttonConatainer: {
    flexDirection: "row",
  },
  box: {
    marginTop: 20,
    borderRadius: 4 ,
    height:40,
    width:"22%",
    marginHorizontal:5,
    justifyContent:"center",
    alignItems:"center"
  },
  subscribe: {
    fontSize: 14,
    fontWeight: "600",
  },
  box2: {
    marginTop: 20,
    height: 42,
    width: "100%",
    backgroundColor: "rgba(219, 190, 128, 0.1)",
    borderColor: "#EAE2D1",
    borderRadius: 4,
    borderWidth: 1,
  },
  storyContainer: {
   height:70,width:70,borderRadius:50,borderWidth:2,borderColor:"#DBBE80",justifyContent:"center",alignItems:"center"},
  title: {
    marginLeft: 10,
    marginTop: 2,
    color: "#424242",
    fontSize: 14,
    fontWeight: "400",
    // backgroundColor: "red",
  },
  button:{width:"25%",justifyContent:"center",alignItems:"center",padding:10},
  view:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"70%"},
  post:{width:"30%",height:100,margin:5,justifyContent:"center",alignItems:"center",borderColor:"#DBBE80",borderWidth:2,borderRadius:10}

});
