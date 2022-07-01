import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import google from "../Assets/google.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Social(props) {
  return (
    <View style={styles.containerIcon}>
      <View style={styles.circle}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            onPress={props.onClickFB}
            name={"facebook"}
            size={35}
            color="#3B5998"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.circle}>
        <TouchableOpacity onPress={props.onClickGmail}>
          <Image source={google} style={styles.google} />
        </TouchableOpacity>
      </View>
      {Platform.OS === "ios" && (
        <View style={styles.circle}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              onPress={props.onClickApple}
              name={"apple"}
              size={35}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 18,
    alignSelf: "center",
    width: "90%",
  },

  google: {
    width: 34,
    height: 34,
  },
  app: {
    width: 23,
    height: 27,
  },
  circle: {
    backgroundColor: "#fff",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    padding: 10,
  },
});
