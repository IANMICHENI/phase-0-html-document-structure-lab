import React from 'react';

const BotCard = ({ bot, buttonText, onButtonClick }) => {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} className="bot-avatar img-fluid" />
      <h2>{name}</h2>
      <p>Class: {bot_class}</p>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Catchphrase: {catchphrase}</p>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

export default BotCard;
