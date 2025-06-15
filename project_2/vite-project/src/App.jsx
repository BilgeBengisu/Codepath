import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { front: "Health to your hands - Eline sağlık", back: "To thank someone for cooking" },
    { front: "If I spit downwards, it's a beard, if I spit upwards, it's a mustache - Aşağı tükürsem sakal, yukarı tükürsem bıyık ", back: "Being stuck in a pickle" },
    { front: "May they grow old with one pillow - Bir yastıkta kocasınlar", back: "To wish someone a lovely relationship that lasts a lifetime." },
    { front: "The bells on their hems are ringing - Etekleri zil çalıyor", back: "When somebody's too excited" },
    { front: "Chat of air and water - Havadan sudan konuşmak", back: "To chit-chat" },
    { front: "Fifty will come with a wave of your hand - Elini sallasan ellisi", back: "You have plenty more fish in the sea to date, don't be upset" },
    { front: "I'm about to lose the goats! - Keçileri kaçırmak üzereyim!", back: "When you can't handle it anymore" },
    { front: "The corner of my liver - Ciğerimin köşesi", back: "To refer to someone who is precious to you" },
    { front: "May the pear be cooked on the tree and fall into my mouth - Armut piş ağzıma düş", back: "About someone who is lazy and expects results without working." },
    { front: "It's good that you were born - İyi ki doğdun", back: "To wish happy birthday" },
    { front: "May it be easy for you - Kolay gelsin", back: "To acknowledge and thank someone's labor. For example, you would say this to someone on the street cleaning." },
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

  const nextCard = () => {
    if (deckIndex >= deck.length - 1) {
    // if all cards have been shown, shuffle the deck again
    const newDeck = shuffleIndices(cards.length);
    setDeck(newDeck);
    setDeckIndex(0);
    } else {
      setDeckIndex(deckIndex + 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> 🇹🇷 Turkish Sayings </h1>
      </header>
      <h3> Below are some Turkish sayings with their translation and context. <p></p>
        This is a fun tool to get to know some phrases that are common in Turkish culture! </h3>
      <h5> Click on the card to flip it and see the translation and context. </h5>
      <h5> Number of Cards: 10 </h5>
      <div className="container">
        <Card 
          key={deck[deckIndex]}
          {...cards[deck[deckIndex]]}
        />
        <button className="next-button" onClick={nextCard}>
          Next Card
        </button>
      </div>
    </div>
  );
}

export default App
