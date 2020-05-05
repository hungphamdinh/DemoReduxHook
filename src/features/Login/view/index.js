/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {ProgressDialog} from 'react-native-simple-dialogs';
import {useNetInfo} from '@react-native-community/netinfo';
import {styles} from './styleLogin';

const index = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const netInfo = useNetInfo();
  const onCheckInform = async (name, pass) => {
    setLoading(true);
    if (netInfo.isConnected === false) {
      Alert.alert('Không có kết nối mạng Internet');
      setLoading(false);
    } else {
      if (name === 'hungthao' && pass === '123') {
        navigation.replace('MenuFeature');
      } else {
        Alert.alert('Kiểm tra lại tên đăng nhập và mật khẩu');
      }
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../../assets/logo.jpg')}
        style={styles.imgLogo}
        resizeMode="contain"
      /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Tên đăng nhập..."
          placeholderTextColor="black"
          onChangeText={text => setUserName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Mật khẩu..."
          placeholderTextColor="black"
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => onCheckInform(username, password)}
        // onPress={check}
      >
        <Text style={styles.txtLogin}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
      <ProgressDialog
        title="Đăng nhập"
        activityIndicatorColor="blue"
        activityIndicatorSize="large"
        message="Vui lòng đợi trong giây lát"
        visible={loading}
      />
    </View>
  );
};

export default index;
