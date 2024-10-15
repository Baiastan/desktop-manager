import React, { useCallback, useEffect, useRef, useState } from 'react';
import Emojie from './Emojie';
import './Emojie.css';

const emojis = [
  '🐵',
  '🐶',
  '🦊',
  '🐱',
  '🦁',
  '🐯',
  '🐴',
  '🦄',
  '🦓',
  '🦌',
  '🐮',
  '🐷',
  '🐭',
  '🐹',
  '🐻',
  '🐨',
  '🐼',
  '🐽',
  '🐸',
  '🐰',
  '🐙',
];

const getRandomEmojies = (size, matchCount) => {
  let res = [];
  const set = new Set();

  while (res.length < size * matchCount) {
    let randomIndex = Math.trunc(Math.random(0) * emojis.length);

    if (!set.has(randomIndex)) {
      for (let i = 0; i < matchCount; i++) {
        res.push(emojis[randomIndex]);
      }
      set.add(randomIndex);
    } else {
      continue;
    }
  }

  return res;
};

const shuffleEmojies = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const MemoryGame = ({
  matchCount = 2,
  delay = 2000,
  size = 8,
  rows = 4,
  cols = 4,
}) => {
  const totalCount = rows * cols;
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matches, setMatches] = useState(new Set());
  const [gameCompleted, setGameCompleted] = useState(false);

  const timeoutId = useRef();

  if (size > emojis.length) {
    return <div>Size cannot be bigger than emojie size</div>;
  }
  if (matchCount < 2) {
    throw new Error(`${matchCount} should be 2 or more`);
  }

  if (totalCount % matchCount !== 0) {
    throw new Error(
      `Cannot divide total cells of ${totalCount} by ${matchCount}`
    );
  }

  useEffect(() => {
    const res = getRandomEmojies(size, matchCount);
    setCards(shuffleEmojies(res));
  }, []);

  const handleClick = (index) => {
    if (flipped.includes(index)) {
      return;
    }

    let currFlipped = flipped;

    if (timeoutId.current != null) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
      currFlipped = [];
    }

    const newFlipped = [...currFlipped, index];

    setFlipped(newFlipped);

    if (newFlipped.length < matchCount) {
      return;
    }

    const allFlippedAreSame = newFlipped.every(
      (index) => cards[newFlipped[0]] === cards[index]
    );

    if (allFlippedAreSame) {
      const newMatchedSet = new Set(matches);
      newMatchedSet.add(cards[newFlipped[0]]);
      setMatches(newMatchedSet);
      setFlipped([]);

      if (newMatchedSet.size * matchCount === cards.length) {
        setGameCompleted(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setFlipped([]);
      timeoutId.current = null;
    }, delay);

    timeoutId.current = timer;
  };

  const restartGame = () => {
    timeoutId.current = null;
    const res = getRandomEmojies(size, matchCount);
    setCards(shuffleEmojies(res));
    setFlipped([]);
    setMatches(new Set());
    setGameCompleted(false);
  };

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${rows}, var(--size))`,
        gridTemplateColumns: `repeat(${cols}, var(--size))`,
      }}
    >
      {cards.map((item, index) => {
        const matched = matches.has(cards[index]);
        return (
          <Emojie
            emojie={item}
            key={`${item}-${index}`}
            onClick={handleClick}
            index={index}
            match={matched}
            active={flipped.includes(index)}
          />
        );
      })}
      {gameCompleted && <button onClick={restartGame}>Restart Game</button>}
    </div>
  );
};

export default MemoryGame;
