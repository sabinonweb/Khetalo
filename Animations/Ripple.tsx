import { View, Text, ViewStyle, StyleProp } from 'react-native';
import React, { ReactNode } from 'react';

interface RippleProps {
  style?: StyleProp<ViewStyle>;
  onTap?: () => void;
  children: ReactNode;
}

const Ripple: React.FC<RippleProps> = ({ onTap, children, style }) => {
  return (
    <View style={style}>
      {children}
    </View>
  );
}

export default Ripple;
