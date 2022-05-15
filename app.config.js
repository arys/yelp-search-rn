import 'dotenv/config';

export default {
  name: 'Restaurants App',
  version: '1.0.0',
  extra: {
    yelpApiKey: process.env.YELP_API_KEY,
  },
};
