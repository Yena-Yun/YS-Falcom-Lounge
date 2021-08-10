import logo from "./logo.svg";
import "./App.css";
import goddesses from "./image/etc/ys-goddesses.jpg";
import twoshot from "./image/etc/ys8-adol-dana.jpg";
import falcom from "./image/header/logo-falcom.svg";
import nisa from "./image/header/logo-nisa.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={falcom} alt="" />
        <img src={nisa} alt="" />
      </div>

      <div className="section">
        <div className="introduction">
          <img src={goddesses} alt="" />
        </div>

        <p>
          <i>35-year Anniversary!</i>
        </p>

        <div className="button-block">
          <button className="history" type="submit">
            이스 히스토리
          </button>
          <button className="homepage" type="submit" onClick={() => window.open("https://play-ys.com/")}>
            이스 공식 홈페이지
          </button>
        </div>

        <div className="the-best-game">
          <img src={twoshot} alt="" />
        </div>

        <p>
          <i>The Best Game Ever</i>
        </p>

        <button className="ys8-homepage" type="submit" onClick={() => window.open("https://ysviii.com/index.html")}>
          이스 8 소개
        </button>
      </div>
    </div>
  );
}

export default App;
