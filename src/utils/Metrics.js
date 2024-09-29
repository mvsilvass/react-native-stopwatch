import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Metrics = {
  screenWidth: width,
  screenHeight: height,
};

export default Metrics;
