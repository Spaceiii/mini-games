import './App.css'
import GameList from './components/GameList'
import GameCard from './components/GameCard'
import { games } from "./assets/data.json"

function App() {

  return (
    <div className="app">
      <h1>Mini games online</h1>
      <h2>All you need about games</h2>

      <GameList>
        {games.map((game, index) => (
          <GameCard key={index} name={game.name} description={game.description} />
        ))}
      </GameList>
    </div>
  )
}

export default App
