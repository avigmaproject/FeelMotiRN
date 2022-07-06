import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import profile from "../Assets/profile.png";
import story1 from "../Assets/story1.png";
import story2 from "../Assets/story2.png";
import story3 from "../Assets/story3.png";
import story4 from "../Assets/story4.png";
import story5 from "../Assets/story5.png";
// import ProfileTabView from "../Navigation/ProfileTabView";
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
  {
    button: "Sponsor",
  },
  {
    button: "Sponsor",
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
  const profile = useSelector((state) => state.profileReducer.profile);
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
                    resizeMode="contain"
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
            data={DATA}
            renderItem={({ item }) => (
              <View>
                <View style={styles.buttonConatainer}>
                  <TouchableOpacity>
                    <View style={{ marginRight: 10 }}>
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
    display: "flex",
    flexDirection: "row",
  },
  box: {
    marginTop: 20,
    height: 42,
    width: "100%",
    backgroundColor: "#DBBE80",
    borderWidth: 1,
    borderColor: "#EAE2D1",
    borderRadius: 4,
  },
  subscribe: {
    width: "100%",
    padding: 10,
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
