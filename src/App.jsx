import { useState } from 'react';
import './App.css';
import moo from './assets/moodeng.jpg';  
import farm from './assets/farm.jpg';  

function App() {
  const [level, setLevel] = useState(1);
  const [watermelon, setWatermelon] = useState(false);
  const [pumpkin, setPumpkin] = useState(false);
  const [grass, setGrass] = useState(false);

  const increaseLevel = () => {
    let increment = 1; 

    if (watermelon) increment = 5;
    else if (pumpkin) increment = 10;
    else if (grass) increment = 20;

    if (level + increment <= 100) {
      setLevel(level + increment);
    } else {
      setLevel(100);
    }
  };

  
  const resetGame = () => {
    setLevel(1);
    setWatermelon(false);
    setPumpkin(false);
    setGrass(false);
  };

  const imageSize = `${Math.min(100, level)}%`; 

  return (
    <div className="App">
      <h1>ให้อาหารหมูเด้ง</h1>

      <div className="animal-container">
        <img
          src={level >= 100 ? farm : moo}  
          alt="Your Animal or Farm"
          className="animal-image"
          style={{ width: imageSize, height: imageSize }}  
        />
      </div>

      <p>เลเวล{level}</p>

      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={watermelon}
            onChange={() => {
              setWatermelon(!watermelon);
              setPumpkin(false);
              setGrass(false);
            }}
          />
          แตงโม (+5 levels)
        </label>
        <label>
          <input
            type="checkbox"
            checked={pumpkin}
            onChange={() => {
              setPumpkin(!pumpkin);
              setWatermelon(false);
              setGrass(false);
            }}
          />
          ฟักทอง (+10 levels)
        </label>
        <label>
          <input
            type="checkbox"
            checked={grass}
            onChange={() => {
              setGrass(!grass);
              setWatermelon(false);
              setPumpkin(false);
            }}
          />
          หญ้า (+20 levels)
        </label>
      </div>

      
      <button onClick={increaseLevel}>ให้อาหาร</button>

      
      <button onClick={resetGame} style={{ marginTop: '20px', backgroundColor: '#f44336' }}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
