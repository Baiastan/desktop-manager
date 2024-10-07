import ClockHand from './ClockHand';

import './AnalogClock.css';

const FULL_ROTATION_DEGREES = 360;

const HOURS_ON_CLOCK = 12;
const MINUTES_ON_CLOCK = 60;

const hourLabels = (size) => {
  const labels = [];
  for (let i = HOURS_ON_CLOCK; i >= 1; i--) {
    const angle = (i / HOURS_ON_CLOCK) * FULL_ROTATION_DEGREES;
    labels.push(
      <div
        key={i}
        className="clock-label"
        style={{
          position: 'absolute',
          transform: `rotate(${angle + 89}deg) translate(${size / 2 - 25}px) rotate(${-angle + 90}deg)`,
          left: '47.5%',
          color: 'black',
          top: `55%`,
          transformOrigin: 'top center',
        }}
      >
        {i}
      </div>
    );
  }

  return labels;
};

const minuteLabels = (size) => {
  const labels = [];

  for (let i = 0; i <= MINUTES_ON_CLOCK; i++) {
    const angle = (i / MINUTES_ON_CLOCK) * FULL_ROTATION_DEGREES;
    labels.push(
      <div
        key={i}
        className="clock-label"
        style={{
          position: 'absolute',
          transform: `rotate(${angle + 88.3}deg) translate(${size / 2 - 10}px)`, // Translate and rotate to keep the labels upright
          left: '47.5%',
          color: 'grey',
          top: `45%`,
          transformOrigin: 'center',
        }}
      >
        {'-'}
      </div>
    );
  }
  return labels;
};

function padTwoDigit(number) {
  return number >= 10 ? String(number) : `0${number}`;
}

function ClockImpl({ hours, minutes, seconds, size }) {
  const secondsPercentage = seconds / 60;

  const minutesPercentage = (minutes + secondsPercentage) / 60;
  const hoursPercentage = ((hours % 12) + minutesPercentage) / 12;

  const hourAngle = hoursPercentage * FULL_ROTATION_DEGREES;
  const minutesAngle = minutesPercentage * FULL_ROTATION_DEGREES;
  const secondsAngle = secondsPercentage * FULL_ROTATION_DEGREES;

  const dateTimeDisplay = `${padTwoDigit(hours)}:${padTwoDigit(minutes)}:${padTwoDigit(seconds)}`;

  return (
    <time
      className="clock"
      dateTime={dateTimeDisplay}
      style={{ '--size': `${size}px` }}
    >
      <span className="center" />
      <ClockHand height={0.5} angle={hourAngle} className="hour" width={3} />
      <ClockHand
        height={0.9}
        angle={minutesAngle}
        width={2}
        className="minute"
      />
      <ClockHand height={0.8} angle={secondsAngle} className="second" />
      {hourLabels(size)}
      {minuteLabels(size)}
    </time>
  );
}

export default ClockImpl;
