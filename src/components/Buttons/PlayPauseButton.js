import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const PlayPauseButton = ({ isTimer, startTimer, stopTimer }) => (
  <Button
    icon={!isTimer ? 'play' : 'pause'}
    onPress={isTimer ? stopTimer : startTimer}
  />
);

PlayPauseButton.propTypes = {
    isTimer: PropTypes.bool.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired
  };

export default PlayPauseButton;