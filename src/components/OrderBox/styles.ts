import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 420,
    padding: 2,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    borderRadius: 2,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    display: 'flex',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0', // Grey background
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  peopleCount: {
    marginLeft: 2,
    fontSize: 18,
    fontWeight: 'bold',
  },
  tableName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
    padding: 10
  },
  productsContainer: {
    margin: 20,
  },
  remainingTime: {
    position: 'absolute',
    bottom: 1,
    padding: 5,
    borderRadius: 5,
    width:'100%',
    alignItems:'flex-end',
  },
  remainingTimeGreen: {
    backgroundColor: 'green',
  },
  remainingTimeBlue: {
    backgroundColor: 'yellow',
    color: '#000',
  },
  remainingTimeRed: {
    backgroundColor: 'red',
    color: '#FFFFFF',
  },
  remainingTimeNA: {
    backgroundColor: '#aaa',
  },
});

export default styles;
