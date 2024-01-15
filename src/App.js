import { useState } from 'react';
import Main from './components/Main/main';
import MobileMenu from './components/MobileMenu/mobileMenu';
import Navbar from './components/Navbar/navbar';

function App() {
  const [closeMenu, setCloseMenu] = useState(true);

  const handleClick = () => {
    setCloseMenu((prevState) => !prevState);
  };

  return (
    <div className='App'>
      <Navbar openMenu={handleClick} />
      <Main />
      <MobileMenu menu={closeMenu} closeMenu={handleClick} />
    </div>
  );
}

export default App;
