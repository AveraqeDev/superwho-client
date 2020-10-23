import { post } from "./utils";
import * as storage from '../util/localStorage';

export function login(username, password) {
    return post(`/auth/login`, { username, password }).then(res => {
        if(res.ok) {
            storage.login(res.authToken)
            return storage.getUser()
        } else {
            return Promise.reject(res.error)
        }
    })
}

export function getAuthenticatedUser() {
    const user = storage.getUser()
    return Promise.resolve(user)
}

export function logout() {
    storage.logout()
    return Promise.resolve()
}