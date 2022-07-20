import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import Header from "../CustomComponent/Header";
import { SwipeListView } from "react-native-swipe-list-view";
import profile from "../Assets/profile.png";
import Icon from "../Assets/icondelete.png";

const Notifications = [
  {
    id: 1,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 2,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 3,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 4,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 5,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 6,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 7,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 8,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 9,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
  {
    id: 10,
    title: "Admin has sent you a Tip",
    details: "2 min ago",
  },
];

const Notification = ({ navigation }) => {
  const [listData, setListData] = useState(
    Notifications.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      details: NotificationItem.details,
    }))
  );
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const VisibleItem = (props) => {
    const { data } = props;
    return (
      <View style={styles.rowFront}>
        <TouchableHighlight styel={styles.rowFrontVisible}>
          <View style={styles.box}>
            <Image source={profile} style={styles.profile} />
            <View>
              <Text style={styles.title} numberOfLines={1}>
                {data.item.title}
              </Text>

              <Text style={styles.details} numberOfLines={1}>
                {data.item.details}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />;
  };
  const HiddenItemWithActions = (props) => {
    const { onClose, onDelete } = props;
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}
        >
          <Image source={Icon} style={styles.active} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };
  return (
    <SafeAreaView  style={{flex:1,backgroundColor:"#fff"}}>
   <StatusBar barStyle="dark-content" backgroundColor={"#FFFFFF" } />
      <Header
        onPress={() => navigation.navigate("Profile")}
        search={true}
         color={true}
        title={"Notification"}
      />
      <ScrollView contentContainerStyle={{ marginVertical: 20 }}>
        <View style={styles.container}>
          <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-100}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal:10,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(160, 166, 177, 0.1)",
    width: "100%",
    height: 84,
    marginBottom: 15,
    shadowColor: "#DBBE80",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "red",
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,

    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,

    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: "#1f65ff",
    right: 75,
  },
  backRightBtnRight: {
    right: 0,
    marginTop: 25,
    height: 30,
    marginRight: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  box: {
    display: "flex",
    flexDirection: "row",
  },
  profile: {
    margin: 10,
  },
  title: {
    fontSize: 14,
    color: "#36596A",
    marginTop: 20,
    fontWeight: "400",
    marginBottom: 5,
  },
  details: {
    fontSize: 12,
    fontWeight: "400",
    color: "#A0A6B1",
  },
});
export default Notification;
