import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { TimerContext } from './../../contexts/TimerContext';

import { useContext } from 'react';

export default function TimeDisplay() {
  const { timer } = useContext(TimerContext);

  const seconds = Math.floor(timer % 60);
  const minutes = Math.floor((timer / 60) % 60);
  const hours = Math.floor(timer / 3600);

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <SafeAreaView style={styles.timeDisplayContainer}>
      <Text style={styles.time}>
        {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  timeDisplayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#000',
  },
  time: {
    textAlign: 'center',
    padding: '10%',
    fontSize: 60,
    color: '#FFF',
  },
});