import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

export default function InputText(props) {
  return (
    <View style={{ marginTop: 10 }}>
      <TextInput
        mode="outlined"
        value={props.value}
        autoCapitalize="none"
        label={props.label}
        onChangeText={props.onChangeText}
        theme={{
          colors: {
            primary: "#9B9C9F",
            background: "#fff",
          },
          roundness: 5,
          borderColor: "#EBEBEB",
        }}
        right={props.right}
        secureTextEntry={props.secureTextEntry}
        editable={!props.editable}
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
    </View>
  );
}
