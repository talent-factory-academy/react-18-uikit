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
      // default <li> role is role="listitem"
      users.map(u => <li  key={u.id}>{u.name}</li>)
    }
  </div>
}

