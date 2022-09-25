import { useState } from 'react';

export const initialState = ['Fabio', 'Mario', 'Lorenzo'];

export default function HelloList() {
  const [users,] = useState<string[]>(initialState)

  return <div data-testid="list">
    {
      // default role: role="listitem"
      users.map(u => <li key={u}>{u}</li>)
    }
  </div>
}

