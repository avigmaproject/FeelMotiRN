import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from "../CustomComponent/Header";

export default function Payment({navigation}) {
  return (
    <SafeAreaView>
    <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Payment"}
      />
      <Text>Payment</Text>
    </SafeAreaView>
  )
}