import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HabitTracking } from "./pages/habitTracking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HabitTracking />} />
      </Routes>
    </div>
  );
}

export default App;
