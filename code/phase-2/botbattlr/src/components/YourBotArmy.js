import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ enlistedBots, setEnlistedBots }) => {
  const releaseBot = bot => {
    const updatedBots = enlistedBots.filter(enlistedBot => enlistedBot.id !== bot.id);
    setEnlistedBots(updatedBots);
  };

  const dischargeBot = bot => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedBots = enlistedBots.filter(enlistedBot => enlistedBot.id !== bot.id);
        setEnlistedBots(updatedBots);
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {enlistedBots.map(bot => (
        <BotCard key={bot.id} bot={bot} buttonText="Release" onButtonClick={() => releaseBot(bot)} />
      ))}
    </div>
  );
};

export default YourBotArmy;
