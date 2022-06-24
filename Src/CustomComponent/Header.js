import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Search from 'react-native-vector-icons/AntDesign';

export default function Header(props) {
  return (
    <View style={{flexDirection:"row",}}>
      <View style={{width:"15%",}}>
       <MaterialCommunityIcons
            onPress={props.onPress}
            name={'keyboard-backspace'}
            size={40}
            color="#424242"
           />
      </View>
      <View style={{width:"75%",justifyContent:"center",alignItems:"center"}}>
         <Text style={{fontSize: 30,color: '#424242',fontWeight: '600'}}>{props.title}</Text>
      </View>
      <View style={{width:"10%",justifyContent:"center",alignItems:"center"}}>
        {props.search ? (           
           <Search name={'search1'} size={24} color="#424242" />
          )  : props.settings  ? (<Feather
            onPress={props.onPress2}
            name={'settings'}
            size={30}
            color="#424242"
           />) : null }
      </View>
    </View>
  )
}