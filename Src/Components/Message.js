import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";

import moti from "../Assets/moti.png";
import Header from "../CustomComponent/Header";
import Search from "react-native-vector-icons/AntDesign";

const DATA = [
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Dianne Russell",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Savannah Nguyen ",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Jerome Bell",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Jane Cooper",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Ralph Edwards",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Darlene Robertson",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Dianne Russell",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Savannah Nguyen ",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
  {
    image: require("../Assets/ProfileImage.png"),
    name: "Jerome Bell",
    time: "10.15pm",
    description: "Hey! How can i help you?",
  },
];
const LoadMoreRandomData = () => {
  alert("load more data");
};
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
const Message = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" backgroundColor={"#FFFFFF"} />
      <ScrollView
        onMomentumScrollEnd={(event) => {
          if (isCloseToBottom(event.nativeEvent)) {
            LoadMoreRandomData();
          }
        }}
        contentContainerStyle={{ backgroundColor: "#fff" }}
      >
        <View style={{ marginHorizontal: 10 }}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={moti} style={styles.moti} />
            </TouchableOpacity>
            <Text style={styles.headertext}>Message</Text>
            <Search
              name={"search1"}
              size={24}
              color="#424242"
              style={styles.search}
            />
          </View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 2, width: "100%" }}>
                <View style={styles.box}>
                  <View style={{ width: "20%" }}>
                    <TouchableOpacity>
                      <Image source={item.image} style={styles.active} />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "center",
                      marginLeft: 20,
                      width: "55%",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Chat")}
                    >
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.boxtext}
                      >
                        {item.name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.boxtext1}
                      >
                        {item.description}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      width: "20%",
                      justifyContent: "flex-start",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              </View>
            )}
          />
          <View style={{ marginTop: 20 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  moti: {
    height: 40,
    // backgroundColor: "red",
    width: 70,
  },
  headertext: {
    marginTop: 3,
    marginRight: 25,
    fontSize: 24,
    color: "#424242",
    fontWeight: "600",
  },
  search: {
    marginTop: 10,
  },
  box: {
    marginTop: 10,
    height: 84,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "#DBBE80",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    borderWidth: 1,
    borderColor: "rgba(160, 166, 177, 0.1)",
    borderRadius: 20,
  },
  active: {
    margin: 7,
  },
  boxtext: {
    fontSize: 16,
    color: "#424242",
    fontWeight: "600",
  },
  boxtext1: {
    marginTop: 10,
    fontSize: 14,
    color: "#9B9C9F",
    fontWeight: "400",
  },
  time: {
    fontSize: 12,
    color: "#9B9C9F",
    fontWeight: "400",
  },
});
export default Message;
