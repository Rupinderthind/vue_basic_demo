import axios from 'axios'
import {SIGNUP_API, LOGIN_API} from './apiConstants'
import store from '../store'

export const signUp = (data) => {
  return axios.post(SIGNUP_API, data).then(response => {
    return response.data
  })
}

export const login = (data) => {
  return axios.post(LOGIN_API, data).then(response => {
    if (response.data.status === 200) {
      localStorage.setItem('loginData', JSON.stringify(response.data.data))
      localStorage.setItem('token', response.data.access_token)
    }
    return response.data
  })
}

export const tempLogin = () => {
  localStorage.setItem('token', 'testtesttest')
}

export const logout = () => {
  localStorage.removeItem('loginData')
  localStorage.removeItem('token')
  store.commit('SET_TOKEN', '')
}

export const getAuthData = () => {
  let authData = localStorage.getItem('loginData')
  authData = JSON.parse(authData)
  store.commit('SET_USER_AUTH', authData)
  return authData
}

export const getAuthToken = () => {
  let authToken = localStorage.getItem('token')
  store.commit('SET_TOKEN', authToken)
  return authToken
}
