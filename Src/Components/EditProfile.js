import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import back from "../Assets/back.png";
import InputText from "../CustomComponent/InputText";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Header from "../CustomComponent/Header";
import Button from "../CustomComponent/Button";

const EditProfile = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value1, setValue1] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    profession: "",
    language: "",
    dob: "",
    company: "",
    unitedstates: "",
    gender: "",
    city: "",
    address: "",
    postal: "",
  });
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const data = [
    { label: "English", value: "1" },
    { label: "Hindi", value: "2" },
    { label: "Franch", value: "3" },
  ];
  const data1 = [
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
    { label: "Can't determine", value: "3" },
  ];

  const handleOnChangeText = (value, fieldName) => {
    setForm({ ...form, [fieldName]: value });
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    console.log("dateaeatatag", typeof moment(date).format("LL"));
    setForm({ ...form, dob: moment(date).format("LL") });

    hideDatePicker();
  };
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "gray" }]}>
          Language
        </Text>
      );
    }
    return null;
  };
  const renderLabel1 = () => {
    if (value1 || isFocus1) {
      return (
        <Text style={[styles.label, isFocus && { color: "gray" }]}>Gender</Text>
      );
    }
    return null;
  };
  const {
    fullName,
    email,
    profession,
    username,
    dob,
    company,
    unitedstates,
    gender,
    city,
    address,
    postal,
  } = form;
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header
        onPress={() => navigation.navigate("Setting")}
        title={"Edit Profile"}
      />
      <ScrollView contentContainerStyle={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 20 }}>
          <View style={styles.textinput}>
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "fullName")}
              label={"Full name*"}
              value={fullName}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "username")}
              label={"User name*"}
              value={username}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "email")}
              label={"Email address"}
              value={email}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "profession")}
              label={"Profession/Ocupation"}
              value={profession}
            />
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus && { borderColor: "gray", borderWidth: 1.5 },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Language" : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  handleOnChangeText(item.value, "language");
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>

            <View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <InputText
                onChangeText={(value) => handleOnChangeText(value, "dob")}
                label={"Date of Birth"}
                value={dob}
                right={
                  <TextInput.Icon
                    name="calendar"
                    color={"#9B9C9F"}
                    onPress={() => showDatePicker()}
                  />
                }
                editable={true}
              />
            </View>
            <View style={styles.container}>
              {renderLabel1()}
              <Dropdown
                style={[
                  styles.dropdown,
                  isFocus1 && { borderColor: "gray", borderWidth: 1.5 },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data1}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus1 ? "Gender" : "..."}
                searchPlaceholder="Search..."
                value={value1}
                onFocus={() => setIsFocus1(true)}
                onBlur={() => setIsFocus1(false)}
                onChange={(item) => {
                  handleOnChangeText(item.value, "language");
                  setValue1(item.value);
                  setIsFocus1(false);
                }}
              />
            </View>
          </View>

          <View style={styles.heading2}>
            <Text style={styles.text2}>Billing Information</Text>
          </View>
          <View style={styles.textinput}>
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "company")}
              label={"Company"}
              value={company}
            />
            <InputText
              onChangeText={(value) =>
                handleOnChangeText(value, "unitedstates")
              }
              label={"United States"}
              value={unitedstates}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "city")}
              label={"City"}
              value={city}
            />

            <InputText
              onChangeText={(value) => handleOnChangeText(value, "address")}
              label={"Address"}
              value={address}
            />
            <InputText
              onChangeText={(value) => handleOnChangeText(value, "postal")}
              label={"Postal/ZIP"}
              value={postal}
            />
            {/* 
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Address"
            placeholder="Address"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Postal/ZIP"
            placeholder="Postal/ZIP"
          /> */}
          </View>
          <View>
            <Button title="Save Changes" />
          </View>
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
    width: "100%",
    height: 32,
    // backgroundColor: 'red',
  },

  textinput: {
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
  },

  heading2: {
    marginTop: 25,
    width: "90%",
    height: 32,
  },
  text2: {
    color: "#424242",
    fontSize: 24,
    // backgroundColor: '#FFFFFF',
    color: "#424242",
    fontWeight: "700",
  },
  container: {
    backgroundColor: "white",
    // padding: 16,
    marginTop: 10,
  },
  dropdown: {
    height: 55,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 8,
    top: -7,
    zIndex: 999,
    paddingHorizontal: 5,
    fontSize: 12,
    color: "gray",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default EditProfile;
