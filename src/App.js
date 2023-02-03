import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './layout/Page/Page';
import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import Success from './pages/Success/Success';
import Cancel from './pages/Cancel/Cancel';
import './styles/globals.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Page />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
