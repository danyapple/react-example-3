const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b405198055e3b57911480a01460cc35a';

const getRequest = (url) => {
  return fetch (url, { method: "GET" }, 
                     { Accept: "application/json, text/plain, */*"}
                ).then(res => res.json());
}

const discoverMovies = () => {
  return getRequest(`${API_URL}discover/movie?api_key=${API_KEY}`);
}

export {
  discoverMovies
};