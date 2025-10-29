import React, { useState } from 'react';

import Welcome from './Components/Welcome/Welcome';
import TicTacToeGame from './Components/TicTacToeGame/TicTacToeGame';

function App() {
  const [showGame, setShowGame] = useState(false);

  const handleStart = () => {
    setShowGame(true);
  };

  return (
    <div>
      {showGame ? <TicTacToeGame /> : <Welcome onStart={handleStart} />}

    </div>
  );
}

export default App;
