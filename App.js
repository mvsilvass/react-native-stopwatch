import { SafeAreaView, StyleSheet } from 'react-native';

import { TimerProvider } from '@contexts/TimerContext';

import Title from '@components/Title/Title';
import TimerContainer from '@components/Timer/TimerContainer';

export default function App() {
  return (
    <TimerProvider>
      <SafeAreaView style={styles.appContainer}>
        <Title title={'Cronômetro'} />
        <TimerContainer />
      </SafeAreaView>
    </TimerProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#E9EFEC',
    height: '100%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});