import './Card.css';

export default function Card({ front, back, flipped, setFlipped, attempted, setFeedback }) {
  const handleClick = () => {
    if (attempted) {
      setFlipped(!flipped);
    } else {
      setFeedback('❗ You need to try a guess before flipping the card.');
    }
  };

  return (
    <div className="card-single" onClick={handleClick}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">{front}</div>
        <div className="card-back">{back}</div>
      </div>
    </div>
  );
}
