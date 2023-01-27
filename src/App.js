import CharInfo from "./components/CharInfo";
import CharList from "./components/CharList";
import Header from "./components/Header";
import RandomChar from "./components/RandomChar";

import decoration from './resources/img/vision.png';


function App() {
  return (
    <div className="app">
      <Header />

      <main>

        <RandomChar />

        <div className="char__content">
          <CharList />
          <CharInfo />
        </div>

        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
}

export default App;
