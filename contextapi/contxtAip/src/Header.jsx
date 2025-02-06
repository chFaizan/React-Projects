import React, { useContext } from 'react'
import { UserContext } from './CreatingContext';

export default function Header() {
  
  const {username, login, logout} = useContext(UserContext);
  return (
  <>
  <header>
      {username ? (
        <>
          <p>Welcome, {username.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Faizan")}>Login</button>
      )}
    </header>

  </>
  )
}
