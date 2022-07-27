import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

export const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        throw new Error('저장된 데이터가 없습니다.');
      }
      const saveTodos = JSON.parse(rawTodos);
      return saveTodos;
    } catch (e) {
      throw new Error('불러오기에 실패했습니다.');
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('저장에 실패했습니다.');
    }
  },
};
