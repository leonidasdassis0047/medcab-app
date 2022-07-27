import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Text from './Text';
import colors from '../config/colors';

interface ButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  text: string;
  textStyle?: StyleProp<TextStyle>;
}
const Button: React.FC<PressableProps & ButtonProps> = ({
  containerStyle,
  onPress,
  text,
  textStyle,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 17,
  },
});
