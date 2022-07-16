import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Header from "../CustomComponent/Header";

const DATA = [
  {
    image: require("../Assets/squareprofile.png"),
    name: "Leslie Alexander",
    date: "May 07,2022",
    interval: "Not Applicable",
    ends: "Free Subscription",
    status: "Active",
  },
  {
    image: require("../Assets/squareprofile2.png"),
    name: "Leslie Alexander",
    date: "May 07,2022",
    interval: "Not Applicable",
    ends: "Free Subscription",
    status: "Active",
  },
  {
    image: require("../Assets/squareprofile3.png"),
    name: "Leslie Alexander",
    date: "May 07,2022",
    interval: "Not Applicable",
    ends: "Free Subscription",
    status: "Active",
  },
  {
    image: require("../Assets/squareprofile4.png"),
    name: "Leslie Alexander",
    date: "May 07,2022",
    interval: "Not Applicable",
    ends: "Free Subscription",
    status: "Active",
  },
];
const MySubscription = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
   <StatusBar backgroundColor={"#f8f8f8" } />
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"My Subscription"}
      />
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ backgroundColor: "#ffffff", borderRadius: 30 ,paddingTop:10,marginTop:10}}
      >
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <View>
                <View style={styles.box}>
                  <View style={styles.innerbox}>
                    <TouchableOpacity>
                      <Image source={item.image} style={styles.profile} />
                    </TouchableOpacity>
                    <View style={styles.profiletext}>
                      <Text style={styles.profiletext1}>{item.name}</Text>
                      <Text style={styles.profiletext2}>{item.date}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.intrval}>
                      Interval:{" "}
                      <Text style={{ fontWeight: "300" }}>{item.interval}</Text>
                    </Text>
                  </View>
                  <View style={styles.boxbottom}>
                    <Text style={styles.boxbottomtext}>
                      Ends at:{" "}
                      <Text
                        style={{
                          fontWeight: "300",
                        }}
                      >
                        {item.ends}
                      </Text>
                    </Text>
                    <View style={styles.statusbox}>
                      <TouchableOpacity>
                        <Text style={styles.status}>
                          Status:
                          <Text
                            style={{
                              fontWeight: "300",
                            }}
                          >
                            {item.status}
                          </Text>
                        </Text>
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
  heading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 20,
    width: "90%",

    marginVertical: 10,
  },
  text: {
    fontSize: 24,
    marginRight: 80,
    color: "#424242",

    fontWeight: "700",
    height: 43,
    padding: 4,
  },
  box: {
    width: "90%",
    marginTop: 20,
    height: 160,
    marginLeft: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(235, 235, 235, 0.8)",
    borderRadius: 10,
    elevation: 10,
    borderRadius: 10,
    // marginBottom: 10,
  },
  profile: {
    marginHorizontal: 10,
    marginVertical: 10,

    width: 50,
    height: 50,
  },
  innerbox: {
    display: "flex",
    flexDirection: "row",
  },
  profiletext: {
    marginTop: 10,
  },
  profiletext1: {
    fontSize: 16,

    color: "#424242",

    fontWeight: "600",
  },
  profiletext2: {
    fontSize: 14,

    color: "#424242",

    fontWeight: "400",
  },
  intrval: {
    marginLeft: 10,
    fontSize: 14,

    color: "#424242",

    fontWeight: "600",
  },
  boxbottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxbottomtext: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 14,

    color: "#424242",

    fontWeight: "600",
  },
  statusbox: {
    marginTop: 15,
    width: "27%",
    height: 35,
    backgroundColor: "rgba(39, 174, 96, 0.1)",
    marginRight: 10,

    borderRadius: 6,
  },
  status: {
    // padding: 7,
    marginLeft: 5,
    marginTop: 8,
    fontSize: 12,

    color: "#27AE60",

    fontWeight: "600",
  },
});

export default MySubscription;
