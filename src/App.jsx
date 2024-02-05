import React from 'react';
import './App.css'
import { useRoutes } from 'react-router-dom';
import { Button, message, Space } from 'antd';
import { UserProvider } from 'context/UserContext';
import { DateRangeProvider } from 'context/DateRangeContext';
import routes from 'routes/index';
function App() {
  const routing = useRoutes(routes);

  return (
    <UserProvider>
       <DateRangeProvider>
      {routing}
      </DateRangeProvider>
    </UserProvider>
  )
}

export default App
