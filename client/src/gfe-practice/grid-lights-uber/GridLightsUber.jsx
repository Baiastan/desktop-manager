import React, { useEffect, useRef, useState } from 'react';

import './Grid.css';

const Grid = ({ id }) => {
  return <button id={id} data-grid-id={id} className="grid-item"></button>;
};

const GridLightsUber = () => {
  const [order, setOrder] = useState([]);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  const deactivateCells = () => {
    const intervalId = setInterval(() => {
      setOrder((prev) => {
        const copy = [...prev];
        const last = copy.pop();

        ref.current.children[last]?.classList.remove('activated');

        if (copy.length === 0) {
          clearInterval(intervalId);
          setStart(false);
        }

        return copy;
      });
    }, [300]);
  };

  const handleClick = (event) => {
    const tagName = event.target.tagName;
    const dataId = event.target.dataset?.gridId;

    if (start) return;

    if (order.includes(Number(dataId))) {
      return;
    }

    if (tagName === 'BUTTON' && dataId) {
      event.target.classList.add('activated');

      const newOrder = [...order, Number(dataId)];
      setOrder(newOrder);

      if (newOrder.length === 7) {
        setStart(true);

        deactivateCells();
      }
    }
  };

  return (
    <div>
      <div className="grid-container" onClick={handleClick} ref={ref}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Grid key={index} id={index} />
        ))}
        <button className="empty" disabled />
        <button className="empty1" disabled />
      </div>
      <pre>order array: {order.join(', ')}</pre>
    </div>
  );
};

export default GridLightsUber;
