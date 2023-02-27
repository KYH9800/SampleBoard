import React from 'react';
// styled-components
import { BannerTopWrapper, BannerTopImg } from '../../styles/components/Banners/BannerSideTopSt';

// side top
const BannerSideTop = () => {
  return (
    <BannerTopWrapper>
      <div>
        <BannerTopImg src="/images/1672012681262-hs0lrry3puu.png" />
      </div>
      <div>
        <BannerTopImg src="/images/1672012676554-zlcb31nraxd.png" />
      </div>
    </BannerTopWrapper>
  );
};

export default BannerSideTop;
