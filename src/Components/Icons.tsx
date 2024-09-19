import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IcosProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IcosProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#F7CD2E" />;
      break;
    case 'cross':
      return <Icon name="times" size={38} color="#38CC77" />;
      break;
    default:
      return <Icon name="pencil" size={38} color="0D0D0D" />;
  }
};

export default Icons;
