import * as storage from '../util/localStorage'

const baseURL = 'https://superwho.herokuapp.com/api/'

export function get(path) {
    return fetch(`${baseURL}${path}`, { headers: { 'Authorization': `Bearer ${storage.getAuthToken()}` } }).then(res => res.json())
}

export function getRaw(path) {
    return fetch(`${baseURL}${path}`, { headers: { 'Authorization': `Bearer ${storage.getAuthToken()}` } })
}

export function post(path, data) {
    return fetch(`${baseURL}${path}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${storage.getAuthToken()}`,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

export function del(path, data) {
    return fetch(`${baseURL}${path}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${storage.getAuthToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}