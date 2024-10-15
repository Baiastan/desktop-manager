import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Navbar from './features/navbar';

const Home = lazy(() => import('./pages/home/Home'));
const Practice = lazy(() => import('./pages/study-practice/Practice'));
const JobMarket = lazy(() => import('./pages/job-market/JobMarket'));

function App() {
  return (
    <div className="app">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/job-market" element={<JobMarket />} />
            </Routes>
          </Suspense>
        </Router>
      </LocalizationProvider>
    </div>
  );
}

export default App;
