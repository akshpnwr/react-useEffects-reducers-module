import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email && password) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isLoggedIn]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
