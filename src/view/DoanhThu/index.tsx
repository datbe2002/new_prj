import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Sidebar from '@view/Home/Sidebar';

const Playlist = () => {
  const navigate = useNavigate();

  return (
    <div className="playboy">
      <Sidebar />
    </div>
  );
};

export default Playlist;
