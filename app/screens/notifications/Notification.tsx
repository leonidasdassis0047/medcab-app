import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {RowContainer, Text} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import ContentDivider from '../../components/ContentDivider';
import MessageListing from '../../components/lists/MessageListing';

const Notification = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View style={styles.headerContainer}>
        <RowContainer style={{flex: 0, alignItems: 'center'}}>
          <Ionicons
            name="ios-arrow-back-sharp"
            size={20}
            color={colors.black}
          />
          <Text style={styles.headerText}>Notifications</Text>
        </RowContainer>
        <Text style={styles.clear}>Clear All</Text>
      </View>
      <ContentDivider style={{backgroundColor: '#EEE', marginBottom: 8}} />
      <View style={{flex: 1}}>
        <MessageListing />
        <MessageListing />
        <MessageListing />
        <MessageListing />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 4,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 4,
  },
  clear: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'flex-end',
    color: colors.primary,
  },
  messageContainer: {
    borderBottomWidth: 1,
    marginBottom: 2,
    borderBottomColor: '#EEE',
    height: 80,
    width: '100%',
    backgroundColor: '#FFF',
  },
});
