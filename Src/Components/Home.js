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
} from "react-native";
import moti from "../Assets/moti.png";
import bell from "../Assets/bell.png";
import profile from "../Assets/profile.png";
import user from "../Assets/user.png";
import body from "../Assets/body.jpeg";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import DeviceInfo from 'react-native-device-info';
import {getuserpost} from "../Utils/apiconfig"
const windowHeight = Dimensions.get('window').height;


const DATA = [
  {
    image: require("../Assets/body.jpeg"),
    name: "Jhnoe",
    state: "United States",
    likeCount: "22k",
    commentCount: "543",
  },
  {
    image: require("../Assets/body.jpeg"),
    name: "Ronald Richards",
    state: "United kingdom",
    likeCount: "29k",
    commentCount: "599",
  },
];

const Home = ({ navigation }) => {
const [loading, setloading] = React.useState(false)
const [userpost, setuserpost] = React.useState([])
React.useEffect(() => {
  GetUserPost()

  return () => {
    GetUserPost()
  }
}, [])

 const GetUserPost = async () => {
      setloading(true);
      let data ={
       Type:1
      };
      console.log("loginnnnnn", data);
      await getuserpost(data)
        .then((res) => {
          console.log("res: ", res);
          setloading(false);
          setuserpost(res[0])
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView keyboardShouldPersistTaps={"always"} contentContainerStyle={{ flexGrow: 1 }}>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Image source={profile} style={styles.profile} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <FlatList
            data={userpost}
            renderItem={({ item }) => (
              <View style={{marginTop:10}}>
                <View style={styles.bar}>
                  <View style={styles.bar1}>
                    <TouchableOpacity>
                      <Image source={{uri:item.User_Image_Path}}style={styles.user} />
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
                      <Icon
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
                      source={{uri:item.UP_ImagePath}}
                      style={styles.image1}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  <Text style={styles.content1}>{item.UP_Coll_Desc.trimStart()}
                  </Text>
                  <View style={styles.icon}>
                   <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"70%"}}>
                     <View style={styles.icontext}>
                      <TouchableOpacity>
                        <Entypo
                          name={"heart"}
                          size={24}
                          color="red"
                          style={styles.like}
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
                          style={styles.comment}
                        />
                      </TouchableOpacity>
                      <View>
                        <Text style={styles.commenttext}>{item.commentCount}</Text>
                      </View>
                    </View>
                    <View style={styles.icontext}>
                      <TouchableOpacity>
                        <AntDesign
                          name={"sharealt"}
                          size={24}
                          color="#898788"
                          style={styles.share}
                        />
                      </TouchableOpacity>
                    </View>
                    </View>
                    <View style={styles.icontext}>
                      <TouchableOpacity>
                        <FontAwesome
                          name={"bookmark"}
                          size={24}
                          color="#898788"
                          style={styles.save}
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    marginLeft: 20,
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
    margin: 10,
    width: 20,
    height: 20,
  },
  profile: {
    marginHorizontal: 10,

    width: 40,
    height: 40,
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
    width:50,
    borderRadius:50
  },
  text: {
    marginLeft: 10,
  },
  text1: {
    fontSize: 20,
    color: "#36596A",
    fontWeight: "400",
    textTransform:"capitalize"
  },
  text2: {
    fontSize: 15,
    height: 16,
    color: "#A6A6A6",
    fontWeight: "400",
    textTransform:"capitalize"

  },
  image: {
    width: "100%",
    // backgroundColor: "green",
  },
  image1: { height:DeviceInfo.hasNotch?windowHeight-350: windowHeight-250, width: "100%" },
  dot: {
    marginRight: 20,
    justifyContent: "flex-end",
    width: 15,
    height: 30,
  },
  content: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingtop:10,
    paddingHorizontal:10,
    paddingBottom:20,
    shadowColor: '#DBBE80',
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation:10
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
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comment: {
    // backgroundColor: 'purple',
    height: 22,
    width: 25,
    // width: '150%',
  },
  icontext: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  save: {
    // backgroundColor: 'purple',
    marginRight: 20,
    height: 22,
    width: 20,
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
});

export default Home;
