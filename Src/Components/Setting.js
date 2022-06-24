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
  Keyboard,
  ScrollView,
  Dimensions,
} from 'react-native';
import back from '../Assets/back.png';
import Search from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/Entypo';
import Edit from 'react-native-vector-icons/Feather';
import Credit from 'react-native-vector-icons/SimpleLineIcons';
import Star from 'react-native-vector-icons/EvilIcons';
import User from 'react-native-vector-icons/Feather';
import Lock from 'react-native-vector-icons/Feather';
import Shield from 'react-native-vector-icons/Ionicons';
const EditProfile = ({navigation}) => {
  return (
    <ScrollView
      style={{
        height: Dimensions.get('screen').height,
      }}>
      <View>
        <View style={styles.heading}>
          <View style={styles.back}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Image source={back} style={styles.back1} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Setting</Text>
          <TouchableOpacity>
            <Search name={'search1'} size={24} color="#424242" />
          </TouchableOpacity>
        </View>
        <View style={styles.heading1}>
          <View style={styles.subheading}>
            <Text style={styles.account}>Account</Text>
          </View>

          <View style={styles.box}>
            <TouchableOpacity>
              <View style={styles.boxcontent}>
                <Edit name={'edit'} size={24} color="#DBBE80" />
                <Text style={styles.edit}>Edit Profile</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box1}>
            <TouchableOpacity>
              <View style={styles.boxcontent1}>
                <Credit name={'credit-card'} size={24} color="#DBBE80" />
                <Text style={styles.wallet}>Wallet</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box2}>
            <TouchableOpacity>
              <View style={styles.boxcontent2}>
                <Star name={'star'} size={24} color="#DBBE80" />
                <Text style={styles.creator}>Be A Creator!</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.heading2}>
          <View style={styles.subheading2}>
            <Text style={styles.account}>Subscription</Text>
          </View>

          <View style={styles.boxB}>
            <TouchableOpacity>
              <View style={styles.boxcontentB}>
                <User name={'user-check'} size={24} color="#DBBE80" />
                <Text style={styles.subscription}>My Subscription</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.heading2}>
          <View style={styles.subheading2}>
            <Text style={styles.account}>Privacy And Security </Text>
          </View>

          <View style={styles.boxB}>
            <TouchableOpacity>
              <View style={styles.boxcontentB}>
                <Shield
                  name={'shield-checkmark-outline'}
                  size={24}
                  color="#DBBE80"
                />
                <Text style={styles.privacy}>Privacy And Security</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.boxC}>
            <TouchableOpacity>
              <View style={styles.boxcontentC}>
                <Lock name={'lock'} size={24} color="#DBBE80" />
                <Text style={styles.password}>Password</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.heading3}>
          <View style={styles.subheading2}>
            <Text style={styles.account}>Payments</Text>
          </View>

          <View style={styles.box}>
            <TouchableOpacity>
              <View style={styles.boxcontent}>
                <Edit name={'edit'} size={24} color="#DBBE80" />
                <Text style={styles.edit}>Payments</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box1}>
            <TouchableOpacity>
              <View style={styles.boxcontent1}>
                <Credit name={'credit-card'} size={24} color="#DBBE80" />
                <Text style={styles.card}>My Cards</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box2}>
            <TouchableOpacity>
              <View style={styles.boxcontent2}>
                <Star name={'star'} size={24} color="#DBBE80" />
                <Text style={styles.payout}>Payout Method</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.box2}>
            <TouchableOpacity>
              <View style={styles.boxcontent2}>
                <Star name={'star'} size={24} color="#DBBE80" />
                <Text style={styles.withdraw}>Withdrawals</Text>
                <Right name={'chevron-small-right'} size={24} color="#A0A6B1" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 15,
    width: '90%',
    height: 32,
    // backgroundColor: 'red',
  },

  text: {
    color: '#424242',
    fontSize: 24,
    // backgroundColor: 'red',
    color: '#424242',
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },
  heading1: {
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: '#FFF7E4',
    borderRadius: 4,
  },
  subheading: {
    marginLeft: 25,
  },
  account: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 18,
    color: '#424242',
  },
  box: {
    marginTop: 10,
    height: 55,
    width: '90%',
    borderWidth: 1,
    borderColor: '#00000',
    // opacity: 0.05,
    marginLeft: 20,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontent: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 100,
    // backgroundColor: 'red',
  },
  box1: {
    // marginTop: 10,
    height: 55,
    width: '90%',
    borderWidth: 1,
    borderColor: '#00000',
    // opacity: 0.05,
    marginLeft: 20,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontent1: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wallet: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 130,
  },
  box2: {
    // marginTop: 10,
    height: 55,
    width: '90%',
    borderWidth: 1,
    borderColor: '#00000',
    // opacity: 0.05,
    marginLeft: 20,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontent2: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  creator: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 80,
  },
  heading2: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: '#FFF7E4',
    borderRadius: 4,
  },
  subheading2: {
    marginLeft: 25,
  },
  account: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 18,
    color: '#424242',
  },
  boxB: {
    marginTop: 10,
    height: 55,
    width: '90%',
    borderWidth: 1,
    borderColor: '#00000',
    // opacity: 0.05,
    marginLeft: 20,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontentB: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subscription: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 60,
  },
  boxC: {
    // marginTop: 20,
    height: 55,
    width: '90%',
    borderWidth: 1,
    borderColor: '#00000',
    // opacity: 0.05,
    marginLeft: 20,
    // margin: 15,

    // backgroundColor: 'red',
  },
  boxcontentC: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  privacy: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 40,
  },
  password: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 110,
  },
  heading3: {
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    width: '90%',
    borderWidth: 1,
    borderColor: '#FFF7E4',
    borderRadius: 4,
  },
  card: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 100,
  },
  payout: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 60,
  },
  withdraw: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 16,
    color: '#424242',
    marginRight: 80,
  },
});
export default EditProfile;
