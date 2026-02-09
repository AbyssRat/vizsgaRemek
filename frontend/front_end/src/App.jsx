import { useState } from 'react'
import './styles/App.css'
import { useAuth } from './auth/authContext';

function App() {
  const { user, login, logout, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  

  return (
    <>
      {/* <div style={{ padding: 20 }}>
      <h1>Auth test</h1>
 
      <pre>{JSON.stringify(user, null, 2)}</pre>
 
      {!user ? (
        <button onClick={login}>Fake login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div> */}

    </>
  )
}

export default App
