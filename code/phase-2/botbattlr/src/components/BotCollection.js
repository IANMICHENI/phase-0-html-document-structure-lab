import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ enlistedBots, setEnlistedBots }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const enlistBot = bot => {
    if (!enlistedBots.some(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} buttonText="Enlist" onButtonClick={() => enlistBot(bot)} />
      ))}
    </div>
  );
};

export default BotCollection;
