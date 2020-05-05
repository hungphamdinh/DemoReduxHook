/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {excuteGroupStoreAPI} from '../../GetStoreItem/redux/thunk/index';
import {ScrollView} from 'react-native-gesture-handler';
const component = ({route, navigation}) => {
  const storeItem = useSelector(state => state.getStoreItemReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(excuteGroupStoreAPI(true));
    console.log(storeItem.data);
  }, [dispatch, storeItem.data]);

  return (
    <ScrollView>
      <View style={}>

      </View>
    </ScrollView>
  );
};

export default component;
