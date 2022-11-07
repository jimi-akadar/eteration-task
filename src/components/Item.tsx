import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type {ListItem} from '../redux/app/listApi';

type Props = {
  item: ListItem;
  index: number;
  onPressUp: (idx: number) => void;
  onPressDown: (idx: number) => void;
  onPressDelete: (id: string) => void;
  onNavigate: (params: object) => void;
};

const Item = (props: Props) => {
  const {item, index} = props;
  const {id, name, avatar, job, description} = item;
  const imgSrc: ImageSourcePropType = {uri: avatar};

  const onPressUp = () => props.onPressUp(index);
  const onPressDown = () => props.onPressDown(index);
  const onPressDelete = () => props.onPressDelete(id);
  const onNavigate = () => props.onNavigate({name, avatar, job, description});

  return (
    <Pressable onPress={onNavigate} style={styles.item}>
      <View style={styles.itemSection}>
        <Text>{index + 1}</Text>
        <Image source={imgSrc} style={styles.avatar} resizeMode="contain" />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.itemSection}>
        <Pressable style={styles.actionButton} onPress={onPressUp}>
          <MaterialIcons name="arrow-circle-up" size={24} color="green" />
        </Pressable>
        <Pressable style={styles.actionButton} onPress={onPressDown}>
          <MaterialIcons name="arrow-circle-down" size={24} color="red" />
        </Pressable>
        <Pressable>
          <MaterialIcons
            name="delete-forever"
            size={24}
            onPress={onPressDelete}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  itemSection: {flexDirection: 'row', alignItems: 'center'},
  avatar: {width: 24, height: 36, marginLeft: 8},
  name: {marginLeft: 16},
  actionButton: {marginRight: 14}
});

export default Item;
