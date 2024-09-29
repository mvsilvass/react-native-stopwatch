import { SafeAreaView, StyleSheet } from 'react-native';

import Time from './TimeDisplay';
import TimerButtons from './TimerButtons';

export default function TimerContainer() {
  return (
    <SafeAreaView style={styles.timerContainer}>
      <Time />
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