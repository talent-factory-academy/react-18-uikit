import { useState } from 'react';

export const initialState = ['Fabio', 'Mario', 'Lorenzo'];

export default function HelloList() {
  const [users,] = useState<string[]>(initialState)

  return <div data-testid="list">
    {
      users.map(u => <li role="list-item" key={u}>{u}</li>)
    }
  </div>
}

