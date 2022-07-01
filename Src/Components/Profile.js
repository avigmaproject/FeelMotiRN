import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
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
import ProfileTabView from "../Navigation/ProfileTabView";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <Header
        settings={true}
        onPress={() => navigation.navigate("Home")}
        onPress2={() => navigation.navigate("Setting")}
        title={"Leslie Alexander"}
      />
      <ScrollView keyboardShouldPersistTaps={"always"} contentContainerStyle={{ marginHorizontal: 10 }}>
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
                    source={profile}
                    style={{ height: 90, width: "100%" }}
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
            <TouchableOpacity>
              <View style={{ marginRight: 10 }}>
                <View style={styles.box}>
                  <Text style={styles.subscribe}>Subscribe</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginRight: 10 }}>
                <View style={styles.box2}>
                  <Text style={styles.message}>Message</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginRight: 10 }}>
                <View style={styles.box2}>
                  <Text style={styles.message}>Sponsor</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.box2}>
                <Text style={styles.message}>Tip</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.storyContainer}>
            <View>
              <TouchableOpacity>
                <Image source={story1} style={styles.story} />
              </TouchableOpacity>
              <Text style={styles.title}>Title here</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={story2} style={styles.story} />
              </TouchableOpacity>
              <Text style={styles.title}>Title here</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={story3} style={styles.story} />
              </TouchableOpacity>
              <Text style={styles.title}>Title here</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={story4} style={styles.story} />
              </TouchableOpacity>
              <Text style={styles.title}>Title here</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={story5} style={styles.story} />
              </TouchableOpacity>
              <Text style={styles.title}>Tit</Text>
            </View>
          </View>
          {/* <View>
            <ProfileTabView />
          </View> */}
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
    // backgroundColor: "red",
  },
  title: {
    marginTop: 2,
    color: "#424242",
    fontSize: 14,
    fontWeight: "400",
    // backgroundColor: "red",
  },
});
