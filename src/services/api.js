// URL BASE
// https://api.themoviedb.org/3/

// URL DA API
// https://api.themoviedb.org/3/movie/now_playing?api_key=6ad5e921680b9aa857c6fd1323650df7&language=pt-br

import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})