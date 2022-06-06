import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import Register from './routes/Register';
import Login from './routes/Login';
import EventStarting from './routes/EventStarting';
import Achievement from './routes/Achievement';
import Navigation from './routes/Navigation';

// import Event from './routes/Event';

function App() {
  return (
    < >
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/achievement" element={ <Achievement />} />
          {/* <Route path="/events/*" element={ <Event />} /> */}
          <Route path="/events" element={ <EventStarting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
