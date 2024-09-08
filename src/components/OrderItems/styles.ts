import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  quantity: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
  },
  productName: {
    flex: 4,
    fontSize: 20,
  },
});

export default styles;