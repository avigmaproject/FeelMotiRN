import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../CustomComponent/Header";
import MasterCard from "../Assets/MasterCard.png";
import DebitCard from "../Assets/DebitCard.png";
import Feather from "react-native-vector-icons/Feather";
// import CheckBox from "@react-native-community/checkbox";

export default function AddNewCard({ navigation }) {
  return (
    <SafeAreaView>
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"My Card"}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#fff",
          marginVertical: 20,
          borderRadius: 10,
        }}
      >
        <View style={styles.box}>
          <Image source={MasterCard} style={styles.credit} />
          <View>
            <Text style={styles.boxtext}>Credit Card</Text>
            <Text style={styles.boxtext1}>5642 **** **** 2314 </Text>
          </View>
          {/* <CheckBox right checkedIcon="dot-circle-o" uncheckedIcon="circle-o" /> */}
        </View>
        <View style={styles.box}>
          <Image source={DebitCard} style={styles.credit} />
          <View>
            <Text style={styles.boxtext}>Debit Card</Text>
            <Text style={styles.boxtext1}>5642 **** **** 2314</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Sponsor")}
          >
            <Feather
              name={"plus"}
              size={18}
              color="#DBBE80"
              style={styles.card}
            />
            <View>
              <Text style={styles.cardtext}>Add New Card</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.submit}>Confirm Method</Text>
          </TouchableOpacity>
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
  credit: {
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
  card: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  cardtext: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
    color: "#DBBE80",
    fontWeight: "400",
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
