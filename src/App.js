import React, { useState } from 'react';
import './App.css';


const commands = {
  kim: `Available commands:
- about
- experience
- projects
- contact
- themes
- clear

✨ Easter Eggs:
- anime
- pomsky
- pigeons
- tcg`,

  help: `Type "kim" to see available commands.`,

 about: `Hey! I’m Kim — a software engineering student at WGU and a full-time mom powered by caffeine and creativity. When I’m not coding or studying, I’m wrangling Pomskies, bingeing anime, or designing Pokémon keychains at Pokue.Designs. I love building things that feel good to use — just like this terminal! 🧠💻✨`,
 

  experience: `Software Engineering Student – WGU
Courses: Front-End Web Dev, Git, Python, Data Management

Epic Clinical IT Trainer – Centura Health (2016–2019)
- Led Epic EMR training for 4 hospitals
- Certified Super User: Hyperspace, Ambulatory

Mobile & Computer Specialist – Best Buy (2014)
- Provided technical support for Windows/macOS/iOS/Android`,

  projects: `Pokue.Designs – Custom Pokémon keychains, apparel, and TCG-inspired merch
GitHub: https://github.com/kimkue
Etsy: https://www.etsy.com/shop/pokuedesigns`,

  contact: `LinkedIn: https://www.linkedin.com/in/kimberlykue
GitHub: https://github.com/kimkue`,

  themes: `Available themes:
- cyberpunk
- sakura
- night-owl
- terminal-classic
- pastel
Use: theme [name] to change.`,

  clear: 'clear',

  anime: `Favorite Anime:
- Demon Slayer
- Jujutsu Kaisen
- Spy x Family
- Sailor Moon
- Attack on Titan`,

  pomsky: `🐾 Meet Mochi & Miso!
- Mochi: Orange Pomsky
- Miso: Tricolor Pomsky (Black, Brown, White)
Always nearby during coding sprints!`,

  pigeons: `🐦 Fun Fact: I love pigeons! I even included one in my portfolio art.`,

  tcg: `Top Pokémon TCG Cards:
- Charizard (Base Set)
- Umbreon VMAX (Alt Art)
- Pikachu Illustrator
- Mewtwo EX
- Gengar (Ghost Rare)`
};

function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  React.useEffect(() => {
    setHistory([
      '👋 Welcome to my portfolio!',
      'To display the available commands, type 👉 "kim" and press Enter.',
      'To validate each command, just hit Enter. Use Tab for autocompletion.'
    ]);
  }, []);
  
  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim();
      const output = commands[trimmed] || `Command not found: ${trimmed}`;
      if (output === 'clear') {
        setHistory([]);
      } else {
        setHistory([...history, `kimkue@portfolio:~$ ${trimmed}`, output]);
      }
      setInput('');
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="traffic-lights">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
      </div>
      <div className="terminal">
        {history.map((line, i) => (
          <div key={i} className="line">{line}</div>
        ))}
        <div className="input-line">
          <span className="prompt">kimkue@portfolio:~$ </span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
            className="input"
          />
        </div>
      </div>
    </div>
  );
}

export default App;