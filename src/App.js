import "./App.css";
import { Operations } from "./components/Operations/Operations";
import { Searchbar } from "./components/Search/Searchbar";
import { History } from "./components/History/History";
import { Topbar } from "./components/Topbar/Topbar";

import { SysConfigProjectManagement } from "./components/SysConfigProjectManagement/SysConfigProjectManagement";
const App = (props) => {
  return (
    <div className="App">
      <Topbar />
      <Searchbar />
      <div className="mainPage">
        <History />
        <hr></hr>
        <Operations />
        <SysConfigProjectManagement />
      </div>
    </div>
  );
};

export default App;
