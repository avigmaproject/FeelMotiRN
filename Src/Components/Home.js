import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import moti from '../Assets/moti.png';
import bell from '../Assets/bell.png';
import profile from '../Assets/profile.png';
import user from '../Assets/user.png';
import body from '../Assets/body.jpeg';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DATA = [
  {
    image: require('../Assets/body.jpeg'),
    name: 'Ronald Richards',
    state: 'United States',
    likeCount: '22k',
    commentCount: '543',
  },
  {
    image: require('../Assets/body.jpeg'),
    name: 'Ronald Richards',
    state: 'United States',
    likeCount: '22k',
    commentCount: '543',
  },
];

const Home = ({navigation}) => {
  return (
   <SafeAreaView style={{flex:1}}>
 <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{backgroundColor: '##E5E5E5'}}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={moti} style={styles.moti} />
          </TouchableOpacity>
          <View style={styles.header1}>
            <TouchableOpacity>
              <Image source={bell} style={styles.bell} />
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                <Image source={profile} style={styles.profile} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View>
              <View style={styles.bar}>
                <View style={styles.bar1}>
                  <TouchableOpacity>
                    <Image source={user} style={styles.user} />
                  </TouchableOpacity>
                  <View style={styles.text}>
                    <TouchableOpacity>
                      <Text style={styles.text1}>Ronald Richards</Text>

                      <Text style={styles.text2}>United States</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.dot}>
                  <TouchableOpacity>
                    <Icon
                      name={'dots-three-vertical'}
                      size={24}
                      color="#BDBEC1"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.image}>
                <TouchableOpacity>
                  <Image
                    resizeMode="stretch"
                    source={body}
                    style={styles.image1}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.content}>
                <Text style={styles.content1}>
                  loreum ipsum hasd been the industry many stndard dummy text
                  ever since the 1500
                </Text>
                <View style={styles.icon}>
                  <View style={styles.icontext}>
                    <TouchableOpacity>
                      <Entypo
                        name={'heart'}
                        size={24}
                        color="red"
                        style={styles.like}
                      />
                    </TouchableOpacity>

                    <View>
                      <Text style={styles.liketext}>22k</Text>
                    </View>
                  </View>
                  <View style={styles.icontext}>
                    <TouchableOpacity>
                      <Feather
                        name={'message-circle'}
                        size={24}
                        color="#807C7D"
                        style={styles.comment}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.commenttext}>543</Text>
                    </View>
                  </View>
                  <View style={styles.icontext}>
                    <TouchableOpacity>
                      <AntDesign
                        name={'sharealt'}
                        size={24}
                        color="#898788"
                        style={styles.share}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.icontext}>
                    <TouchableOpacity>
                      <FontAwesome
                        name={'bookmark'}
                        size={24}
                        color="#898788"
                        style={styles.save}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
</SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    marginLeft: 20,
    width: '90%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  header1: {
    flexDirection: 'row',
  },
  moti: {
    width: 90,
    height: 45,
  },
  bell: {
    margin: 10,
    width: 20,
    height: 20,
  },
  profile: {
    marginHorizontal: 10,

    width: 40,
    height: 40,
  },
  bar: {
    padding: 5,
    marginTop: 20,
    marginLeft: 20,

    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bar1: {
    flexDirection: 'row',
  },
  user: {
    height: 44,
  },
  text: {
    marginLeft: 10,
  },
  text1: {
    fontSize: 14,
    height: 19,
    color: '#36596A',
    fontWeight: '400',
  },
  text2: {
    fontSize: 12,
    height: 16,
    color: '#A6A6A6',
    fontWeight: '400',
  },
  image: {
    width: '90%',
    marginLeft: 20,
    backgroundColor: 'green',
  },
  image1: {height: 200, width: '100%'},
  dot: {
    marginRight: 20,
    justifyContent: 'flex-end',
    width: 15,
    height: 30,
  },
  content: {
    width: '90%',
    marginLeft: 20,
    height: 109,
    elevation: 10,
    backgroundColor: '#FFFFFF',
  },
  content1: {
    margin: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#9B9C9F',
    lineHeight: 22,
  },
  like: {
    marginLeft: 20,
    height: 25,
  },
  liketext: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#231F20',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: {
    // backgroundColor: 'purple',
    height: 22,
    width: 25,
    // width: '150%',
  },
  icontext: {
    flexDirection: 'row',
  },
  save: {
    // backgroundColor: 'purple',
    marginRight: 20,
    height: 22,
    width: 20,
  },
  commenttext: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#231F20',
  },
  share: {
    marginRight: 50,
    // backgroundColor: 'purple',
  },
});

export default Home;
