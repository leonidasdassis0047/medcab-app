import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  withDot?: boolean;
};
const Icon: React.FC<PressableProps & Props> = ({
  name,
  size = 20,
  color = '#090F47',
  style,
  withDot = false,
  ...props
}) => {
  return (
    <Pressable {...props} style={[styles.container, style]}>
      <Ionicons name={name} size={size} color={color} />
      {withDot && <View style={styles.dot} />}
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FAF8',
    height: 30,
    width: 30,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#F00',
    borderRadius: 10,
    position: 'absolute',
    top: -2,
    right: 4,
  },
});
