import React from "react";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import { useState } from "react";

const DATA = [
  {
    image: require("../Assets/profile.png"),
    name: "Minal jain",
    state: "United States",
    description: "Lorem Ipsum has been the industry's many standard dummy text",
  },
  {
    image: require("../Assets/squareprofile4.png"),
    name: "Poonam sawant",
    state: "United States",
    description: "Lorem Ipsum has been the industry's many standard dummy text",
  },
  {
    image: require("../Assets/squareprofile3.png"),
    name: "Niral jain",
    state: "United States",
    description: "Lorem Ipsum has been the industry's many standard dummy text",
  },
  {
    image: require("../Assets/squareprofile2.png"),
    name: "Ronald Richards",
    state: "United States",
    description: "Lorem Ipsum has been the industry's many standard dummy text",
  },
];

const Search = () => {
const [data, setdata] = useState(DATA)
const [filterdata, setfilterdata] = useState(DATA)
const [backupdata, setbackupdata] = useState(DATA)
const [searchtext, setsearchtext] = useState("")
const  searchFilterFunction = (text) => {
setsearchtext(text)
    if (text) {
      const newData = filterdata.filter(function (item) {
        if (item.name) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : "".toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      });
      console.log(newData);
    setdata(newData)
    } else {
      setdata(backupdata)
    }
  };
const ClearText = () =>{
 setsearchtext("")
 setdata(backupdata)
} 
const LoadMoreRandomData =() =>{
alert("load more data")
}
 const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
const paddingToBottom = 20;
return layoutMeasurement.height + contentOffset.y >=
  contentSize.height - paddingToBottom;
 }
  return (
 <SafeAreaView  style={{flex:1,backgroundColor:"#fff"}}>
   <StatusBar barStyle="dark-content" backgroundColor={"#FFFFFF" } />
      <ScrollView
        onMomentumScrollEnd={(event) => { 
          if (isCloseToBottom(event.nativeEvent)) {
            LoadMoreRandomData()
          }
         }
       } contentContainerStyle={{ backgroundColor: "#fff",flex: 1 }}>
        <View style={{marginHorizontal:15}}>
          <View style={styles.inputbox}>
            <TextInput
              mode="outlined"
              placeholder="Search"
              style={styles.input}
               outlineColor={"#EBEBEB"}
                activeOutlineColor={"#EBEBEB"}
             onChangeText={(text) => {
                  searchFilterFunction(text);
                }}
              value={searchtext}
              left={<TextInput.Icon color="lightgray" name="account-search-outline" />}
            />

            <TouchableOpacity onPress={()=> ClearText()}>
              <Text style={styles.inputtext}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <View style={styles.box}>
                  <View style={styles.profilearea}>
                    <TouchableOpacity>
                      <Image source={item.image} style={styles.profile} />
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.profiletext}>{item.name}</Text>
                      <Text style={styles.profiletext1}>{item.state}</Text>
                    </View>
                    <View style={styles.icon1}>
                      <Image resizeMode="stretch" style={{height:15,width:15}} source={require("../Assets/verify.png")}/>
                      {/* <Check name={"checkcircle"} size={15} color="blue" /> */}
                    </View>
                    <View style={styles.icon2}>
                      <Image resizeMode="stretch" style={{height:15,width:15}} source={require("../Assets/medal.png")}/>
                      {/* <Star name={"star"} size={15} color="black" /> */}
                    </View>
                  </View>
                  <View style={styles.containericon}>
                    <View style={styles.innercontainer}>
                      <TouchableOpacity>
                        <AntDesign name={"filetext1"} size={25} color="black" />
                      </TouchableOpacity>
                      <Text style={styles.containertext}>24</Text>
                    </View>
                    <View style={styles.innercontainer}>
                      <TouchableOpacity>
                        <FontAwesome name={"photo"} size={25} color="black" />
                      </TouchableOpacity>
                      <Text style={styles.containertext}>51</Text>
                    </View>
                    <View style={styles.innercontainer}>
                      <TouchableOpacity>
                        <Feather name={"video"} size={25} color="black" />
                      </TouchableOpacity>
                      <Text style={styles.containertext}>14</Text>
                    </View>
                    <View style={styles.innercontainer}>
                      <TouchableOpacity>
                        <Feather name={"mic"} size={25} color="black" />
                      </TouchableOpacity>
                      <Text style={styles.containertext}>11</Text>
                    </View>
                  </View>
                  <View style={styles.textarea}>
                    <Text style={styles.boxtext}>
                      Lorem Ipsum has been the industry's many standard dummy
                      text ever since the 1500s, when an unknown printe.
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
          <View style={styles.bottom}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputbox: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  input: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    height: 54,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  inputtext: {
    height: 20,
    fontSize: 14,
    color: "#DBBE80",
    fontWeight: "400",
  },
  container: {
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  box: {
    marginTop: 20,
    height: 210,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 14,
    width: "100%",
    shadowColor: "#DBBE80",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  profilearea: {
    display: "flex",
    flexDirection: "row",
  },
  profile: {
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 50,
  },
  profiletext: {
    marginTop: 30,
    fontSize: 14,
    color: "#36596A",
    fontWeight: "400",
    marginLeft: 10,
    height: 20,
  },
  profiletext1: {
    fontSize: 12,
    color: "#A6A6A6",
    fontWeight: "400",
    marginLeft: 10,
    height: 20,
  },
  icon1: {
    marginTop: 32,
    marginLeft: 5,
  },
  icon2: {
    marginTop: 32,
    marginLeft: 5,
  },
  containericon: {
    // marginLeft: 20,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  innercontainer: {
    display: "flex",
    flexDirection: "row",
  },
  containertext: {
    marginLeft: 5,
    fontSize: 16,
    color: "#424242",
    fontWeight: "700",
  },
  textarea: {
    marginTop: 10,
    marginLeft: 20,
    width: "90%",
  },
  boxtext: {
    fontSize: 14,
    color: "#9B9C9F",
    fontWeight: "400",
    lineHeight: 20,
  },
  bottom: {
    marginTop: 40,
  },
});
export default Search;
