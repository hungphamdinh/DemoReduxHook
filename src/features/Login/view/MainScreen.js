import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../../../config/actions';
import {View, Text, TouchableOpacity} from 'react-native';
const App = () => {
  const counter = useSelector(state => state.counter);
  const currentUser = useSelector(state => state.currentUser);

  const dispatch = useDispatch();

  const user = {name: 'Rei'};

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user));
  }, []);

  return (
    <View>
      {currentUser.loggedIn ? (
        <>
          <Text>Hello, {currentUser.user.name}</Text>
          <TouchableOpacity
            onPress={() => dispatch(allActions.userActions.logOut())}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>Login</Text>
          <TouchableOpacity
            onPress={() => dispatch(allActions.userActions.setUser(user))}>
            <Text>Login as Rei</Text>
          </TouchableOpacity>
        </>
      )}
      <Text>Counter: {counter}</Text>
      <TouchableOpacity
        onPress={() => dispatch(allActions.counterActions.increment())}>
        <Text>Increase Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(allActions.counterActions.decrement())}>
        <Text>Decrease Counter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
