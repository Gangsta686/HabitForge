import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const habits = [
    { id: 1, name: '🏃 Бегать 3 раза в неделю', stake: '500 ₽', days: '7/21' },
    { id: 2, name: '📚 Читать 30 минут в день', stake: '300 ₽', days: '14/30' },
    { id: 3, name: '💧 Пить 2 литра воды', stake: '200 ₽', days: '21/30' },
  ];

  const completeHabit = (id) => {
    alert(`Привычка ${id} выполнена! Деньги возвращены.`);
  };

  const failHabit = (id) => {
    alert(`Привычка ${id} провалена. Деньги пойдут на благотворительность.`);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Шапка */}
      <View style={styles.header}>
        <Text style={styles.title}>🔥 HabitForge</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Баланс:</Text>
          <Text style={styles.balance}>1,250 ₽</Text>
        </View>
      </View>

      {/* Статистика */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Активные</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>85%</Text>
          <Text style={styles.statLabel}>Успех</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>500 ₽</Text>
          <Text style={styles.statLabel}>Пожертвовано</Text>
        </View>
      </View>

      {/* Приветствие */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>Превратите слабости в силу! 💪</Text>
        <Text style={styles.welcomeText}>
          Ставьте деньги на свои привычки. Выполнили - деньги вернутся.
          Провалили - поможете другим!
        </Text>
      </View>

      {/* Список привычек */}
      <Text style={styles.sectionTitle}>Ваши привычки:</Text>
      
      {habits.map(habit => (
        <View key={habit.id} style={styles.habitCard}>
          <View style={styles.habitInfo}>
            <Text style={styles.habitName}>{habit.name}</Text>
            <View style={styles.habitDetails}>
              <Text style={styles.habitStake}>Ставка: {habit.stake}</Text>
              <Text style={styles.habitDays}>{habit.days} дней</Text>
            </View>
          </View>
          
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.failButton]}
              onPress={() => failHabit(habit.id)}
            >
              <Text style={styles.buttonText}>❌ Провал</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.successButton]}
              onPress={() => completeHabit(habit.id)}
            >
              <Text style={styles.buttonText}>✅ Выполнено</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Кнопка добавления */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Создать новую привычку</Text>
      </TouchableOpacity>

      {/* Футер */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💰 Уже перевели 12,500 ₽ на благотворительность
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
    backgroundColor: '#4CAF50',
    padding: 25,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginRight: 10,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: -30,
  },
  statCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  welcomeCard: {
    backgroundColor: '#2196F3',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
    color: '#333',
  },
  habitCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  habitInfo: {
    marginBottom: 15,
  },
  habitName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  habitDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  habitStake: {
    fontSize: 16,
    color: '#FF5722',
    fontWeight: 'bold',
  },
  habitDays: {
    fontSize: 14,
    color: '#666',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
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
    fontWeight: '600',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#FF5722',
    margin: 20,
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});