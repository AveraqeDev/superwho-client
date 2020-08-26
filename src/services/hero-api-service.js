import config from '../config';

const HeroApiService = {
  searchForHero(term) {
    return fetch(`${config.SUPER_API}/search/${term}`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  getById(id) {
    return fetch(`${config.SUPER_API}/${id}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  }
};

export default HeroApiService;