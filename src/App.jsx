import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Nav from "./components/Nav"
import Users from './pages/Users'

function App() {
  return (
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
          <Route path="/users/:username" element={<Users /> } />
          {/* <Route path="/users/:id" element={<Users /> } /> */}
        </Routes>
      </Router>
  );
}

export default App;
