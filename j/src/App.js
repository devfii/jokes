import './App.css';
import JokesData from './jokesData';
import Joke from './Jokes';

function App() {
  const JokeElements = JokesData.map(x => <Joke setup={x.setup} punchline={x.punchline} />);
  return JokeElements;
}

export default App;
