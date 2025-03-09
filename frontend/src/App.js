import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightList from './pages/FlightList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FlightList />} />
            </Routes>
        </Router>
    );
}

export default App;
