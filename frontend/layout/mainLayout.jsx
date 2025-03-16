import React from 'react';
import NavBar from '../src/compenets/nav/navbar'

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
       <NavBar/>
      </header>

      <main>
        {children}
      </main>

      {/* <footer>
      </footer> */}
    </div>
  );
};

export default MainLayout;
