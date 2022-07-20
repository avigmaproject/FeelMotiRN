
import {
  View,
  StatusBar,
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
} from "react-native";
import bell from "../Assets/bell.png";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import DeviceInfo from "react-native-device-info";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getuserfavorite ,createupdateuserfavorite} from "../Utils/apiconfig";
const windowHeight = Dimensions.get("window").height;
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

const SavePost = ({ navigation }) => {
  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.profileReducer.profile);
  const [loading, setloading] = React.useState(false);
  const [userpost, setuserpost] = React.useState([]);
  const [like, setlike] = React.useState(false);
  const [save, setsave] = React.useState(false);
  const [showshare, setshowshare] =  React.useState(false)

 React.useEffect(() => {
    GetUserFavorite();
    return () => {
      GetUserFavorite();
    };
  }, []);
 useFocusEffect(
    React.useCallback(() => {
      GetUserFavorite();
      return () => console.log("close");
    }, [])
  );
  const GetUserFavorite = async () => {
    setloading(true);
    let data = {
      Type: 3,
    };
    console.log("GetUserFavorite", data);
    await getuserfavorite(data, token)
      .then((res) => {
        console.log("res:GetUserFavorite ", res[0]);
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
          console.log("Server Error getuserpost");
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
const LoadMoreRandomData =() =>{
alert("load more data")
}
const renderUserPost = (item) =>{
return( <View style={{ marginTop: 10 }}>
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
                  {showshare && (
                <View 
                  style={{padding:10,position:"absolute",
                    right:32,top:20, borderWidth:1,borderColor:"#DBBE80"}}>
                <Text style={{color:"#DBBE80"}}>Share</Text></View>)}
                  <View style={styles.dot}>
                    <TouchableOpacity onPress={()=>setshowshare(!showshare)}>
                      <Entypo
                        name={"dots-three-vertical"}
                        size={24}
                        color="#BDBEC1"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.image}>
                  <TouchableOpacity><Image
                      resizeMode="stretch"
                      source={{ uri: item.UP_ImagePath }}
                      style={styles.image1}
                    /></TouchableOpacity>
                  {item.UP_Doc_Type === "Image" && ( <TouchableOpacity><Image
                      resizeMode="stretch"
                      source={{ uri: item.UP_ImagePath }}
                      style={styles.image1}
                    /></TouchableOpacity>)}
                  {item.UP_Doc_Type === "Document" && (<TouchableOpacity style={{...styles.image1,justifyContent:"center",alignItems:"center"}} ><AntDesign name={"filetext1"} size={200} color="#DBBE80" /><Text>{form.text}</Text></TouchableOpacity>)}
                  {item.UP_Doc_Type === "Audio" && (<TouchableOpacity onPress={()=>PlayTrack(item.UP_ImagePath)} style={{...styles.image1,justifyContent:"center",alignItems:"center"}} ><AntDesign name={"sound"} size={100} color="#DBBE80" /><Text style={{marginTop:10}}>{form.text}</Text></TouchableOpacity>)}
                  {item.UP_Doc_Type === "Video" && (<TouchableOpacity style={{width:"100%",height:DeviceInfo.hasNotch ? windowHeight - 350 : windowHeight - 250,justifyContent:"center",alignItems:"center",justifyContent:"center",alignItems:"center"}} >
                {/* <FontAwesome5 name={"file-video"} size={100} color="#DBBE80" /> */}
                  {/* <VideoPlayer
                    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    videoWidth={1600}
                    videoHeight={900}
                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                    /> */}
                <WebView 
                      mediaPlaybackRequiresUserAction={true}
                      allowsInlineMediaPlayback={true}
                      allowsFullscreenVideo={false}
                      shouldStartLoad={"No"}
                      style={{width:windowWidth,height: DeviceInfo.hasNotch ? windowHeight - 350 : windowHeight - 250}}
                        // source={{  uri: "http://apifeelmoti.ikaart.org//UploadDocuments/637934963226839019_0.MOV"}} 
                       source={{
                        html: `
                        <video width="100%" height="100%" style="background-color:pink}" controls>
                            <source src="${"http://apifeelmoti.ikaart.org//UploadDocuments/637934963226839019_0.MOV"}" type="video/mp4">
                        </video>`,}}
                  />

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
                        width: "40%",
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
                      {/* <View style={styles.icontext}>
                        <TouchableOpacity>
                          <AntDesign
                            name={"sharealt"}
                            size={24}
                            color="#898788"
                          />
                        </TouchableOpacity>
                      </View> */}
                    </View>
                    <View style={styles.icontext}>
                        <TouchableOpacity onPress={()=>CreateUpdateUserFavorite(item.UP_PKeyID)}>
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
              </View>)
}
 const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
const paddingToBottom = 20;
return layoutMeasurement.height + contentOffset.y >=
  contentSize.height - paddingToBottom;
 }
  return (
  <SafeAreaView  style={{flex:1,backgroundColor:"#fff"}}>
   <StatusBar barStyle="dark-content" backgroundColor={"#FFFFFF" } />
        <View style={{ backgroundColor: "#fff" }}>
          <View style={styles.header}>
            <View style={{justifyContent:"center",alignItems:"center"}}>
        <MaterialCommunityIcons
          onPress={()=>navigation.goBack()}
          name={"keyboard-backspace"}
          size={40}
          color="#424242"
        />
      </View>
            <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
             <Text style={{ fontSize: 24, color: "#424242", fontWeight: "700" }}>Saved</Text>
            </TouchableOpacity>
            <View style={styles.header1}>
              <TouchableOpacity>
                <Image source={bell} style={styles.bell} />
              </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate("HomeTab",{screen:"Profile"})}>
                  <Image
                    resizeMode="stretch"
                    source={{ uri: profile.User_Image_Path ? profile.User_Image_Path  : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"}}
                    style={styles.profile}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        <ScrollView  onMomentumScrollEnd={(event) => { 
          if (isCloseToBottom(event.nativeEvent)) {
            LoadMoreRandomData()
          }
         }
       } 
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ flexGrow: 1 }}>
          <FlatList
            data={userpost}
             renderItem={({ item }) => renderUserPost(item)}
          />
      </ScrollView>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
    // shadowOffset: { width: 5, height: 6 },
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding:10
  },
  header1: {
    flexDirection: "row",
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
});

export default SavePost;
