import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import { getuserpost, getuserstory} from "../Utils/apiconfig";
import { useSelector, useDispatch } from "react-redux";

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
const DATA1 = [
  {
    image: require("../Assets/story1.png"),
    title: "Title here",
  },
  {
    image: require("../Assets/story2.png"),
    title: "Title here",
  },
  {
    image: require("../Assets/story3.png"),
    title: "Title here",
  },
  {
    image: require("../Assets/story4.png"),
    title: "Title here",
  },
  {
    image: require("../Assets/story4.png"),
    title: "Title here",
  },
  {
    image: require("../Assets/story4.png"),
    title: "Title here",
  },
];
export default function Profile({ navigation }) {
  const token = useSelector((state) => state.authReducer.token);
  const profile = useSelector((state) => state.profileReducer.profile);
  const [loading, setloading] = useState(false);
  const [userpost, setuserpost] = useState([]);

 React.useEffect(() => {
     GetUserPost();
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
    console.log("loginnnnnn", data);
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
          console.log("Server ErrorGetUserPost");
          setloading(false);
        }
      });
  };
 
const GetUserStory = async () => {
    setloading(true);
    let data = {
      Type: 2,
    };
    console.log("GetUserStory data", data);
    await getuserstory(data, token)
      .then((res) => {
        console.log("res:GetUserStory ", res[0]);
        setloading(false);
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <Header
        settings={true}
        onPress={() => navigation.navigate("Home")}
        onPress2={() => navigation.navigate("Setting")}
        title={profile.User_Name}
      />
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ marginHorizontal: 10 }}
      >
        <View>
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
                    style={{ height: 50, width: 50, borderRadius: 50 }}
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
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <View>
                <View style={styles.buttonConatainer}>
                  <TouchableOpacity>
                    <View style={{}}>
                      <View style={styles.box}>
                        <Text style={styles.subscribe}>{item.button}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA1}
            renderItem={({ item }) => (
              <View>
                <View style={styles.storyContainer}>
                  <View>
                    <TouchableOpacity>
                      <Image source={item.image} style={styles.story} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  buttonConatainer: {
    marginLeft: 10,
    flexDirection: "row",
  },
  box: {
    marginTop: 20,
    backgroundColor: "#DBBE80",
    borderWidth: 1,
    borderColor: "#EAE2D1",
    borderRadius: 4 ,
    height:40,
    width:90,
justifyContent:"center",alignItems:"center"
  },
  subscribe: {
    color: "#ffffff",
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
  message: {
    width: "100%",
    padding: 10,
    color: "#DBBE80",
    fontSize: 14,
    fontWeight: "600",
  },
  storyContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  story: {
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 15,
    // backgroundColor: "red",
  },
  title: {
    marginLeft: 10,
    marginTop: 2,
    color: "#424242",
    fontSize: 14,
    fontWeight: "400",
    // backgroundColor: "red",
  },
});
