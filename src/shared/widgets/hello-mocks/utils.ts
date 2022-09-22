import axios from 'axios';

export function loadConfig() {
  return {
    theme: 'dark',
    language: 'it'
  }
}

export function loadUsersAxios() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}
export function loadPostsFetch() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => res)
}
