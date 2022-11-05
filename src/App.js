import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import About from "./components/About";
import Plan from "./components/Plan";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/plan" element={<Plan />} />
          {/*<Route path="/shopping" element={<Shop />} /> */}
          {/* Components not made yet */}

          <Route path="*" element={<Navigate to="/" />} />

          {/* Wildcard - if a route is entered in URL with no set path, it will redirect to Main */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
