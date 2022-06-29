import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import squareprofile from "../Assets/squareprofile.png";
import squareprofile2 from "../Assets/squareprofile2.png";
import squareprofile3 from "../Assets/squareprofile3.png";
import squareprofile4 from "../Assets/squareprofile4.png";
import cash from "../Assets/cash.png";
import back from "../Assets/back.png";
import wallet from "../Assets/wallet.png";
import Check from "react-native-vector-icons/Feather";
import Cloud from "react-native-vector-icons/Feather";
import Square from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import Header from "../CustomComponent/Header";
const MySubscription = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"My Subscription"}
      />
      <ScrollView
        contentContainerStyle={{ backgroundColor: "#ffffff", borderRadius: 30 }}
      >
        <View
          style={
            {
              // backgroundColor: "#FFFFFF",
              // borderRadius: 20,
              // marginTop: 15,
            }
          }
        >
          <View style={styles.box}>
            <View style={styles.innerbox}>
              <TouchableOpacity>
                <Image source={squareprofile} style={styles.profile} />
              </TouchableOpacity>
              <View style={styles.profiletext}>
                <Text style={styles.profiletext1}>Leslie Alexander</Text>
                <Text style={styles.profiletext2}>May 07,2022</Text>
              </View>
            </View>
            <View>
              <Text style={styles.intrval}>
                Interval:{" "}
                <Text
                  style={{
                    fontWeight: "300",
                  }}
                >
                  Not Applicable
                </Text>
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
                  Free Subscription
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
                      Active
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.innerbox}>
              <TouchableOpacity>
                <Image source={squareprofile2} style={styles.profile} />
              </TouchableOpacity>
              <View style={styles.profiletext}>
                <Text style={styles.profiletext1}>Leslie Alexander</Text>
                <Text style={styles.profiletext2}>May 07,2022</Text>
              </View>
            </View>
            <View>
              <Text style={styles.intrval}>
                Interval:{" "}
                <Text
                  style={{
                    fontWeight: "300",
                  }}
                >
                  Not Applicable
                </Text>
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
                  Free Subscription
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
                      Active
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.innerbox}>
              <TouchableOpacity>
                <Image source={squareprofile3} style={styles.profile} />
              </TouchableOpacity>
              <View style={styles.profiletext}>
                <Text style={styles.profiletext1}>Leslie Alexander</Text>
                <Text style={styles.profiletext2}>May 07,2022</Text>
              </View>
            </View>
            <View>
              <Text style={styles.intrval}>
                Interval:{" "}
                <Text
                  style={{
                    fontWeight: "300",
                  }}
                >
                  Not Applicable
                </Text>
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
                  Free Subscription
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
                      Active
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.box1}>
            <View style={styles.innerbox}>
              <TouchableOpacity>
                <Image source={squareprofile4} style={styles.profile} />
              </TouchableOpacity>
              <View style={styles.profiletext}>
                <Text style={styles.profiletext1}>Leslie Alexander</Text>
                <Text style={styles.profiletext2}>May 07,2022</Text>
              </View>
            </View>
            <View>
              <Text style={styles.intrval}>
                Interval:{" "}
                <Text
                  style={{
                    fontWeight: "300",
                  }}
                >
                  Not Applicable
                </Text>
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
                  Free Subscription
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
                      Active
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
  box1: {
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
    marginBottom: 20,
  },
});

export default MySubscription;
