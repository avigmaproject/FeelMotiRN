import * as React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Src/Navigation/AuthStack";
import Main from "./Src/Navigation/Main";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { persistor } from "./Src/store";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
function App() {
  const user = useSelector((state) => state.authReducer.loggedin);
  console.log(user);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f5f5f5" />
      {!user ? <AuthStack /> : <Main />}
    </NavigationContainer>
  );
}

export default AppWrapper;
