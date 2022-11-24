import axios from 'axios';

const backend = axios.create({
  baseURL: import.meta.env.WELTENBUMMLERPAAR_FRONTEND_API_BASE_URL,
});

export default backend;
