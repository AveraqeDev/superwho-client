import config from '../config';

const HeroApiService = {
  searchForHero(term) {
    return fetch(`${config.API_URL}/heros/search/${term}`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  getById(id) {
    return fetch(`${config.API_URL}/heros/${id}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  }
};

export default HeroApiService;