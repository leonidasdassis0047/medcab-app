import {Image, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {RowContainer, Text, ScreenWrapper} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import ContentDivider from '../../components/ContentDivider';
import MessageListing from '../../components/lists/MessageListing';
import Icon from '../../components/Icon';

const Notification = () => {
  return (
    <ScreenWrapper containerStyles={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />

      {/* header */}
      <View style={styles.headerContainer}>
        <RowContainer style={{flex: 1, alignItems: 'center'}}>
          <Icon
            name="ios-arrow-back-sharp"
            style={{backgroundColor: 'transparent'}}
            onPress={() => console.log('back')}
          />
        </RowContainer>
        <RowContainer style={{flex: 0, alignItems: 'center'}}>
          <Icon name="ios-notifications-outline" size={20} withDot />
          <Icon name="ios-basket-outline" size={20} style={{marginLeft: 8}} />
        </RowContainer>
      </View>
      <ContentDivider style={{backgroundColor: '#EEE', marginBottom: 8}} />

      {/* content */}
      <View style={{flex: 1, paddingHorizontal: 8}}>
        <Text style={styles.headerText}>Sugar Free Gold Low Calories</Text>
        <Text style={styles.subText}>Less sugar, better you</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require('../../config/assets/products/sugarfree.png')}
          />
        </View>
        {/* dots */}

        <RowContainer
          style={{
            flex: 0,
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <View>
            <Text>UGX 80000</Text>
            <Text style={{color: colors.placeholder}}>Less sugars</Text>
          </View>
          <RowContainer style={{flex: 0, alignItems: 'center'}}>
            <Icon
              name="ios-add"
              color={colors.primary}
              style={{backgroundColor: 'transparent', marginRight: 2}}
            />
            <Text style={{color: colors.primary}}>Add to Cart</Text>
          </RowContainer>
        </RowContainer>
        <ContentDivider />

        <View style={{paddingVertical: 8}}>
          <Text>Package size</Text>
          <View>
            <RowContainer style={{flex: 1}}>
              <View style={styles.productSize} />
              <View style={styles.productSize} />
              <View style={styles.productSize} />
            </RowContainer>
          </View>
          <Text>Product Details</Text>
          <Text style={{color: colors.placeholder}}>
            Sint id Lorem incididunt duis ex dolor. Excepteur consectetur veniam
            non amet ad occaecat non id ullamco nulla minim dolore officia aute.
            Veniam commodo consectetur commodo ut. Ullamco consequat nisi non
            esse laboris. Id sunt anim dolore eiusmod adipisicing et
            exercitation.
          </Text>
        </View>
      </View>
    </ScreenWrapper>
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
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 4,
  },
  subText: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 4,
    color: colors.placeholder,
  },
  imageContainer: {
    borderRadius: 4,
    height: 160,
    width: '100%',
    backgroundColor: colors.surface,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    height: '100%',
  },
  productSize: {
    height: 80,
    width: 80,
    borderRadius: 8,
    backgroundColor: colors.card,
  },
});
