import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import home from '../Assets/home.png';
import * as Animatable from 'react-native-animatable';
import dynamicLinks from '@react-native-firebase/dynamic-links';

function Launcher({navigation}) {

const handleDynamicLink = link => {
console.log("===> link",link)
    // Handle dynamic link inside your own application
     navigation.navigate('ResetPassword', {link: link.url});

  };

  React.useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);
 React.useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link.url) {
      console.log("getInitialLink",link.url)
     navigation.navigate('ResetPassword', {link: link.url});
          // ...set initial route as offers screen
        }
      });
  }, []);
React.useEffect(() => {
 let timer = setTimeout(() => navigation.navigate('Signin'), 2000);
 return () => clearInterval(timer)
}, [])
  return (
    <View style={styles.container}>
    <Animatable.View animation="fadeInDownBig" easing="ease-out" >
      <Animatable.View animation="pulse" >
        <Image source={home} />
      </Animatable.View>
    </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor: '#DBBE80',
  },
  
});
export default Launcher;
