import "./App.css";
import { Topbar } from "./components/Topbar/Topbar";
import { MainPage } from "./MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Module } from "./Pages/Module";
import { selectCurrentModule } from "./features/sortSlice";
import { useSelector } from "react-redux";
const App = () => {
  const module = useSelector(selectCurrentModule);
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />

          <Route path="/module" element={<Module />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
