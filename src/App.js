import "./App.css";
import { Topbar } from "./components/Topbar/Topbar";
import { MainPage } from "./MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProxyManagement } from "./Pages/ProxyManagement";
import { Workflows } from "./Pages/Workflows";
import { SystemStatus } from "./Pages/SystemStatus";
const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/ProxyManagement" element={<ProxyManagement />} />
          <Route path="/Workflows" element={<Workflows />} />
          <Route path="/SystemStatus" element={<SystemStatus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
