import React from 'react';
// styled-components
import styled from 'styled-components';

const MovieBox = ({ data }) => {
  // console.log('MovieBox data: ', data);

  return (
    <div>
      <Image src={data.src} />
    </div>
  );
};

export default MovieBox;

const Image = styled.img`
  width: 100%;
`;
