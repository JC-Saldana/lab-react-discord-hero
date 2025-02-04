import discordLogo from "./assets/discord-logo-white.png"
import discordBackground from "./assets/discord-background.png"
import menuIcon from "./assets/menu-icon.png"
import './App.css';

function App() {
  return (
    <div>
      <div className='header'>
        <img src={discordLogo} alt="discord-logo" />
        <img src={menuIcon} alt="menu-icon" />
      </div>
      <div className='hero-section'>
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just your and a handful of friends can spend time together. A Place that makes it easy to talk every day and hang out more ofter.</p>
        <button>Download for Mac</button>
        <button>Open Discord in your browser</button>
        <img src={discordBackground} alt="menu-icon" />
      </div>
    </div>
  );
}

export default App;