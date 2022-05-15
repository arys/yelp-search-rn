import axios from 'axios'
import Constants from 'expo-constants';

const client = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${Constants.manifest.extra.yelpApiKey}`
  }
})

export const searchRestaurants = (text) => {
  return client.get('/businesses/search', {
    params: {
      term: text,
      latitude: '37.786882',
      longitude: '-122.399972',
      limit: 50
    },
  }).then((response) => response.data)
}

export const getDetails = (id) => {
  return client.get(`/businesses/${id}`)
    .then((response) => response.data)
}
