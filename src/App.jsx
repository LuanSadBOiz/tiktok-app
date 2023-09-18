import Following from "./Pages/Following";
import Home from "./Pages/Home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/following" element={<Following />} />
            <Route></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
