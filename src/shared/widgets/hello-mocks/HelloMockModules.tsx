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
    <div>
      {
        users.map(u => <li role="user-item" key={u.id}>{u.name}</li>)
      }
    </div>
    <hr/>

    <div>
      {
        posts.map(u => <li role="post-item" key={u.id}>{u.title}</li>)
      }
    </div>
  </div>
}
