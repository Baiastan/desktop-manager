import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Home from './pages/home/Home';
import Practice from './pages/study-practice/Practice';
import Navbar from './features/navbar';

import BlockWrapper from './pages/study-practice/BlockWrapper';
import JobMarket from './pages/job-market/JobMarket';

function App() {
  return (
    <div className="app">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-patterns" element={<Practice />} />
            <Route path="/job-market" element={<JobMarket />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </div>
  );
}

export default App;
