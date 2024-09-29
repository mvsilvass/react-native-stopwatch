import { Text, SafeAreaView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Metrics from '@utils/Metrics';

export default function Title({ title }) {
  return (
      <Text style={styles.title}> {title} </Text>
  );
}

Title.propTypes = {
    title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  title: {
    margin: '2%',
    color: '#16423C',
    fontWeight: 'bold',
    fontSize: Metrics.screenWidth * 0.135,
    textAlign: 'center',
  },
});