import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import InputText from "../CustomComponent/InputText";
import { TextInput } from "react-native-paper";
import Header from "../CustomComponent/Header";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import wallet from "../Assets/wallet.png";

const Tip = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [form, setForm] = useState({
    heading: "",
    description: "",
    amount: "",
  });
  const { heading, description, amount } = form;
  const handleOnChangeText = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header
        onPress={() => navigation.navigate("Profile")}
        title={"Send tip to John Kyriazis"}
      />
      <ScrollView
        contentContainerStyle={{
          marginVertical: 20,
        }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
              resizeMode="stretch"
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
              }}
            />
          </TouchableOpacity>
          <View style={{ backgroundColor: "#FFFFFF", borderRadius: 20 }}>
            <View style={styles.textinput}>
              <InputText
                onChangeText={(value) => handleOnChangeText(value, "heading")}
                label={"Amount (Min $5 - Max $5000)*"}
                value={heading}
                style={{ textTransform: "capitalize" }}
              />
            </View>
          </View>
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
              <Text style={styles.innerboxtext}>
                Debit/Credit Card (Stripe)
              </Text>

              <Text style={styles.innerboxtext1}>
                Transaction fee: 2.9% + 0.30
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#FFFFFF", borderRadius: 20 }}>
            <View style={styles.textinput1}>
              <InputText
                onChangeText={(value) => handleOnChangeText(value, "heading")}
                label={"Card Number"}
                value={heading}
                style={{ textTransform: "capitalize" }}
              />
              <InputText
                onChangeText={(value) => handleOnChangeText(value, "heading")}
                label={"Expiry Date"}
                value={heading}
                style={{ textTransform: "capitalize" }}
              />
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.innerbox}>
              <TouchableOpacity>
                <Ionicons
                  name={"ios-wallet-outline"}
                  size={30}
                  color="#DBBE80"
                  style={styles.card}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.innerboxtext}>Wallet</Text>
              <View style={styles.innerboxtextcolor}>
                <Text style={styles.innerboxtext1}>
                  Available balance: $0.00
                </Text>
                <TouchableOpacity>
                  <Text style={styles.innerboxtext2}>Recharge</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.submit}>Send </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    // width: 40,
    height: 100,
    resizeMode: "contain",
    backgroundColor: "red",
  },
  textinput: {
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  textinput1: {
    marginTop: 10,
    justifyContent: "space-evenly",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  box: {
    marginTop: 10,

    width: "100%",
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
  innerboxtextcolor: {
    display: "flex",
    flexDirection: "row",
  },
  innerboxtext1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    color: "#9B9C9F",
    fontWeight: "400",
  },
  innerboxtext2: {
    marginTop: 10,
    marginLeft: 4,
    fontSize: 12,
    color: "#DBBE80",
    fontWeight: "400",
  },
  button: {
    marginTop: 70,
    width: "100%",
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
export default Tip;
