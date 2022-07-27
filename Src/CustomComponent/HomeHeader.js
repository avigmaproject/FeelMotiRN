import { View, StyleSheet ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import moti from "../Assets/moti.png";
import bell from "../Assets/bell.png";
import { useSelector, useDispatch } from "react-redux";

export default function HomeHeader(props) {
  const profile = useSelector((state) => state.profileReducer.profile);

  return (
      <View style={styles.header}>
            <TouchableOpacity>
              <Image source={moti} style={styles.moti} />
            </TouchableOpacity>
            <View style={styles.header1}>
              <TouchableOpacity onPress={()=> props.navigation.navigate("Notification")}>
                <Image source={bell} style={styles.bell} />
              </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                  <Image
                     resizeMode="stretch"
                    source={{ uri: profile.User_Image_Path ?profile.User_Image_Path 
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
                       }}
                    style={styles.profile}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View> 
  )
}
const styles = StyleSheet.create({
  header1: {
    flexDirection: "row",
  },
  moti: {
    width: 90,
    height: 45,
  },
  bell: {
    margin: 15,
    marginRight: 25,
    // backgroundColor: "red",
    width: 25,
    height: 25,
  },
  profile: {
    // marginHorizontal: 10,

    height: 50,
    width: 50,
    borderRadius: 50,
  },
  bar: {
    paddingLeft: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    
  },
  bar1: {
    flexDirection: "row",
    width:"90%",
    alignItems:"center",
    marginVertical:5
  },
  user: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  text: {
    paddingLeft: 20,
    fontSize: 12,
    fontWeight: "300",
  },
  text1: {
    fontSize: 20,
    color: "#36596A",
    fontWeight: "400",
    textTransform: "capitalize",
  },
  text2: {
    fontSize: 15,
    height: 16,
    color: "#A6A6A6",
    fontWeight: "400",
    textTransform: "capitalize",
  },
  image: {
    width: "100%",
  },

  dot: {
    marginRight: 20,
    justifyContent: "flex-end",
    width: 15,
    height: 30,
  },
  content: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingtop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    // shadowColor: "#DBBE80",
    // shadowOffset: { width: 5, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 10,
  },
  content1: {
    padding: 10,
    fontWeight: "400",
    fontSize: 14,
    color: "#9B9C9F",
    lineHeight: 22,
  },
  like: {
    marginLeft: 20,
    height: 25,
  },
  liketext: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 15,
    color: "#231F20",
  },
  icon10: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  icontext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
 
  share: {
    marginRight: 50,
    // backgroundColor: 'purple',
  },
  header: {
    marginLeft: 20,
    width: "90%",
    marginTop: 5,
    marginBottom: 10,
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
    height: 140,
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
  textareatext: {
    marginLeft: 20,
    textAlignVertical: "top",
    width: "80%",
    height: 70,
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


  icon3: {
    marginLeft: 45,
  },
  body: {
    marginLeft: 20,
  },
 title: {
    marginTop: 2,
    color: "#424242",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "capitalize",
  }, 
  
});
