import React from 'react';
import './App.css'
import { useRoutes } from 'react-router-dom';
import { UserProvider } from 'services/UserContext';
import routes from 'routes/index';
function App() {
  const routing = useRoutes(routes);
  return (
    <UserProvider>
      {routing}
    </UserProvider>
  )
}

export default App
