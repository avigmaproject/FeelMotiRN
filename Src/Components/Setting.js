import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,SafeAreaView,StatusBar} from "react-native";
import Right from "react-native-vector-icons/Entypo";
import Header from "../CustomComponent/Header";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/action/auth/action";

const Setting = ({ navigation }) => {

const DATA = [
  {
    id:1,
    title: "Account",
    object:[{
    title:"Edit Profile",
    id:1,
    onPress:() => navigation.navigate("EditProfile"),
    image : require("../Assets/edit.png")
    },
    // {
    // title:"Wallet",
    // id:2,
    // onPress:() => navigation.navigate("Wallet"),
    // image : require("../Assets/wallet1.png")

    // },
    {
    title:"Be a creator!",
    icon:"star",
    id:2,
    onPress:() => navigation.navigate("Creator"),
    image : require("../Assets/star.png")

    },
    {
    title:"Logout",
    icon:"logout",
    id:3,
    onPress:() => onLogout(),
    image : require("../Assets/star.png")
    },
    ],
  },
{
    id:2,
    title: "Subscription",
    object:[{
    title:"My Subscription",
    id:1,
    onPress:() => navigation.navigate("MySubscription"),
    image : require("../Assets/user1.png")
    },
    ],
  },
{
    id:3,
    title: "Privacy And Security",
    object:[{
    title:"Privacy And Security",
    id:1,
    onPress:() => navigation.navigate("PrivacySecurity"),
    image : require("../Assets/secure.png")
    },
    {
    title:"Password",
    id:2,
    onPress:() => navigation.navigate("Password"),
    image : require("../Assets/lock.png")

    },
    ],
  },
{
    id:4,
    title: "Payments",
    object:[{
    title:"Payments",
    id:1,
    onPress:() => navigation.navigate("Payment"),
    image : require("../Assets/doller.png")
    },
    {
    title:"My Cards",
    id:2,
    onPress:() => navigation.navigate("Mycard"),
    image : require("../Assets/wallet1.png")
    },
{
    title:"Payout Method",
    id:3,
    onPress:() => navigation.navigate("Payout"),
    image : require("../Assets/paymnet1.png")
    },
{
    title:"Withdrawals",
    id:4,
    onPress:() => navigation.navigate("Withdrawals"),
    image : require("../Assets/paymnet.png")
    }
    ],
  },
 
];
  const dispatch = useDispatch();
 const onLogout = () => {
    dispatch(signout());
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
       <StatusBar barStyle="dark-content" backgroundColor={"#F8F8FA" } />

      <Header onPress={() => navigation.navigate("Profile")} search={true} title={"Setting"} />
      <ScrollView contentContainerStyle={{ marginHorizontal: 10 }}>
        <View>
          {DATA.map((item) => {
          return(
           <View style={styles.heading1}>
            <View style={styles.subheading2}>
              <Text style={styles.account}>{item.title}</Text>
            </View>
            {item.object.map((item1,i,arr)=>{ 
              return(
            <View style={{...styles.box , borderBottomWidth:arr.length-1 === i  ? 0:1}}>
              <TouchableOpacity
                onPress={item1.onPress} >
                <View style={styles.boxcontent}>
                 <View style={{width:"20%"}}><Image resizeMode="stretch" style={{height:25,width:25}} source={item1.image}/></View>
                  <View style={{width:"75%",justifyContent:"center",alignItems:"flex-start"}}><Text style={styles.edit}>{item1.title}</Text></View>
                 <View style={{width:"10%"}}><Right
                    name={"chevron-small-right"}
                    size={24}
                    color="#A0A6B1"
                  /></View>
                </View>
              </TouchableOpacity>
            </View>
              )
              })}
            </View>
          )
          })}
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
    marginTop: 25,
    marginBottom: 15,
    width: "90%",
    height: 32,
    // backgroundColor: 'red',
  },

  text: {
    color: "#424242",
    fontSize: 24,
    // backgroundColor: 'red',
    color: "#424242",
    fontWeight: "700",
  },
  heading1: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFF7E4",
    borderRadius: 4,
    marginTop:10
  },
  subheading: {},
  account: {
    fontWeight: "600",
    fontSize: 18,
    color: "#424242",
  },
  box: {
    marginTop: 10,
    height: 55,
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
marginHorizontal:20
  },
  boxcontent: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
  },
  edit: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    // backgroundColor: 'red',
  },
  box1: {
    // marginTop: 10,
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  boxcontent1: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wallet: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 130,
  },
  box2: {
    // marginTop: 10,
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    // opacity: 0.05,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontent2: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  creator: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 80,
  },
  heading2: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFF7E4",
    borderRadius: 4,
  },
  subheading2: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  account: {
    fontWeight: "600",
    fontSize: 18,
    color: "#424242",
  },
  boxB: {
    marginTop: 10,
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    // opacity: 0.05,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontentB: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subscription: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 60,
  },
  boxC: {
    height: 55,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  boxcontentC: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  privacy: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 40,
  },
  password: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 110,
  },
  heading3: {
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFF7E4",
    borderRadius: 4,
  },
  card: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 100,
  },
  payout: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 60,
  },
  withdraw: {
    fontWeight: "600",
    fontSize: 16,
    color: "#424242",
    marginRight: 80,
  },
});
export default Setting;
