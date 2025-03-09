import { useEffect, useState } from 'react';
import { getFlights, deleteFlight } from '../services/flightService';

const FlightList = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = async () => {
        const response = await getFlights();
        setFlights(response.data);
    };

    const handleDelete = async (id) => {
        await deleteFlight(id);
        fetchFlights();
    };

    return (
        <div>
            <h2>Flight List</h2>
            <ul>
                {flights.map(flight => (
                    <li key={flight.id}>
                        {flight.flight_number} - {flight.origin} to {flight.destination}
                        <button onClick={() => handleDelete(flight.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightList;
