import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import back from "../Assets/back.png";
import Right from "react-native-vector-icons/Entypo";
import Edit from "react-native-vector-icons/Feather";
import Credit from "react-native-vector-icons/SimpleLineIcons";
import Star from "react-native-vector-icons/EvilIcons";
import User from "react-native-vector-icons/Feather";
import Lock from "react-native-vector-icons/Feather";
import Shield from "react-native-vector-icons/Ionicons";
import Header from "../CustomComponent/Header";

const Setting = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
      <Header
        onPress={() => navigation.navigate("Profile")}
        search={true}
        title={"Setting"}
      />
      <ScrollView contentContainerStyle={{ marginHorizontal: 10 }}>
        <View>
          <View style={styles.heading1}>
            <View style={styles.subheading2}>
              <Text style={styles.account}>Account</Text>
            </View>

            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
              >
                <View style={styles.boxcontent}>
                  <Edit name={"edit"} size={24} color="#DBBE80" />
                  <Text style={styles.edit}>Edit Profile</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box1}>
              <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
                <View style={styles.boxcontent1}>
                  <Credit name={"credit-card"} size={24} color="#DBBE80" />
                  <Text style={styles.wallet}>Wallet</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.box2, borderBottomWidth: 0 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Creator")}>
                <View style={styles.boxcontent2}>
                  <Star name={"star"} size={24} color="#DBBE80" />
                  <Text style={styles.creator}>Be A Creator!</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.heading2}>
            <View style={styles.subheading2}>
              <Text style={styles.account}>Subscription</Text>
            </View>

            <View style={{ ...styles.boxB, borderBottomWidth: 0 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("MySubscription")}
              >
                <View style={styles.boxcontentB}>
                  <User name={"user-check"} size={24} color="#DBBE80" />
                  <Text style={styles.subscription}>My Subscription</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.heading2}>
            <View style={styles.subheading2}>
              <Text style={styles.account}>Privacy And Security </Text>
            </View>

            <View style={styles.boxB}>
              <TouchableOpacity onPress={() => navigation.navigate("PrivacySecurity")}>
                <View style={styles.boxcontentB}>
                  <Shield
                    name={"shield-checkmark-outline"}
                    size={24}
                    color="#DBBE80"
                  />
                  <Text style={styles.privacy}>Privacy And Security</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.boxC, borderBottomWidth: 0 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Password")}>
                <View style={styles.boxcontentC}>
                  <Lock name={"lock"} size={24} color="#DBBE80" />
                  <Text style={styles.password}>Password</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.heading3}>
            <View style={styles.subheading2}>
              <Text style={styles.account}>Payments</Text>
            </View>

            <View style={styles.box}>
              <TouchableOpacity>
                <View style={styles.boxcontent}>
                  <Edit name={"edit"} size={24} color="#DBBE80" />
                  <Text style={styles.edit}>Payments</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box1}>
              <TouchableOpacity>
                <View style={styles.boxcontent1}>
                  <Credit name={"credit-card"} size={24} color="#DBBE80" />
                  <Text style={styles.card}>My Cards</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box2}>
              <TouchableOpacity>
                <View style={styles.boxcontent2}>
                  <Star name={"star"} size={24} color="#DBBE80" />
                  <Text style={styles.payout}>Payout Method</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.box2, borderBottomWidth: 0 }}>
              <TouchableOpacity>
                <View style={styles.boxcontent2}>
                  <Star name={"star"} size={24} color="#DBBE80" />
                  <Text style={styles.withdraw}>Withdrawals</Text>
                  <Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  />
                </View>
              </TouchableOpacity>
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
    marginTop: 25,
    marginBottom: 15,
    width: "90%",
    height: 32,
    // backgroundColor: 'red',
  },

  text: {
    color: "#424242",
    fontSize: 24,
    // backgroundColor: 'red',
    color: "#424242",
    fontWeight: "700",
  },
  heading1: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFF7E4",
    borderRadius: 4,
  },
  subheading: {},
  account: {
    fontWeight: "600",
    fontSize: 18,
    color: "#424242",
  },
  box: {
    marginTop: 10,
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  boxcontent: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  edit: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 100,
    // backgroundColor: 'red',
  },
  box1: {
    // marginTop: 10,
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  boxcontent1: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wallet: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 130,
  },
  box2: {
    // marginTop: 10,
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    // opacity: 0.05,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontent2: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  creator: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 80,
  },
  heading2: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFF7E4",
    borderRadius: 4,
  },
  subheading2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  account: {
    fontWeight: "600",
    fontSize: 18,
    color: "#424242",
  },
  boxB: {
    marginTop: 10,
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    // opacity: 0.05,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontentB: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subscription: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 60,
  },
  boxC: {
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  boxcontentC: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  privacy: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 40,
  },
  password: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 110,
  },
  heading3: {
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFF7E4",
    borderRadius: 4,
  },
  card: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 100,
  },
  payout: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 60,
  },
  withdraw: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 80,
  },
});
export default Setting;
