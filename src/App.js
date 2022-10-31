import "./App.css";
import Header from "./components/Header";
// import Main from "./components/Main";
// import Showcase from './components/Showcase';
// import Menu from "./components/Menu";
import Merchandise from "./components/Merchandise.js";
import merch from "./assets/merch-items.json";

// import {
//     BrowserRouter as Router,
//     Navigate,
//     Route,
//     Routes,
// } from 'react-router-dom';
// import './fonts/Atkinson-Hyperlegible-Regular-102.ttf';
// import './fonts/Atkinson-Hyperlegible-Bold-102.ttf';
// import './fonts/Atkinson-Hyperlegible-BoldItalic-102.ttf';
// import './fonts/Atkinson-Hyperlegible-Italic-102.ttf';

// `./assets/images/${item.img}`
function App() {
  const cards = merch.map((item) => (
    <Merchandise
      key={item.key}
      title={item.name}
      description={item.description}
      img={`/images/${item.img}`}
    />
  ));

  return (
    <div className="Merch">
      <h1 className="App-h1">Gifts</h1>
      <p className="App-p">Shop our specialty coffee and gifts</p>
      {cards}
    </div>
  );
}

export default App;

/*  <Router> 
                <Header />
  <Routes> 
                    {/ <Route path="/" element={<Main />} /> /}
                    {/ <Route path="/" element={<Showcase />} /> /}
                    {/ <Route path="/menu" element={<Menu />} /> /}

                    {/ <Route path="/about" element={<About />} />
          <Route path="/shopping" element={<Shop />} /> /}
                    {/ Components not made yet /}

                    {/ <Route path="" element={<Navigate to="/" />} />/}

                    {/* Wildcard - if a route is entered in URL with no set path, it will redirect to Main /}
                {/ </Routes>
            </Router>
        </div>
*/
