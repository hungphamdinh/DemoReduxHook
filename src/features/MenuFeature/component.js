import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './style';

const component = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.rowWithFlexStart}>
          <TouchableOpacity
            style={styles.btnChooseFunction}
            onPress={() => navigation.navigate('InsertItem')}>
            <Image
              source={require('../../resources/assets/iconclearcod.png')}
              style={styles.imageFunction}
              resizeMode="contain"
            />
            <Text style={styles.txtChooseFunction}>Thêm hàng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowWithFlexEnd}>
          <TouchableOpacity
            style={styles.btnChooseFunction}
            // onPress={() =>
            //   navigation.navigate('ShipperCred', {
            //     callBackParent: callBack,
            //     dataShipper: dataShipper,
            //   })
            // }
          >
            <Image
              source={require('../../resources/assets/iconfund.png')}
              style={styles.imageFunction}
              resizeMode="contain"
            />
            <Text style={styles.txtChooseFunction}>Cập nhật hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.rowWithFlexStartSecondary}>
          <TouchableOpacity
            style={styles.btnChooseFunction}
            // onPress={() =>
            //   navigation.navigate('Credibility', {
            //     callBackParent: callBack,
            //     dataShipper: dataShipper,
            //   })
            // }
          >
            <Image
              source={require('../../resources/assets/iconcredibility.png')}
              style={styles.imageFunction}
              resizeMode="contain"
            />
            <Text style={styles.txtChooseFunction}>Xóa hàng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowWithFlexEndSecondary} />
      </View>
    </View>
  );
};

export default component;
