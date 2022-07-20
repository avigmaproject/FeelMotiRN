import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Header from "../CustomComponent/Header";
const PrivacySecurity = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
   <StatusBar barStyle="dark-content" backgroundColor={"#F8F8FA" } />
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Privacy And Security"}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: 10,
          flex:1,
          paddingTop:10
        }}
      >
        <View style={styles.login}>
          <Text style={styles.logintext}>Login Sessions</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxcontent}>Last login record was from</Text>
          <Text style={styles.boxcontent1}>
            Mozilla/5.0(Windows NT 10.0; Win64;
          </Text>
          <Text style={styles.boxcontent2}>
            x64)AppleWebKit/537.36 (KHTML,like
          </Text>
          <Text style={styles.boxcontent2}>Gecko)Chrome/101.0.4951.67</Text>
          <Text style={styles.boxcontent2}>Safari/537.36</Text>
          <Text style={styles.boxcontent1}>IP:208.109.1.9</Text>

          <TouchableOpacity>
            <View style={styles.buttonbox}>
              <Text style={styles.buttontext}>This Device</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.delete}>
          <Text style={styles.logintext}>Delete account</Text>
        </View>
        <View>
          <Text style={styles.boxcontent2}>
            Watch out! This will permanently
          </Text>
          <Text style={styles.boxcontent2}>
            delete your account, and all your files,
          </Text>
          <Text style={styles.boxcontent2}>
            subscription, etc, and you will not be
          </Text>
          <Text style={styles.boxcontent2}>able to enter the site again.</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.buttonbox2}>
            <Text style={styles.buttontext}>Delete Account</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  login: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  logintext: {
    fontSize: 18,
    color: "#424242",
    fontWeight: "600",
  },
  box: {
    height: 259,
    marginLeft: 20,
    backgroundColor: "rgba(155, 156, 159, 0.1)",
    width: "90%",
    marginBottom: 20,
  },
  boxcontent: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    color: "#424242",
    fontWeight: "600",
  },
  boxcontent1: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    color: "rgba(66, 66, 66, 0.58)",
    fontWeight: "400",
  },
  boxcontent2: {
    marginLeft: 20,
    fontSize: 16,
    color: "rgba(66, 66, 66, 0.58)",
    fontWeight: "400",
  },
  buttonbox: {
    marginTop: 20,
    marginLeft: 20,
    height: 40,
    width: "35%",
    backgroundColor: "#DBBE80",
    borderRadius: 4,
  },
  buttontext: {
    padding: 10,
    marginLeft: 10,
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "700",
  },
  buttonbox2: {
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 20,
    height: 40,
    width: "38%",
    backgroundColor: "#EB5757",
    borderRadius: 4,
  },
  delete: {
    marginLeft: 20,
    marginBottom: 20,
  },
});
export default PrivacySecurity;
