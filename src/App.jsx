import React from 'react';
import './App.css'
import { useRoutes } from 'react-router-dom';
import { Button, message, Space } from 'antd';
import { UserProvider } from 'context/UserContext';
import routes from 'routes/index';
function App() {
  const routing = useRoutes(routes);
  // const [contextHolder] = message.useMessage();
  return (
    <UserProvider>
      {routing}
    </UserProvider>
  )
}

export default App
