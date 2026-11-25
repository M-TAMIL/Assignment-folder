import heroImg from './assets/hero.png'
import PlayerCard from './components/PlayerCard'
import TeamHeader from './components/TeamHeader'
import './App.css'

function App() {
  return (
    <div className="App1">
      <TeamHeader teamName="CSK">
        <p>Welcome to our team!</p>
      </TeamHeader>

      <div className="player-cards">
        <PlayerCard
          playerImgSrc="/image/msd.jpg"
          playerImgAlt="MS Dhoni"
          name="DHONI"
          role="Wicketkeeper Batter"
          rank={1}
          salary={100000}
        />

        <PlayerCard
          playerImgSrc="/image/rutu.jpg"
          playerImgAlt="Ruturaj Gaikwad"
          name="RUTURAJ"
          role="Batter"
          rank={2}
          salary={90000}
        />

        <PlayerCard
          playerImgSrc="/image/jadega.jpg"
          playerImgAlt="Ravindra Jadeja"
          name="JADEJA"
          role="All-Rounder"
          rank={3}
          salary={85000}
        />

        <PlayerCard
          playerImgSrc="/image/pathi.jpg"
          playerImgAlt="Matheesha Pathirana"
          name="PATHIRANA"
          role="Bowler"
          rank={4}
          salary={75000}
        />

        <PlayerCard
          playerImgSrc="/image/dube.jpg"
          playerImgAlt="Shivam Dube"
          name="DUBE"
          role="All-Rounder"
          rank={5}
          salary={70000}
        />
      </div>
    </div>
  )
}

export default App