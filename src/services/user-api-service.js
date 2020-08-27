import TokenService from './token-service';
import config from '../config';

const UserApiService = {
  getUserFavorites(id) {
    return fetch(`${config.API_URL}/users/${id}/favorites`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        );
  },

  addUserFavorite(userId, hero) {
    return fetch(`${config.API_URL}/users/${userId}/favorites`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ hero })
    })
      .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
          );
  },

  removeUserFavorite(userId, hero) {
    return fetch(`${config.API_URL}/users/${userId}/favorites`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ hero })
    })
      .then(res => 
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
          );
  },

  registerUser(user) {
    return fetch(`${config.API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
          );
  },

  loginUser({ username, password }) {
    return fetch(`${config.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
          );
  }
};

export default UserApiService;