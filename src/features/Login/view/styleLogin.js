import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    marginBottom: 20,
    height: 120,
    width: '70%',
    marginHorizontal: 10,
    justifyContent: 'center',
  },

  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
    fontSize: 15,
  },
  btnLogin: {
    width: '80%',
    backgroundColor: '#F78C34',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  txtLogin: {
    color: 'white',
    fontSize: 20,
  },
});
