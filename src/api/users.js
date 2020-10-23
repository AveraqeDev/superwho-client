import { get, post, del } from './utils';

export function registerUser(data) {
    return post(`/users/`, data)
}

export function getFavorites() {
    return get(`/users/favorites`)
        .then(res => {
            if(res.ok) {
                return res
            } else {
                return Promise.reject(res.error)
            }
        })
}

export function addFavorites(hero) {
    return post('/users/favorites', { hero })
        .then(res => {
            if(res.ok) {
                return res
            } else {
                return Promise.reject(res.error)
            }
        })
}

export function removeFavorite(hero) {
    return del('/users/favorites', { hero })
        .then(res => {
            if(res.ok) {
                return res
            } else {
                return Promise.reject(res.error)
            }
        })
}