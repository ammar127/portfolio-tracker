import { useState } from 'react';

const useFilter = () => {
  const [company, setCompany] = useState(null);
 
  return {
   company,
   setCompany
  };
};

export default useFilter;