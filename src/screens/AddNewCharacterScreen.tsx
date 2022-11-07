import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable
} from 'react-native';
import React, {useState} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {StackParamList} from '../navigations/StackNavigator';
import {useAppDispatch} from '../redux/hooks';
import {addItem} from '../redux/app/listSlice';

const AddNewCharacterScreen = ({
  navigation
}: NativeStackScreenProps<StackParamList>) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const [about, setAbout] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const onChangeName = (val: string) => setName(val);
  const onChangeJob = (val: string) => setJob(val);
  const onChangeAbout = (val: string) => setAbout(val);
  const onChangeImage = (val: string) => setImage(val);

  const onAddItem = () => {
    dispatch(addItem({name, avatar: image, job, description: about, id: ''}));
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.label}>Name Surname:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={onChangeName}
        />
        <Text style={[styles.label, styles.labelAlt]}>Job Title:</Text>
        <TextInput
          style={styles.input}
          value={job}
          onChangeText={onChangeJob}
        />
        <Text style={[styles.label, styles.labelAlt]}>About Him/Her:</Text>
        <TextInput
          style={[styles.input, styles.inputAlt]}
          value={about}
          onChangeText={onChangeAbout}
        />
        <Text style={[styles.label, styles.labelAlt]}>Image Link:</Text>
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={onChangeImage}
        />
        <Pressable style={styles.addButton} onPress={onAddItem}>
          <Text style={styles.addButtonText}>Add Character</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  container: {flex: 1, paddingHorizontal: 16, paddingTop: 8},
  label: {fontWeight: '700'},
  labelAlt: {marginTop: 12},
  input: {
    height: 40,
    backgroundColor: 'white',
    marginTop: 2,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: 6
  },
  inputAlt: {height: 100},
  addButton: {
    height: 40,
    marginTop: 12,
    backgroundColor: '#2E86DE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  addButtonText: {color: 'white'}
});

export default AddNewCharacterScreen;
