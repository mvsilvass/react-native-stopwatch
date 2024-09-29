import { SafeAreaView, View, StyleSheet } from 'react-native';
import { useContext } from 'react';

import Button from '../Buttons/Button';
import PlayPauseButton from '../Buttons/PlayPauseButton';
import { TimerContext } from '@contexts/TimerContext';

export default function TimerButtons() {
  const { startTimer, stopTimer, resetTimer, isTimer, hasStarted } = useContext(TimerContext);

  return (
    <SafeAreaView>
      <View style={styles.buttonsContainer}>
        <PlayPauseButton isTimer={isTimer} startTimer={startTimer} stopTimer={stopTimer} />
        {hasStarted && <Button icon="restart" onPress={resetTimer} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});