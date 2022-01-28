import { useEffect, useState } from "react";
import { Container, Timer } from "./styles";
import {getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';
const defaultRemainingTime = {
  seconds: '00',
  minutes:'00',
  hours:'00',
  days:'00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
  
  useEffect(() => {
    const intervalId = setInterval(() =>{
        updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  },[countdownTimestampMs])

  function updateRemainingTime(countdown){
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return (
    <Container>
      <Timer>{remainingTime.days}</Timer>
      <Timer>days</Timer>
      <Timer>{remainingTime.hours}</Timer>
      <Timer>hours</Timer>
      <Timer>{remainingTime.minutes}</Timer>
      <Timer>minutes</Timer>
      <Timer>{remainingTime.seconds}</Timer>
      <Timer>seconds</Timer>
    </Container>
  );
}

export default CountdownTimer;