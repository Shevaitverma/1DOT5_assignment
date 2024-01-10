import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launch from './components/Launch';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Launch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
