import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function WebViewPage(props,{navigation}) {
// console.log(`https://drive.google.com/viewerng/viewer?embedded=true&url=${props.route.params.url}`)
console.log(`${props.route.params.url}`)

  return (
    <View>
      <WebView 
        style={{width:100,height:100}}
          source={{  uri: "http://apifeelmoti.ikaart.org//UploadDocuments/637934963226839019_0.MOV"}} 
    />
    </View>
  )
}