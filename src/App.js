import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./components/Profile";
import Application from "./components/Application";

function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/application" element={<Application />}/>
            </Routes>
        </div>
      </Router>
  );
}

export default App;


