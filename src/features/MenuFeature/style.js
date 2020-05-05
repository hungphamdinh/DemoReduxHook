import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    marginVertical: 10,
    flexDirection: 'row',
    flex: 0.5,
  },
  rowWithFlexStart: {
    justifyContent: 'flex-end',
    flex: 0.5,
    alignItems: 'center',
  },
  rowWithFlexEnd: {
    justifyContent: 'flex-end',
    flex: 0.5,
    alignItems: 'center',
  },
  rowWithFlexStartSecondary: {
    justifyContent: 'flex-start',
    flex: 0.5,
    alignItems: 'center',
  },
  rowWithFlexEndSecondary: {
    justifyContent: 'flex-start',
    flex: 0.5,
    alignItems: 'center',
  },
  btnChooseFunction: {
    width: '80%',
    height: '50%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    shadowColor: 'rgba(0, 0, 0, 1)',
    elevation: 20,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  txtChooseFunction: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  imageFunction: {
    width: 30,
    height: 30,
  },
});
