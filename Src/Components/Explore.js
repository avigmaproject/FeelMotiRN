import React from "react";
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
  TextInput,
  StatusBar,
} from "react-native";
import moti from "../Assets/moti.png";

import Menu from "react-native-vector-icons/Ionicons";
import Photo from "react-native-vector-icons/FontAwesome";
import Zip from "react-native-vector-icons/FontAwesome";
import Lock from "react-native-vector-icons/Feather";
import Smiley from "react-native-vector-icons/Feather";
import Sound from "react-native-vector-icons/Foundation";
import Check from "react-native-vector-icons/AntDesign";
import Dot from "react-native-vector-icons/Entypo";
import Compus from "react-native-vector-icons/SimpleLineIcons";
import profile from "../Assets/profile.png";
const Explore = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" backgroundColor={"#FFFFFF"} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={moti} style={styles.moti} />
          </TouchableOpacity>
          <View style={styles.header1}>
            <TouchableOpacity>
              <Menu name={"menu"} size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <TouchableOpacity>
            <View style={styles.buttonbox}>
              <View style={styles.buttonboxicon}>
                <Compus
                  name={"compass"}
                  size={15}
                  style={styles.buttonboxicon}
                />
              </View>
              <Text style={styles.buttontext}>Explore Posts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonbox}>
              <View style={styles.buttonboxicon}>
                <Compus
                  name={"compass"}
                  size={15}
                  style={styles.buttonboxicon}
                />
              </View>
              <Text style={styles.buttontext}>Explore Creators</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.textarea}>
          <TouchableOpacity>
            <Image source={profile} style={styles.profile} />
          </TouchableOpacity>
          <TextInput
            style={styles.textareatext}
            onChangeText={onChangeText}
            value={text}
            editable
            maxLength={40}
          />
        </View>
        <View style={styles.iconbox}>
          <TouchableOpacity>
            <View style={styles.icon}>
              <Photo name={"photo"} size={24} color="#DBBE80" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.icon1}>
              <Zip name={"file-zip-o"} size={24} color="#DBBE80" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.icon1}>
              <Lock name={"lock"} size={24} color="#DBBE80" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.icon1}>
              <Lock name={"lock"} size={24} color="#DBBE80" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.icon1}>
              <Sound name={"sound"} size={24} color="#DBBE80" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.icon1}>
              <Smiley name={"smile"} size={24} color="#DBBE80" />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.buttonbox1}>
              <Text style={styles.buttontext1}>Publish</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amounttext}>5000</Text>
        </View>
        <View style={styles.space}>
          <Text></Text>
        </View>
        <View style={styles.profilearea}>
          <TouchableOpacity>
            <Image source={profile} style={styles.profile} />
          </TouchableOpacity>
          <View>
            <Text style={styles.textareatext1}> motisample</Text>
            <View style={styles.historybox}>
              <Text style={styles.months}> 3 months ago</Text>
              <View style={styles.lock}>
                <Lock name={"lock"} size={13} color="#231F20" />
              </View>
            </View>
          </View>
          <View style={styles.icon2}>
            <Check name={"checkcircle"} size={15} color="blue" />
          </View>
          <Text style={styles.text}>@motisample</Text>
          <View style={styles.icon3}>
            <TouchableOpacity>
              <Dot name={"dots-three-horizontal"} size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <Text>t</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 20,
    width: "90%",
    marginTop: 5,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  header1: {
    flexDirection: "row",
  },
  moti: {
    width: 90,
    height: 45,
  },
  box: {
    backgroundColor: "#f8f8f8f8",
    width: "100%",
    height: 150,
  },
  buttonbox: {
    marginLeft: 20,
    marginTop: 20,
    width: "90%",
    height: 40,
    backgroundColor: "#DBBE80",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  buttonboxicon: {
    marginTop: 6,
    marginLeft: 60,
    color: "#FFFFFF",
  },
  buttontext: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 10,
    marginTop: 9,
    fontSize: 16,
    color: "#FFFFFF",
  },
  textarea: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 90,

    width: "90%",
  },
  profile: {
    width: 50,
    height: 50,
  },
  textareatext: {
    marginLeft: 20,
    marginTop: 10,
  },
  iconbox: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    width: "90%",
    marginLeft: 20,
  },
  icon: {
    marginLeft: 15,
  },
  buttonbox1: {
    marginLeft: 20,
    marginTop: 15,
    width: "90%",
    height: 40,
    backgroundColor: "#DBBE80",
    borderRadius: 20,
  },
  buttontext1: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 10,
    marginTop: 9,
    fontSize: 16,
    color: "#FFFFFF",
  },
  icon1: {
    marginLeft: 30,
  },
  amount: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 10,
    width: "90%",
    marginBottom: 15,
  },
  amounttext: {
    textAlign: "right",
  },
  space: {
    backgroundColor: "#f8f8f8f8",
    height: 20,
  },
  profilearea: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width: "90%",
  },
  historybox: {
    display: "flex",
    flexDirection: "row",
  },
  textareatext1: {
    marginLeft: 20,
    marginTop: 0,
    color: "#DBBE80",
    fontSize: 20,
  },
  months: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "300",
  },
  lock: {
    marginLeft: 3,
    fontWeight: "100",
  },
  icon2: { marginTop: 7, marginLeft: 5 },

  text: {
    marginTop: 7,
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "300",
  },
  icon3: {
    marginLeft: 45,
  },
  body: {
    marginLeft: 20,
  },
});

export default Explore;
