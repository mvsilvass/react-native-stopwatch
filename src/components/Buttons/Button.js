import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const icons = {
  pause: require('@assets/pause.png'),
  play: require('@assets/play.png'),
  restart: require('@assets/restart.png'),
};

export default function Button({ icon, onPress }) {
  return (  
    <TouchableOpacity style={styles.button} onPress={onPress}>
       <Image source={icons[icon]}/>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        padding: '5%',
        backgroundColor: '#6A9C89',
        borderRadius: 10,
        justifyContent: 'center',
    },
});
  