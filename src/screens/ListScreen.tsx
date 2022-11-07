import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  ListRenderItem
} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type {StackParamList} from '../navigations/StackNavigator';
import {useAppSelector, useAppDispatch} from '../redux/hooks';
import {moveUpItem, moveDownItem, deleteItem} from '../redux/app/listSlice';
import Item from '../components/Item';
import {ListItem} from '../redux/app/listApi';

const ListScreen = ({navigation}: NativeStackScreenProps<StackParamList>) => {
  const dispatch = useAppDispatch();
  const {itemList} = useAppSelector(state => state.list);

  const onPressUp = (idx: number): void => {
    if (idx !== 0) {
      dispatch(moveUpItem(idx));
    }
  };

  const onPressDown = (idx: number): void => {
    if (idx < itemList.length - 1) {
      dispatch(moveDownItem(idx));
    }
  };

  const onPressDelete = (id: string): void => dispatch(deleteItem(id));

  const onNavigate = (params: object): void =>
    navigation.push('DetailsScreen', params);

  const renderItem: ListRenderItem<ListItem> = ({item, index}) => (
    <Item
      item={item}
      index={index}
      onPressUp={onPressUp}
      onPressDown={onPressDown}
      onPressDelete={onPressDelete}
      onNavigate={onNavigate}
    />
  );

  const onNavigateToAddScreen = (): void =>
    navigation.push('AddNewCharacterScreen');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Pressable
          testID="navNewCharScreen"
          onPress={onNavigateToAddScreen}
          style={styles.addButton}>
          <MaterialIcons name="add" size={32} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  addButton: {
    position: 'absolute',
    bottom: 24,
    width: 48,
    height: 48,
    backgroundColor: '#2E86DE',
    borderRadius: 24,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ListScreen;
