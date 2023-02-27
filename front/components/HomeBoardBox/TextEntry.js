import React from 'react';
// styled-components
import { TextBoxWrapper, TextArticle, ImgSvgLogo, CustomLink } from '../../styles/components/HomeBoardBox/TextEntrySt';

const TextEntry = ({ data }) => {
  return (
    <TextBoxWrapper>
      <TextArticle>
        <div>
          <CustomLink href="#">{data.content}</CustomLink>
        </div>
        <div>
          <span>
            <ImgSvgLogo src="/images/imglogo.svg" alt="이미지로고" />
          </span>
        </div>
      </TextArticle>
      <div>12-26</div>
    </TextBoxWrapper>
  );
};

export default TextEntry;
