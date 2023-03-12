import React, { useState } from 'react';
import Router from 'next/router';

// CKEditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// styled-components
import {
  LogoWrapper,
  Background,
  PageTilte,
  InputWrapper,
  PostTitleInput,
  Select,
  EditorWrapper,
  Button,
  ButtonWrapper,
} from '../../styles/components/Editor/EditorSt';

// 에디터 컴포넌트
const Editor = () => {
  const [Selected, setSelected] = useState('');
  console.log('Selected: ', Selected, Boolean(Selected));

  const onClickLogo = () => {
    if (confirm('글쓰기를 취소하고 뒤로가시겠습니까?')) {
      Router.back();
    }
  };

  const onClickGoToBack = () => {
    if (confirm('글쓰기를 취소하시겠습니까?')) {
      Router.back();
    }
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <Background>
        <PageTilte>글쓰기</PageTilte>

        <InputWrapper>
          <PostTitleInput type="text" placeholder="제목" />
          <Select value={Selected} onChange={handleSelect}>
            <option value="">카테고리</option>
            <option value="자유게시글">자유게시글</option>
            <option value="유머게시글">유머게시글</option>
            <option value="갤러리">갤러리</option>
            <option value="유튜브">유튜브</option>
            <option value="공지사항">공지사항</option>
          </Select>
        </InputWrapper>

        <EditorWrapper>
          <CKEditor
            editor={ClassicEditor}
            data="<p'>글을 작성해주세요.</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </EditorWrapper>

        <ButtonWrapper>
          <div>
            <Button onClick={onClickGoToBack}>취소</Button>
          </div>
          <div>
            <Button onClick={onClickSubmit}>등록하기</Button>
          </div>
        </ButtonWrapper>
      </Background>
    </>
  );
};

export default Editor;
