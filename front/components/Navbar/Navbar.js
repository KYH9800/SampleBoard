import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  // TODO

  return (
    <div>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
    </div>
  );
};

export default Navbar;
