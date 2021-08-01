import React from 'react';

const Login = (props) => {
  const {
    handleSignin,
    handleSignUp,
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    hasAccount,
    setHasAccount,
  } = props;
  return (
    <main className='container'>
      <div className='login-container'>
        <h1 className='title'>{hasAccount ? 'Log In' : 'Sign Up'}</h1>
        <form>
          <label>Email</label>
          <input
            type='text'
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className='danger'>{emailError}</p>

          <label>Password</label>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='danger'>{passwordError}</p>

          {/* switch forms based on the user status */}
          <div className='btn-container'>
            {hasAccount ? (
              <>
                <button className='btn' onClick={handleSignin}>
                  Sign In
                </button>
                <p>
                  Don't have an account ?
                  <span
                    className='switch'
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className='btn' onClick={handleSignUp}>
                  Sign Up
                </button>
                <p>
                  Already have an account ?
                  <span
                    className='switch'
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Log In
                  </span>
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};
export default Login;
