import { useState } from 'react'
import { useEffect } from 'react';
import api from './requests/api'
import getById from './requests/GetById'

import './App.css'

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("Famoso/777?api_key=RGAPI-b0af6dc9-1934-4852-b619-28cf090a754b")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>Usuário: {user?.puuid}</p>
      <p>Biografia: {user?.gameName}</p>
    </div>
  );
}

