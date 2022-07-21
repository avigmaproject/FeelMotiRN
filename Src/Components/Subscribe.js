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
import Octicons from "react-native-vector-icons/Octicons";
// import Unorderedlist from "react-native-unordered-list";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const DATA = [
  {
    image: require("../Assets/profile.png"),
    name: "Maggie Malone",
    description: "Lorem Ipsum has been the industry's many standard dummy text",
  },
];
const Subscribe = ({ navigation }) => {
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
        title={"Subscribe Plan"}
      />
      <ScrollView
        contentContainerStyle={{
          marginVertical: 20,
        }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.box}>
            <TouchableOpacity>
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
            <View>
              <Text style={styles.boxtext}>Maggie Malone</Text>

              <Text style={styles.boxtext1}>
                Lorem Ipsum has been the to going{" "}
              </Text>
              <Text style={styles.boxtext1}>industry's standard dummy.</Text>
            </View>
          </View>
          <View style={styles.amountbox}>
            <Text style={styles.amountboxtext}>
              Single Person Subscribe Amount:
            </Text>
            <Text style={styles.amountboxtext1}>$5</Text>
          </View>
          <View>
            <Text style={styles.text}>What will you get</Text>
          </View>
          <View style={styles.bullettext}>
            <Octicons
              name={"dot-fill"}
              size={18}
              color="#9B9C9F"
              style={styles.card}
            />
            <Text style={styles.bullettext1}>
              Full access to this user's content
            </Text>
          </View>
          <View style={styles.bullettext}>
            <Octicons
              name={"dot-fill"}
              size={18}
              color="#9B9C9F"
              style={styles.card}
            />
            <Text style={styles.bullettext1}>
              Direct message with this user
            </Text>
          </View>
          <View style={styles.bullettext}>
            <Octicons
              name={"dot-fill"}
              size={18}
              color="#9B9C9F"
              style={styles.card}
            />
            <Text style={styles.bullettext1}>
              Cancel your subscription at any time
            </Text>
          </View>
          <View style={styles.bar_container}>
            <View style={styles.bar} />
            <View>
              <Text style={styles.or}>OR</Text>
            </View>
            <View style={styles.bar} />
          </View>
          <View style={styles.lowerbox}>
            <Text style={styles.lowerboxtext}>
              You will pay $8 and get one more{" "}
            </Text>
            <Text style={styles.lowerboxtext}>Creator subscription </Text>
          </View>
          <View style={styles.box}>
            <TouchableOpacity>
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
            <View>
              <Text style={styles.boxtext}>Maggie Malone</Text>

              <Text style={styles.boxtext1}>
                Lorem Ipsum has been the to going{" "}
              </Text>
              <Text style={styles.boxtext1}>industry's standard dummy.</Text>
            </View>
          </View>
          <View style={styles.amountbox}>
            <Text style={styles.amountboxtext}>
              Two Person Subscribe Total Amount:
            </Text>
            <Text style={styles.amountboxtext1}>$8</Text>
          </View>
          <View>
            <Text style={styles.text}>What will you get</Text>
          </View>
          <View style={styles.bullettext}>
            <Octicons
              name={"dot-fill"}
              size={18}
              color="#9B9C9F"
              style={styles.card}
            />
            <Text style={styles.bullettext1}>
              Full access to this user's content
            </Text>
          </View>
          <View style={styles.bullettext}>
            <Octicons
              name={"dot-fill"}
              size={18}
              color="#9B9C9F"
              style={styles.card}
            />
            <Text style={styles.bullettext1}>
              Direct message with this user
            </Text>
          </View>
          <View style={styles.bullettext}>
            <Octicons
              name={"dot-fill"}
              size={18}
              color="#9B9C9F"
              style={styles.card}
            />
            <Text style={styles.bullettext1}>
              Cancel your subscription at any time
            </Text>
          </View>
          <View style={styles.box1}>
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
          <View style={styles.box2}>
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
  box: {
    display: "flex",
    flexDirection: "row",
  },
  boxtext: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 16,
    color: "#424242",
    fontWeight: "600",
  },
  boxtext1: {
    marginLeft: 10,
    marginTop: 6,
    fontSize: 12,
    color: "#9B9C9F",
    fontWeight: "400",
  },
  amountbox: {
    marginTop: 25,
    height: 65,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(219, 190, 128, 0.1)",
    borderWidth: 1,
    borderColor: "#EBEBEB",
  },
  amountboxtext: {
    fontSize: 14,
    color: "#424242",
    fontWeight: "400",
    padding: 25,
  },
  amountboxtext1: {
    fontSize: 18,
    color: "#DBBE80",
    fontWeight: "700",
    padding: 23,
  },
  text: {
    marginTop: 25,
    fontSize: 16,
    color: "#424242",
    fontWeight: "600",
  },
  bullettext: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
  },
  bullettext1: {
    marginLeft: 10,
    fontSize: 14,
    color: "#9B9C9F",
    fontWeight: "400",
  },
  bar_container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  bar: {
    flex: 1,
    height: 1,
    backgroundColor: "#DBBE80",
  },
  or: {
    width: 50,
    textAlign: "center",
    fontSize: 14,
    color: "#DBBE80",
    fontWeight: "600",
  },
  lowerbox: {
    height: 68,
    backgroundColor: "rgba(219, 190, 128, 0.1)",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    padding: 15,
    marginBottom: 20,
  },
  lowerboxtext: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 14,
    color: "#424242",
    fontWeight: "600",
  },
  box1: {
    marginTop: 30,
    width: "100%",
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
    marginLeft: 12,
    marginTop: 6,
  },
  innerboxtext1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    color: "#9B9C9F",
    fontWeight: "400",
  },
  textinput1: {
    marginTop: 10,
    justifyContent: "space-evenly",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  box2: {
    marginTop: 15,
    width: "100%",
    height: 64,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 5,
  },
  innerboxtextcolor: {
    display: "flex",
    flexDirection: "row",
  },
  innerboxtext2: {
    marginTop: 10,
    marginLeft: 4,
    fontSize: 12,
    color: "#DBBE80",
    fontWeight: "400",
  },
  button: {
    marginTop: 30,
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
export default Subscribe;
