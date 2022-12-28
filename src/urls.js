import {API_KEY} from './Constants/Constants'

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentory = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
