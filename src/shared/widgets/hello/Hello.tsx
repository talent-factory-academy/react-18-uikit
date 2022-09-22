import { useState } from 'react';

export default function Hello() {
  const [name, setName] = useState<string>('World')

  return <div>
    <div>Hello {name}</div>
    <button onClick={() => setName('Fabio')}>Change Name</button>
  </div>
}

