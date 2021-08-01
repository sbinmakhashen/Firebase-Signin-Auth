import React from 'react';

const Home = ({ handleLogout, loading }) => {
  return (
    <div className='home' style={{ textAlign: 'center' }}>
      <button className='btn btn-logout' onClick={handleLogout}>
        Log out
      </button>
      <h1>
        {!loading ? 'Logged in seccussfully!!!!! `:)`' : 'Logging out...'}
      </h1>
    </div>
  );
};

export default Home;
