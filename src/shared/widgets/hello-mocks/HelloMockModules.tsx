import { useEffect, useState } from 'react';
import { loadConfig, loadUsersAxios, loadPostsFetch } from './utils';

export default function HelloMockModules() {
  const [users, setUsers] = useState<any[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [config, setConfig] = useState<{ theme: string, language: string} | null>(null)

  useEffect(() => {
    setConfig(loadConfig)
    loadUsersAxios()
      .then(res => setUsers(res.data));
    loadPostsFetch()
      .then(res => setPosts(res));
  }, [])

  return <div>
    <div>Theme: { config?.theme }</div>
    <div>Language: { config?.language }</div>

    <hr/>
    <div data-testid="users-list">
      {
        users.map(u => <li key={u.id}>{u.name}</li>)
      }
    </div>
    <hr/>

    <div data-testid="posts-list">
      {
        posts.map(u => <li key={u.id}>{u.title}</li>)
      }
    </div>
  </div>
}
