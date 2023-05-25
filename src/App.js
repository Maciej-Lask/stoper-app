import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import styles from './App.module.scss';

const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setCurrentTime(0);
    setIsRunning(false);
  };

  return (
    <Container>
      <Timer currentTime={currentTime} />
      <div className={styles.buttonContainer}>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
      </div>
    </Container>
  );
};

export default App;
