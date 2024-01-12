import { useTokenStore } from 'ocean_parent/store/useTokenStore';
import { useEffect, useState } from 'react';

import 'tailwindcss/tailwind.css';

export default function Home() {
  //NOTE - Local Storage
  const [localStorageToken, setLocalStorageToken] = useState('empty');
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setLocalStorageToken(storedToken !== null ? storedToken : 'empty');
  }, []);

  //NOTE - Zustand
  const { token } = useTokenStore();

  return (
    <div className='flex flex-col items-center justify-center'>
      <div>Home</div>
      <div>Tokens</div>
      <ul>
        <li>Local Storage: {localStorageToken}</li>
        <li>Zustand: {token}</li>
      </ul>
    </div>
  );
}
