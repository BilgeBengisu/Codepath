import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const cards = [
    { front: "Non ne ho idea", back: "I have no idea" },
    { front: "Mi è sfuggito di mente", back: "It slipped my mind" },
    { front: "Sfondi una porta aperta", back: "You break an open door.(I aggree a with you)" },
    { front: "Non sto più nella pelle", back: "I'm out of my skin (I can't wait!)" },
    { front: "L'hai presa sotto gamba", back: "You took it lightly. (You underestimated it)" },
    { front: "Mi scoppia la testa", back: "My head is exploding. (I have a strong headache)" },
    { front: "Ho divorato il libro", back: "I devoured the book(read it very quickly" },
    { front: "Non sono in vena di", back: "I'm not in the mood for..." },
    { front: "Non ci piove!", back: "It's not raining. (That's for sure)" },
    { front: "Non sta né in cielo né in terra!", back: "It is neither in heavon nor in hell. (That's absurd)" },
  ]
  
  // I want cards to be displayed random as well as not be rrepeated until all cards are shown.
  const shuffleIndices = (length) => {
  const indices = Array.from({ length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
  };

  const [deck, setDeck] = useState(shuffleIndices(cards.length));
  const [deckIndex, setDeckIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const currentCard = cards[deck[deckIndex]];
  const [attempted, setAttempted] = useState(false);
  const [flipped, setFlipped] = useState(false);


  const nextCard = () => {
    if (!attempted) {
      setFeedback('❗ Please try a guess before moving on.');
      return;
    }
    setUserInput('');
    setFeedback('');
    setAttempted(false);
    setFlipped(false);
    if (deckIndex >= deck.length - 1) {
    // if all cards have been shown, shuffle the deck again
    const newDeck = shuffleIndices(cards.length);
    setDeck(newDeck);
    setDeckIndex(0);
    } else {
      setDeckIndex(deckIndex + 1);
    }
  };
  const checkAnswer = () => {
  const trimmedInput = userInput.trim().toLowerCase();
  if (!trimmedInput) {
    setFeedback('❌ Please enter a guess.');
    return;
  }
  else{
    setAttempted(true); 
  }

  const inputWords = trimmedInput.split(/\s+/).filter(word => word); // remove empty strings
  const backText = currentCard.back.toLowerCase();

  const match = inputWords.some(word => backText.includes(word));
  setFeedback(match ? '✅ Correct!' : '❌ Try again.');
};
  return (
    <div className="App">
      <header className="App-header">
        <h1> 🇮🇹 Impariamo l'italiano! Let's learn Italian </h1>
      </header>
      <h3> Join me in learning italian. Below is a video to get familarity with conversational phrases in Italy<p></p>
        Go check them out and use the tool before to practice once finished! </h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ulcLoHH9WJ8" title="Italian Phrases" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h5> You can only see an answer after attempting. </h5>
      <h5> Number of Cards: 10 </h5>
      <div className="container">
        <Card
          key={deck[deckIndex]}
          front={currentCard.front}
          back={currentCard.back}
          flipped={flipped}
          setFlipped={setFlipped}
          attempted={attempted}
          setFeedback={setFeedback}
        />
        <input
          type="text"
          placeholder="Type your guess here"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="user-input"
        />

        <button className="check-button" onClick={checkAnswer}>
          Check Answer
        </button>

        {feedback && <p>{feedback}</p>}

        <button className="next-button" onClick={nextCard}>
          Next Card
        </button>
      </div>
    </div>
  );
}

export default App
