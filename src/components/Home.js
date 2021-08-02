import React, { useState } from 'react';
import Fire from '../Fire';

const Home = ({ handleLogout, loading }) => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const user = Fire.auth().currentUser;
  const userEmail = user.email;
  const userID = user.uid;
  return (
    <div className='home' style={{ textAlign: 'center' }}>
      <header>
        <div className='acc-info'>
          <h1>Account info</h1>
          <p className='id'>ID: {userID}</p>
          <p className='email'>Email: {userEmail}</p>
        </div>
        <button className='btn btn-logout' onClick={handleLogout}>
          Log out
        </button>
      </header>
      <h1>
        {!loading ? 'Logged in seccussfully!!!!! `:)`' : 'Logging out...'}
      </h1>
    </div>
  );
};

export default Home;
