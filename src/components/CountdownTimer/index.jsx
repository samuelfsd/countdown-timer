import { Container, Timer } from "./styles";

const CountdownTimer = () => {
  return (
    <Container>
      <Timer>30</Timer>
      <Timer>days</Timer>
      <Timer>12</Timer>
      <Timer>hours</Timer>
      <Timer>04</Timer>
      <Timer>minutes</Timer>
      <Timer>35</Timer>
      <Timer>seconds</Timer>
    </Container>
  );
}

export default CountdownTimer;