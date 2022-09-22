import axios from 'axios';

export function loadConfig() {
  return {
    theme: 'abc',
    language: 'xx'
  }
}

export function loadUsersAxios() {
  return Promise.resolve({
    data: [
      { id: 1, name: 'A'},
      { id: 2, name: 'B'}
    ]
  })
}
export function loadPostsFetch() {
  return Promise.resolve([
    { id: 1, title: 'A'},
    { id: 2, title: 'B'}
  ])
}
