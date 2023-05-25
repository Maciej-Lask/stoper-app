import React from 'react';
import styles from './Timer.module.scss';

const Timer = (props) => {
  const formatTime = (time) => {
    const milliseconds = (time % 1000).toString().padStart(3, '0');
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, '0');
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, '0');

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className={styles.timerContainer}>
      <p className={styles.timer}>{formatTime(props.currentTime)}</p>
    </div>
  );
};

export default Timer;
