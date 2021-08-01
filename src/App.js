import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Fire from './Fire';
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [user, setUser] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [loading, setLoading] = useState(false);

  // user authentication functions
  const handleSignin = (e) => {
    e.preventDefault();
    clearErrors();
    Fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    clearErrors();
    Fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Fire.auth().signOut();
    }, 2000);
  };

  // for checking if user exist
  const authUser = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authUser();
  }, []);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };
  console.log(user);

  return (
    <div className='App'>
      {!user ? (
        <Login
          handleSignin={handleSignin}
          handleSignUp={handleSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          emailError={emailError}
          passwordError={passwordError}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
        />
      ) : (
        <Home handleLogout={handleLogout} loading={loading} />
      )}
    </div>
  );
}

export default App;
