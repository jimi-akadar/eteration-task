import React from 'react';
import {ParamListBase} from '@react-navigation/routers';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackHeaderProps
} from '@react-navigation/native-stack';
import StackHeader from './StackHeader';
// Screens
import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AddNewCharacterScreen from '../screens/AddNewCharacterScreen';

export type StackParamList = ParamListBase & {};

const Stack = createNativeStackNavigator<StackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  header: (props: NativeStackHeaderProps) => <StackHeader {...props} />
};

const listScreenOptions: NativeStackNavigationOptions = {title: 'Simpsons'};
const detailsScreenOptions: NativeStackNavigationOptions = {
  title: 'Details',
  headerBackTitle: 'Simpsons'
};
const newCharacterScreenOptions: NativeStackNavigationOptions = {
  title: 'Add New Character',
  headerBackTitle: 'Simpsons'
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListScreen"
      screenOptions={screenOptions}>
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={listScreenOptions}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={detailsScreenOptions}
      />

      <Stack.Screen
        name="AddNewCharacterScreen"
        component={AddNewCharacterScreen}
        options={newCharacterScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
