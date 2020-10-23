/**
 * Auth
 */

 const LOCAL_STORAGE_KEY_AUTH = 'superwho-auth'

 export function login(token) {
     localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, token)
 }

 export function logout() {
     localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, null)
 }

export function getUser() {
    try {
        const token = localStorage.getItem(LOCAL_STORAGE_KEY_AUTH)
        if(!token) return
        const payload = JSON.parse(atob(token.split('.')[1]));
        return {
            id: payload.id,
            username: payload.username
        };
    } catch (e) {
        return
    }
}

export function getAuthToken() {
    return localStorage.getItem.(LOCAL_STORAGE_KEY_AUTH)
}

/**
 * Favorites
 */

const LOCAL_STORAGE_KEY_FAVORITES = 'superwho-favorites'

export function updateFavorites(favorites) {
     localStorage.setItem(LOCAL_STORAGE_KEY_FAVORITES, JSON.stringify(favorites))
}

export function getFavorites() {
    try {
        const favorites = localStorage.getItem(LOCAL_STORAGE_KEY_FAVORITES)
        if(!favorites) return
        return JSON.parse(favorites)
    } catch(e) {
        return
    }
}