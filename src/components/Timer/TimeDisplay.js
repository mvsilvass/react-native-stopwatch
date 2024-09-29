import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { TimerContext } from '@contexts/TimerContext';
import Metrics from '@utils/Metrics';

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
    fontSize: Metrics.screenWidth * 0.125,
    color: '#FFF',
  },
});