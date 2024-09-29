import { SafeAreaView, StyleSheet } from 'react-native';

import TimeDisplay from './TimeDisplay';
import TimerButtons from './TimerButtons';

export default function TimerContainer() {
  return (
    <SafeAreaView style={styles.timerContainer}>
      <TimeDisplay />
      <TimerButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    marginHorizontal: '5%',
    gap: 10,
  },
});