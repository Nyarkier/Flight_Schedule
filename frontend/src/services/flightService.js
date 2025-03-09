import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/flights/';

export const getFlights = () => axios.get(API_URL);
export const createFlight = (flight) => axios.post(API_URL, flight);
export const updateFlight = (id, flight) => axios.put(`${API_URL}${id}/`, flight);
export const deleteFlight = (id) => axios.delete(`${API_URL}${id}/`);
