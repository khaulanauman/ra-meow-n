import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import GamePage from "./pages/gamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
