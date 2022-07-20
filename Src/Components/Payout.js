import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import paypal from "../Assets/paypal.png";
import spay from "../Assets/spay.png";
import zpay from "../Assets/zpay.png";
// import CheckBox from "@react-native-community/checkbox";

export default function Payout({ navigation }) {
  return (
    <SafeAreaView>
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Payout Method"}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          marginVertical: 20,
          borderRadius: 10,
        }}
      >
        <View style={styles.box}>
          <Image source={paypal} style={styles.paypal} />
          <View>
            <Text style={styles.boxtext}>Paypal</Text>
            <Text style={styles.boxtext1}>Some processor fees may apply</Text>
          </View>
          {/* <CheckBox right checkedIcon="dot-circle-o" uncheckedIcon="circle-o" /> */}
        </View>
        <View style={styles.box}>
          <Image source={zpay} style={styles.paypal} />
          <View>
            <Text style={styles.boxtext}>Paypal</Text>
            <Text style={styles.boxtext1}>Some processor fees may apply</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Image source={spay} style={styles.paypal} />
          <View>
            <Text style={styles.boxtext}>Paypal</Text>
            <Text style={styles.boxtext1}>Some processor fees may apply</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  box: {
    marginTop: 30,
    height: 80,

    marginLeft: 20,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(235, 235, 235, 0.8)",
  },
  paypal: {
    marginLeft: 20,
    marginTop: 17,
  },
  boxtext: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    color: "#424242",
    fontWeight: "600",
  },
  boxtext1: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 12,
    color: "rgba(66, 66, 66, 0.5)",
    fontWeight: "400",
  },
});
