import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ghosts from './ghosts';

function App() {
  const [name, setName] = useState('');
  const [ghost, setGhost] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomGhost = ghosts[Math.floor(Math.random() * ghosts.length)];
    setGhost(randomGhost);
  };

  return (
    <>
      <div className="title">
          <h1>Check Khodam</h1>
      </div>
    
      <div className="form">
        <div className="card">
          <h2>{name}'s Khodam is</h2>
          {ghost && (
            <>
              <img src={ghost.img} alt={ghost.name} />
              <h2>{ghost.name}</h2>
              <p>{ghost.desc}</p>
            </>
          )}
        </div>

          <form onSubmit={handleSubmit} className="input">
            <input 
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              />
            <button type="submit">Check Khodam</button>
          </form>
      </div>

      <div className="footer">

        <div className="support">
            <a href="https://trakteer.id/superdidiyy/tip">
              <div className="trakteer">
                <img src="https://cdn.trakteer.id/images/embed/trbtn-icon.png" alt="" />
                <p>Support Developer 😋</p>
              </div>
            </a>
        </div>
        <div className="credit">
          <h3>Made with 🩸🪦☠️ by</h3>
          <a href='https://superdidiy.netlify.app/'>@Rahyudi</a>
        </div>
      </div>
    </>
  );
}

export default App;
