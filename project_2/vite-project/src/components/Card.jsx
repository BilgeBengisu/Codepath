import { useState } from 'react';
import './Card.css';

export default function Card({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-single" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">{front}</div>
        <div className="card-back">{back}</div>
      </div>
    </div>
  );
}
