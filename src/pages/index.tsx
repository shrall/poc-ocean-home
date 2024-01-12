import { useEffect, useState } from 'react';

import 'tailwindcss/tailwind.css';

export default function Home() {
  const [localStorageToken, setLocalStorageToken] = useState('empty');
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setLocalStorageToken(storedToken !== null ? storedToken : 'empty');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div>Home</div>
      <div>Tokens</div>
      <ul>
        <li>Local Storage: {localStorageToken}</li>
      </ul>
    </div>
  );
}
