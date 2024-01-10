import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<LaunchList />} />
          <Route path="/details" element={<LaunchDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
