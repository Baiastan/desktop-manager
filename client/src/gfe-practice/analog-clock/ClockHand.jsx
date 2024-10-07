import './AnalogClock.css';

const ClockHand = ({ height = 1, width = 1, angle, className }) => {
  return (
    <div
      aria-hidden={true}
      className={`clock-hand ${className}`}
      style={{
        transform: `rotate(${angle}deg) scaleY(${height}) scaleX(${width})`,
      }}
    />
  );
};

export default ClockHand;
