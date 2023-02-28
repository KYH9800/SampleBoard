import React from 'react';
// styled-components
import styled from 'styled-components';

const PostPage = ({ data }) => {
  // console.log('PostPage data: ', data);

  return (
    <div>
      <Image src={data.src} />
      <Textarea>
        {data.content.split('\n').map((txt, idx) => {
          return (
            <div key={idx}>
              <ContentArea>{txt}</ContentArea>
              <br />
            </div>
          );
        })}
      </Textarea>
    </div>
  );
};

export default PostPage;

const Image = styled.img`
  width: 100%;
`;

const Textarea = styled.div`
  margin-top: 10px;
`;

const ContentArea = styled.p`
  margin: 0;
`;
