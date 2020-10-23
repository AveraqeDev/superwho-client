import { get } from './utils';

export function searchForHero(term) {
    return get(`/heros/search/${term}`)
        .then(res => {
            if(res.ok) {
                return res
            } else {
                return Promise.reject(res.error)
            }
        })
}

export function getById(id) {
    return fetch(`/heros/${id}`)
        .then(res => {
            if(res.ok) {
                return res
            } else {
                return Promise.reject(res.error)
            }
        })
}
