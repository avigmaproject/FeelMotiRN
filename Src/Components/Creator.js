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
import cash from "../Assets/cash.png";
import back from "../Assets/back.png";
import wallet from "../Assets/wallet.png";
import Check from "react-native-vector-icons/Feather";
import Cloud from "react-native-vector-icons/Feather";
import Square from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import Header from "../CustomComponent/Header";
import { TextInput } from "react-native-paper";
import InputText from "../CustomComponent/InputText";

const Creator = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Be A Creator"}
      />
      <ScrollView contentContainerStyle={{ marginHorizontal: 10 }}>
        <View>
          <View style={styles.box}>
            <View style={styles.boxcontent}>
              <Check
                name={"check-circle"}
                size={24}
                color="#FFFF"
                style={styles.check}
              />
              <View style={styles.boxtext}>
                <Text style={styles.verify}>Verify Account</Text>
              </View>
            </View>
            <View style={styles.innertext}>
              <Text style={styles.innertext1}>
                Fill in your address, city, ZIP and attach
              </Text>
              <Text style={styles.innertext2}>
                your goverment issued picture ID
              </Text>
            </View>
          </View>
          <View style={styles.textinput}>
            <InputText label={"Address"} />
            <InputText label={"City"} />
            <InputText label={"Postal/ZIP"} />
          </View>
          <View style={styles.uploadbox}>
            <View style={styles.uploadbox1}>
              <Cloud
                name={"upload-cloud"}
                size={36}
                color="#DBBE80"
                style={styles.upload}
              />
            </View>
            <View style={styles.uploadtext}>
              <Text style={styles.uploadtext1}>
                Upload Form W-9(PDF) Max: 30MB{" "}
              </Text>
              <TouchableOpacity>
                <Text style={styles.uploadtext2}>Upload From Gallery </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.uploadinfo}>
            <Text style={styles.uploadinfo1}>Complete IRS W-9 Form Here</Text>
            <Square
              name={"check-square"}
              size={24}
              color="#DBBE80"
              style={styles.square}
            />
          </View>
          <View style={styles.uploadbox}>
            <View style={styles.uploadbox1}>
              <Cloud
                name={"upload-cloud"}
                size={36}
                color="#DBBE80"
                style={styles.upload}
              />
            </View>
            <View style={styles.uploadtext}>
              <Text style={styles.uploadtext1}>
                Upload image(JPG,PNG,GIF) Max: 30MB
              </Text>
              <TouchableOpacity>
                <Text style={styles.uploadtext2}>Upload From Gallery </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.uploadimage}>
            <Text style={styles.uploadimageinfo}>
              Please upload a photo of your ID Document{" "}
            </Text>
            <Text style={styles.uploadimageinfo}>
              (i.e. Passport or Driving License)
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.submit}>Send For Approval</Text>
            </TouchableOpacity>
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
    marginRight: 100,
    color: "#424242",

    fontWeight: "700",
    height: 43,
    padding: 4,
  },
  box: {
    width: "90%",
    marginTop: 20,
    height: 116,
    marginLeft: 20,
    backgroundColor: "#7889E8",
    borderRadius: 10,
  },
  boxcontent: {
    display: "flex",
    flexDirection: "row",
  },

  check: {
    marginLeft: 85,
    marginTop: 18,
    height: 25,
  },
  verify: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 15,

    fontWeight: "700",
    color: "#FFFFFF",
  },
  innertext: {
    display: "flex",
    marginLeft: 2,
    width: "90%",
  },
  innertext1: {
    marginLeft: 40,
    width: "95%",
    marginTop: 5,
    // backgroundColor: "red",
    fontWeight: "400",
    fontSize: 14,
    opacity: 0.78,
    color: "#FFFFFF",
  },
  innertext2: {
    marginLeft: 60,

    fontWeight: "400",
    fontSize: 14,
    opacity: 0.78,
    color: "#FFFFFF",
  },
  textinput: {
    justifyContent: "space-between",
    width: "90%",
    lineHeight: 22,
    marginLeft: 20,
    margin: 15,
  },

  input: {
    height: 46,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 10,
    fontSize: 14,

    fontWeight: "400",
    marginVertical: 6,
    padding: 10,
  },

  uploadbox: {
    width: "90%",
    height: 167,
    marginLeft: 20,
    borderColor: "#DBBE80",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(219, 190, 128, 0.1)",
    borderStyle: "dashed",
  },
  uploadbox1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  upload: {
    marginTop: 25,
  },
  uploadtext: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadtext1: {
    fontWeight: "400",
    fontSize: 14,
    color: "#424242",
  },
  uploadtext2: {
    textDecorationLine: "underline",

    marginTop: 15,
    fontWeight: "600",
    fontSize: 14,
    color: "#DBBE80",
  },
  uploadinfo: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginLeft: 20,
    marginBottom: 20,
  },
  uploadinfo1: {
    fontWeight: "400",
    fontSize: 14,
    color: "#424242",
  },
  square: {
    marginTop: 20,
    marginLeft: 10,
  },
  uploadimage: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",

    width: "90%",
    marginLeft: 20,
    marginBottom: 20,
  },
  uploadimageinfo: {
    fontWeight: "400",
    fontSize: 14,
    color: "#424242",
    opacity: 0.7,
  },
  button: {
    width: "90%",
    height: 60,
    backgroundColor: "#DBBE80",
    marginBottom: 55,
    borderRadius: 10,
    marginTop: 25,
    left: 20,
  },
  submit: {
    textAlign: "center",
    padding: 18,
    fontSize: 18,

    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default Creator;
