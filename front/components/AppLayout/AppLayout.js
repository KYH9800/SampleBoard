import React from 'react';
import PropTypes from 'prop-types';
// components
import Navbar from '../Navbar/Navbar';

const AppLayout = ({ children }) => {
  // TODO...

  return (
    <>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
