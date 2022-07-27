import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RowContainer from '../RowContainer';
import Text from '../Text';
import colors from '../../config/colors';

const MessageListing = () => {
  return (
    <Pressable style={styles.container}>
      <RowContainer>
        <View style={styles.iconContainer}>
          <Ionicons name="ios-notifications-outline" size={18} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.mainText} numberOfLines={2}>
            With this in mind, Medcab Online Academy created the Blended
            Learning Design.
          </Text>
          <Text style={styles.subText}>Jul 24, 2022 at 12:08 PM</Text>
        </View>
        <View style={styles.dotContainer}>
          <View style={styles.dot} />
        </View>
      </RowContainer>
    </Pressable>
  );
};

export default MessageListing;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    marginBottom: 2,
    borderBottomColor: '#EEE',
    height: 80,
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 4,
  },
  mainText: {
    color: colors.text,
    fontSize: 15,
    marginBottom: 4,
  },
  subText: {
    color: colors.placeholder,
    fontSize: 13.2,
  },
  iconContainer: {padding: 8, alignItems: 'flex-start'},
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#F00',
    borderRadius: 10,
  },
  dotContainer: {padding: 4, alignItems: 'flex-start'},
});
