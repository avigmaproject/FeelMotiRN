import {View,Text,TouchableOpacity,} from "react-native";
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {  setMenu} from "../store/action/profile/profile";
import { useSelector, useDispatch } from "react-redux";

export default function Menu({navigation}) {
  const dispatch = useDispatch();
  const showmenu = useSelector((state) => state.profileReducer.showmenu);
  const CallPost = () => {
  dispatch(setMenu(!showmenu));
  navigation.navigate("AddTab",{screen:"Addpost"})} 
  const CallStory = () => {
  dispatch(setMenu(!showmenu));
  navigation.navigate("AddTab",{screen:"AddStory"})} 

  return (
    <View style={{position:"absolute",backgroundColor:"#fff",bottom:0,zIndex:1,right:10,borderRadius:10,height:"13%",width:"35%",paddingHorizontal:10,borderColor:"rgba(0,0,0,0.1)",borderWidth:2}}>
        <TouchableOpacity onPress={()=> CallPost()  }          style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"50%",width:"100%",}}>
           <Text>Post</Text>
             <MaterialCommunityIcons
                          name={"table-large-plus"}
                          size={24}
                          color={"#000"}
                        />
           
        </TouchableOpacity>
         <TouchableOpacity onPress={()=>CallStory()} style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"50%",width:"100%",borderTopColor:"rgba(0,0,0,0.1)",borderTopWidth:2}}>
           <Text>Story</Text>
          <MaterialCommunityIcons
                          name={"clock-plus"}
                          size={24}
                          color={"#000"}
                        />
        </TouchableOpacity>
          </View>
  )
}