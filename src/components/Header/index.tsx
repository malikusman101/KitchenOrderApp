import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; 
interface HeaderProps {
  deviceName: string;
  pendingOrdersCount: number;
  avgPendingOrder: number;
  maxPendingOrder: number;
  ordersInLast10Mins: number;
  onActionPress: () => void;
}

const Header: React.FC<HeaderProps> = ({
  deviceName,
  pendingOrdersCount,
  avgPendingOrder,
  maxPendingOrder,
  ordersInLast10Mins,
  onActionPress,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerItem}>
        <Text style={styles.headerLabel}>Device: <Text style={styles.headerValue}>{deviceName}</Text></Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.headerLabel}>Pending Orders: <Text style={styles.headerValue}>{pendingOrdersCount}</Text></Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.headerLabel}>Avg Pending: <Text style={styles.headerValue}>{avgPendingOrder}</Text></Text>
        <Text style={styles.headerLabel}>Max Pending: <Text style={styles.headerValue}>{maxPendingOrder}</Text></Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={styles.headerLabel}>15 min: <Text style={styles.headerValue}>{avgPendingOrder}</Text></Text>
        <Text style={styles.headerLabel}>30 min: <Text style={styles.headerValue}>{maxPendingOrder}</Text></Text>
      </View>
      <TouchableOpacity style={styles.actionButton} onPress={onActionPress}>
        <Text style={styles.buttonText}>Action</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
