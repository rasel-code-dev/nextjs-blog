import React from 'react';
import { useRouter } from "next/router"

const DashboardPage = () => {
  
  const router = useRouter()
  
  console.log(router)
  
  return (
    <div>
      <h1>DashboardPage Page</h1>
    </div>
  );
};

export default DashboardPage;