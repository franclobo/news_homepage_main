import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ResponsiveAppBar from "./components/navbar";
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
