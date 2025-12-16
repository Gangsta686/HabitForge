import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
  const [balance, setBalance] = useState(1000);
  const [habits, setHabits] = useState([
    { id: 1, name: 'Зарядка 15 мин', stake: 100, completed: false },
    { id: 2, name: 'Читать 30 мин', stake: 200, completed: true },
  ]);

  const completeHabit = (id) => {
    Alert.alert('Успех!', 'Привычка выполнена');
    const updated = habits.map(h => 
      h.id === id ? { ...h, completed: true } : h
    );
    setHabits(updated);
  };

  const failHabit = (id) => {
    Alert.alert('Провал', 'Деньги пойдут на благотворительность');
    const updated = habits.filter(h => h.id !== id);
    setHabits(updated);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HabitForge</Text>
        <View style={styles.balance}>
          <Icon name="wallet" size={20} color="#4CAF50" />
          <Text style={styles.balanceText}>{balance} ₽</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{habits.length}</Text>
          <Text style={styles.statLabel}>Активные</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {habits.filter(h => h.completed).length}
          </Text>
          <Text style={styles.statLabel}>Выполнено</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Ваши привычки:</Text>
      
      {habits.map(habit => (
        <View key={habit.id} style={styles.habitCard}>
          <View style={styles.habitInfo}>
            <Icon name="check-circle" size={24} color="#4CAF50" />
            <View style={styles.habitText}>
              <Text style={styles.habitName}>{habit.name}</Text>
              <Text style={styles.habitStake}>Ставка: {habit.stake} ₽</Text>
            </View>
          </View>
          
          <View style={styles.buttons}>
            <TouchableOpacity 
              style={[styles.button, styles.failButton]}
              onPress={() => failHabit(habit.id)}
            >
              <Text style={styles.buttonText}>Провал</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.successButton]}
              onPress={() => completeHabit(habit.id)}
            >
              <Text style={styles.buttonText}>Выполнено</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('Добавить')}
      >
        <Icon name="plus" size={24} color="white" />
        <Text style={styles.addButtonText}>Новая привычка</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 10,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
    marginLeft: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  habitCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  habitInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  habitText: {
    marginLeft: 10,
    flex: 1,
  },
  habitName: {
    fontSize: 16,
    fontWeight: '500',
  },
  habitStake: {
    fontSize: 14,
    color: '#FF5722',
    marginTop: 2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  failButton: {
    backgroundColor: '#FFEBEE',
    borderWidth: 1,
    borderColor: '#FFCDD2',
  },
  successButton: {
    backgroundColor: '#E8F5E9',
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  buttonText: {
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});