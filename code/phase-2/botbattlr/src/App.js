
import React, { useState } from 'react';
import BotCollection from './components/BotCollection'; 
import YourBotArmy from './components/YourBotArmy'; 
import './App.css';

const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
      <YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
    </div>
  );
};

export default App;
