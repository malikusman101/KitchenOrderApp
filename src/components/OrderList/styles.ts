import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  tableContainer: {
    marginBottom: 20,
    width: '100%',
  },
  orderContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default styles;
