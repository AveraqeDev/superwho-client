import config from '../config';

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },

  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },

  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  parseToken(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return {
        id: payload.id,
        username: payload.username
      };
    } catch (e) {
      return null;
    }
  }
}

export default TokenService;