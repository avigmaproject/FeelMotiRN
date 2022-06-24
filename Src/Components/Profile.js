import { View, Text, ScrollView ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from "../CustomComponent/Header"
import profile from '../Assets/profile.png';

export default function Profile({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff",}}>
      <ScrollView contentContainerStyle={{marginHorizontal:10}}>
      <View>
        <Header settings={true} onPress2 ={() => navigation.navigate("Setting")}title ={"Leslie Alexander"}/>
           <View>
                <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                  <View style={{width:"20%"}}>
                    <TouchableOpacity>
                    <Image resizeMode="contain" source={profile} style={{height:90,width:"100%"}} />
                  </TouchableOpacity>
                  </View>
                  <View style={{width:"75%"}}>
                      <Text style={{ fontSize: 15,
                      color: '#9B9C9F',
                      lineHeight: 22,}}>
                      Lorem Ipsum has been the to going industry's standard dummy text ever since the 1500s.</Text>
                  </View>
                </View>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}