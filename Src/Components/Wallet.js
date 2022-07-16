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
} from "react-native";
import cash from "../Assets/cash.png";
import React, { useState } from "react";
import Header from "../CustomComponent/Header";
import { TextInput } from "react-native-paper";

import InputText from "../CustomComponent/InputText";
const ForgetPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={{  backgroundColor: "#F8F8FA", flex: 1 }}>
     <StatusBar backgroundColor={"#FFFFFF" } />
      <Header onPress={() => navigation.navigate("Setting")} title={"Wallet"} />
      <ScrollView keyboardShouldPersistTaps={"always"} contentContainerStyle={{ marginHorizontal: 20 ,}}>
        <View>
          <View style={styles.cash}>
            <Text style={styles.cashtext}>$0.00 USD</Text>
          </View>
          <View style={styles.textinput}>
            <InputText label={"Amount (Min $5-Max $5000)"} />
            <TextInput
              style={styles.transaction}
              autoCapitalize="none"
              label="Transaction Fee: $10"
              theme={{ colors: { primary: "#424242" } }}
            />

            <InputText label={"Debit/Credit Card (Stirpe)"} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.submit}>Add Funds</Text>
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
    marginRight: 140,
    color: "#424242",

    fontWeight: "700",
    height: 43,
    padding: 4,
  },
  cash: {
    width: "90%",
    marginTop: 20,
    height: 116,
    marginLeft: 20,
    backgroundColor: "#7889E8",
    borderWidth: 1,

    borderRadius: 10,
  },
  cashtext: {
    fontSize: 26,
    marginLeft: 70,
    padding: 20,

    fontWeight: "700",
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
    fontSize: 16,

    fontWeight: "600",
    // lineHeight: 22,
    marginVertical: 15,
    padding: 10,
  },
  transaction: {
    height: 90,
    backgroundColor: "rgba(155, 156, 159, 0.1)",
    opacity: 0.5,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 10,

    marginVertical: 15,
    padding: 10,
    fontSize: 16,

    fontWeight: "600",
    color: "#424242",
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
  home: {
    width: "45%",
    height: 60,
    backgroundColor: "#DBBE80",
    padding: 20,
    textAlign: "center",
    left: 100,
    margin: 15,
    borderRadius: 10,
  },
});

export default ForgetPassword;
