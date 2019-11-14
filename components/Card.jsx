import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  // with the style like that we can use key styles from the children props
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 9, // android only
    shadowColor: 'black', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowRadius: 6, // for iOS
    shadowOpacity: 0.26, // for iOS
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
