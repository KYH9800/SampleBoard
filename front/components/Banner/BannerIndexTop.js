import React from 'react';
import Link from 'next/link';
// styled-components
import { BannerImg } from '../../styles/components/Banners/BannerIndexTopSt';

// index top
const BannerIndexTop = () => {
  return (
    <>
      <div>
        <Link href="#">
          <BannerImg src="/images/1672012676554-zlcb31nraxd.png" />
        </Link>
      </div>
      <div>
        <Link href="#">
          <BannerImg src="/images/1672012681262-hs0lrry3puu.png" />
        </Link>
      </div>
    </>
  );
};

export default BannerIndexTop;
