import React from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/kho-ban-ghi');
  });

  return (
    <div className="home">
      <Sidebar />
      <div>lo con cac</div>
    </div>
  );
};

export default Home;
