import { useState } from 'react'
import './styles/App.css'
import { useAuth } from './auth/authContext';

function App() {

  const auth = useAuth();
  console.log("Auth state in App.jsx:", auth);

  return (
    <>
    auth???

    </>
  )
}

export default App
