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

function Launcher({navigation}) {
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
