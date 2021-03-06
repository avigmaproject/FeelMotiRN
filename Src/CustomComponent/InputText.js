import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

export default function InputText(props) {
  return (
    <View style={{ marginTop: 10 }}>
      <TextInput
        {...props}
        mode="outlined"
        value={props.value}
        autoCapitalize="none"
        label={props.label}
        onChangeText={props.onChangeText}
        outlineColor={"#9b9c9f"}
        // style={{ borderColor: "red" ,borderWidth:1}}
        theme={{
          colors: {
            primary: "#9b9c9f",
            background: "#fff",
            placeholder:"#9b9c9f"
          },
          roundness: 5,
        }}
        right={props.right}
        secureTextEntry={props.secureTextEntry}
        editable={!props.editable}
          underlineColor="transparent"   // add this

      />
      <Text
        style={{
          color: "#DBBE80",

          fontSize: 15,
          width: "90%",
          marginLeft: 20,
        }}
      >
        {props.error ? <Text>{props.error}</Text> : null}
      </Text>
        {props.error1 &&  (<Text
        style={{
          color: "#DBBE80",
          fontSize: 15,
          width: "90%",
          marginLeft: 20,
        }}
      >
        {props.error1}
      </Text>)}
    </View>
  );
}
