import './App.css';
import {EventCard} from './components/EventCard';

const events = [
  { title: "Community Cleanup", date: "June 15", description: "Join us to clean up the local park." },
  { title: "Local Farmer's Market", date: "June 18", description: "Support local farmers and get fresh produce." },
  { title: "Yoga in the Park", date: "June 20", description: "Free yoga session open to all levels." },
  { title: "Art Walk", date: "June 21", description: "Explore local art and meet the artists." },
  { title: "Book Exchange", date: "June 22", description: "Bring a book, take a book!" },
  { title: "Live Music Night", date: "June 23", description: "Enjoy live music from local bands." },
  { title: "Coding for Kids", date: "June 24", description: "Fun intro to coding for children ages 8-12." },
  { title: "Community Potluck", date: "June 25", description: "Bring a dish and meet your neighbors." },
  { title: "Movie in the Park", date: "June 26", description: "Family-friendly movie under the stars." },
  { title: "Blood Donation Drive", date: "June 27", description: "Donate blood and help save lives." }
];

function App() {
  return (
    <div className="container">
      <h1>🌟 Community Events Calendar 🌟</h1>
      <div className="grid">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default App;
