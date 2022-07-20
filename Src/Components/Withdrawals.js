import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import wallet from "../Assets/wallet.png";

export default function Withdrawals({ navigation }) {
  return (
    <SafeAreaView>
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Withdrawals"}
      />

      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          marginVertical: 20,
          borderRadius: 10,
        }}
      >
        <View style={styles.box}>
          <View style={styles.innerbox}>
            <TouchableOpacity>
              <SimpleLineIcons
                name={"credit-card"}
                size={30}
                color="#DBBE80"
                style={styles.card}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.innerboxtext}>Click here to change your</Text>

              <Text style={styles.innerboxtext1}>payment method</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box1}>
          <Image source={wallet} style={styles.wallet} />
          <View>
            <Text style={styles.wallettext}>$3.87 USD</Text>
            <Text style={styles.wallettext1}>Amount minimum withdrawal</Text>
            <Text style={styles.wallettext2}> $10 USD</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.submit}>Make Withdrawal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  box: {
    marginTop: 30,
    marginLeft: 20,
    width: "90%",
    // backgroundColor: "red",
    height: 64,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 5,
  },
  innerbox: {
    marginTop: 8,
    marginLeft: 10,
    width: "15%",
    height: 45,
    backgroundColor: "rgba(219, 190, 128,0.4)",
    borderRadius: 4,
  },
  innerboxtext: {
    marginTop: 8,
    marginLeft: 10,
    fontSize: 14,
    color: "#424242",
    fontWeight: "700",
  },
  card: {
    // padding: 10,
    marginLeft: 12,
    marginTop: 6,
  },
  innerboxtext1: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 14,
    color: "#DBBE80",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  box1: {
    height: 120,
    backgroundColor: "#7889E8",
    marginLeft: 20,
    width: "90%",
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
  },
  wallet: {
    marginLeft: 20,
    marginTop: 35,
  },
  wallettext: {
    fontSize: 26,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  wallettext1: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "400",
    color: "rgba(255, 255, 255,0.78)",
  },
  wallettext2: {
    fontSize: 14,
    marginLeft: 6,
    marginTop: 5,
    fontWeight: "400",
    color: "rgba(255, 255, 255,0.78)",
  },

  button: {
    marginLeft: 20,
    marginTop: 300,
    width: "90%",
    height: 60,
    backgroundColor: "#DBBE80",
    borderRadius: 5,
  },
  submit: {
    textAlign: "center",
    padding: 18,
    fontSize: 18,

    fontWeight: "700",
    color: "#FFFFFF",
  },
});
