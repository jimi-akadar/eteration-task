import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';
import {useAppDispatch} from './redux/hooks';
import {fetchList} from './redux/app/listSlice';

const Initializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Initializer;
