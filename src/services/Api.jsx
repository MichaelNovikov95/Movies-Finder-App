const axios = require('axios');

const API_KEY = '00dd4070e8ac273b1ac948e665ff59ec';
const STANDARD_PARAMS = 'https://api.themoviedb.org/3/';

export const Api = {
  trendingFetch: async () => {
    const response = await axios.get(
      `${STANDARD_PARAMS}trending/all/day?api_key=${API_KEY}`
    );
    const { results } = response.data;
    return results;
  },

  movieSearch: async searchQuery => {
    const response = await axios.get(
      `${STANDARD_PARAMS}search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    const { results } = response.data;
    return results;
  },

  movieDescription: async movieID => {
    const response = await axios.get(
      `${STANDARD_PARAMS}movie/${movieID}?api_key=${API_KEY}`
    );
    const data = response.data;
    return data;
  },

  movieActors: async movieID => {
    const response = await axios.get(
      `${STANDARD_PARAMS}movie/${movieID}/credits?api_key=${API_KEY}`
    );
    const { cast } = response.data;
    return cast;
  },

  movieReview: async movieID => {
    const response = await axios.get(
      `${STANDARD_PARAMS}movie/${movieID}/reviews?api_key=${API_KEY}`
    );
    const { results } = response.data;
    return results;
  },
};
