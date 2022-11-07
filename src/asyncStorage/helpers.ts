import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = (
  storageKey: string,
  value: object
): Promise<true | Error> => {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(storageKey, jsonValue);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

export const getData = (storageKey: string): Promise<object | Error> => {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey);
      resolve(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      reject(e);
    }
  });
};
