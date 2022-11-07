import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StackHeader = (props: NativeStackHeaderProps) => {
  const {navigation, options} = props;
  const {title, headerBackTitle} = options;

  const onPressBackButton = (): void => navigation.goBack();

  return (
    <View style={styles.header}>
      {headerBackTitle && (
        <Pressable style={styles.backButton} onPress={onPressBackButton}>
          <MaterialIcons name="arrow-back-ios" size={20} color="#2E86DE" />
          <Text style={styles.backButtonText}>{headerBackTitle}</Text>
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  },
  backButton: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1
  },
  backButtonText: {color: '#2E86DE', marginLeft: -4, fontSize: 12}
});

export default StackHeader;
