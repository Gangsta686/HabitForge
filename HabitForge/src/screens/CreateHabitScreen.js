import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreateHabitScreen({ navigation }) {
  const [habitName, setHabitName] = useState('');
  const [stake, setStake] = useState('100');

  const createHabit = () => {
    if (!habitName.trim()) {
      Alert.alert('Ошибка', 'Введите название привычки');
      return;
    }

    Alert.alert(
      'Привычка создана!',
      `Вы поставили ${stake} ₽ на привычку "${habitName}"`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Новая привычка</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Название привычки</Text>
        <TextInput
          style={styles.input}
          placeholder="Например: Бегать по утрам"
          value={habitName}
          onChangeText={setHabitName}
        />

        <Text style={styles.label}>Ставка (₽)</Text>
        <TextInput
          style={styles.input}
          placeholder="100"
          value={stake}
          onChangeText={setStake}
          keyboardType="numeric"
        />

        <View style={styles.amountButtons}>
          {['100', '200', '500', '1000'].map(amount => (
            <TouchableOpacity
              key={amount}
              style={styles.amountButton}
              onPress={() => setStake(amount)}
            >
              <Text style={styles.amountButtonText}>{amount} ₽</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Период выполнения</Text>
        <View style={styles.periodButtons}>
          <TouchableOpacity style={styles.periodButton}>
            <Text>7 дней</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.periodButton}>
            <Text>14 дней</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.periodButton}>
            <Text>21 день</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.periodButton}>
            <Text>30 дней</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.createButton} onPress={createHabit}>
          <Icon name="fire" size={24} color="white" />
          <Text style={styles.createButtonText}>
            Создать за {stake} ₽
          </Text>
        </TouchableOpacity>

        <Text style={styles.warning}>
          ⚠️ Если не выполните привычку, деньги будут переведены на благотворительность
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  amountButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  amountButton: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  amountButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  periodButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  periodButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  createButton: {
    backgroundColor: '#FF5722',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },
  warning: {
    textAlign: 'center',
    color: '#666',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#FFF3E0',
    borderRadius: 8,
    fontSize: 12,
  },
});