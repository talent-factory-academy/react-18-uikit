import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HelloMockAxios() {
  const [users, setUsers] = useState<any[]>([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, [])
  return <div>
    {
      users.map(u => <li role="listitem" key={u.id}>{u.name}</li>)
    }
  </div>
}

