import { Text, SafeAreaView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Title({ title }) {
  return (
    <SafeAreaView>
      <Text style={styles.title}> {title} </Text>
    </SafeAreaView>
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
    fontSize: 60,
    textAlign: 'center',
  },
});