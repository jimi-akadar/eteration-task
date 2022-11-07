import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageSourcePropType
} from 'react-native';
import React from 'react';
import {ListItem} from '../redux/app/listApi';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<{params: ListItem}>;
};

const DetailsScreen = ({route}: Props) => {
  const {avatar, name, job, description} = route.params;
  const imgSrc: ImageSourcePropType = {uri: avatar};
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image source={imgSrc} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{job}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    alignItems: 'center'
  },
  avatar: {width: 150, height: 250},
  name: {
    fontSize: 24,
    marginTop: 8,
    color: 'black'
  },
  job: {fontSize: 16, fontWeight: '500', color: 'gray'},
  desc: {fontSize: 14, color: 'gray', marginTop: 16}
});

export default DetailsScreen;
