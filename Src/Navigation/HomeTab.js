import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Components/Home";
import EditProfile from "../Components/EditProfile";
import Profile from "../Components/Profile";
import Setting from "../Components/Setting";
import Wallet from "../Components/Wallet";
import Creator from "../Components/Creator";
import MySubscription from "../Components/MySubscription";
import Password from "../Components/Password";
import Explore from "../Components/Explore";
import PrivacySecurity from "../Components/PrivacySecurity";
import Payout from "../Components/Payout";
import Mycard from "../Components/Mycard";
import AddNewCard from "../Components/AddNewCard";
import Withdrawals from "../Components/Withdrawals";
import Payment from "../Components/Payment";
import Notification from "../Components/Notification";
import WebViewPage from "../Components/WebViewPage";
import Subscribe from "../Components/Subscribe";
import Message from "../Components/Message";
import Sponsor from "../Components/Sponsor";
import Tip from "../Components/Tip";
import Chat from "../Components/Chat";
import AddNewPost from "../Components/AddNewPost";

import * as React from "react";

const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Creator" component={Creator} />
      <Stack.Screen name="MySubscription" component={MySubscription} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="PrivacySecurity" component={PrivacySecurity} />
      <Stack.Screen name="Payout" component={Payout} />
      <Stack.Screen name="Mycard" component={Mycard} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
      <Stack.Screen name="Withdrawals" component={Withdrawals} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="WebViewPage" component={WebViewPage} />
      <Stack.Screen name="Subscribe" component={Subscribe} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Sponsor" component={Sponsor} />
      <Stack.Screen name="Tip" component={Tip} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="AddNewPost" component={AddNewPost} />
    </Stack.Navigator>
  );
}
