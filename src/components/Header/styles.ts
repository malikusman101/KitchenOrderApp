import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent', 
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  headerLabel: {
    color: 'grey',
    fontSize: 16,
    textAlign: 'center',
  },
  headerValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#5771c2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
