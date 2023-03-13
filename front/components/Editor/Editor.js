import React, { useEffect, useState } from 'react';
import Router from 'next/router';

// CKEditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// custom hooks
import useInput from '../../customHooks/useInput';

// html-react-parser
import HTMLReactParser from 'html-react-parser';

// styled-components
import {
  // LogoWrapper,
  Background,
  PageTilte,
  InputWrapper,
  PostTitleInput,
  Select,
  EditorWrapper,
  Button,
  ButtonWrapper,
} from '../../styles/components/Editor/EditorSt';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../../reducers/post';

// 에디터 toolbar plugin
const toolbarPlugin = [
  'Paragraph',
  'Essentials',
  'CKFinderUploadAdapter',
  'Autoformat',
  'CKBox',
  'CloudServices',
  'EasyImage',
  'Image',
  'ImageCaption',
  'ImageStyle',
  'ImageToolbar',
  'ImageUpload',
  'MediaEmbed',
  'PasteFromOffice',
  'PictureEditing',
  'Table',
  'TableToolbar',
  'TextTransformation',
  'Image',
  // 'PictureEditing',
  // 'MediaEmbed',
  // 'BlockQuote',
  // 'CKFinder',
  // 'Indent',
  // 'Link',
  // 'List',
  // 'Paragraph',
];

// 에디터 컴포넌트
const Editor = () => {
  const dispatch = useDispatch();

  const [title, onChangeTitle, setTitle] = useInput(''); // setText('') 요청이가면 비운다.

  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValues] = useState('');

  const { imagePaths, mainPosts } = useSelector((state) => state.post);
  console.log('imagePaths in editor: ', imagePaths);
  console.log('mainPosts in editor: ', mainPosts);

  useEffect(() => {
    console.log('mainPosts: ', mainPosts);
  }, [mainPosts]);

  const onClickGoToBack = () => {
    if (confirm('글쓰기를 취소하시겠습니까?')) {
      Router.back();
    }
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    const formData = new FormData();
    imagePaths.forEach((src) => {
      formData.append('image', src);
    });
    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);

    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  };

  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  const customUploadAdapter = (loader) => {
    const formData = new FormData();

    return {
      upload() {
        return new Promise((resolve, reject) => {
          loader.file.then((file) => {
            console.log('file: ', file);
            formData.append('image', file);

            dispatch({
              type: UPLOAD_IMAGES_REQUEST,
              data: formData,
            });
          });
        });
      },
    };
  };

  const uploadPlugin = (editor) => {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  };

  // editor plugin name
  // ClassicEditor.builtinPlugins.map((plugin) => console.log('plugin.pluginName: ', plugin.pluginName));
  return (
    <>
      <Background>
        <PageTilte>글쓰기</PageTilte>

        <InputWrapper>
          <PostTitleInput type="text" placeholder="제목" value={title} onChange={onChangeTitle} />
          <Select value={category} onChange={handleSelect}>
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
            config={{
              extraPlugins: [uploadPlugin],
              toolbar: toolbarPlugin,
            }}
            data="<p'>글을 작성해주세요.</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              // console.log({ event, editor, data });
              const data = editor.getData();
              console.log('data: ', data.indexOf('img'));

              const idx = data.indexOf('img');
              console.log('idx: ', idx);

              const newData = data.slice(idx, idx + 3);
              console.log('newData: ', newData);
              console.log('imagePaths: ', imagePaths);

              //* 여기서 이미지 태그에 src를 갈아끼워주면 끝난다.
              const test = data.replace(newData, `img src=${imagePaths[0]} alt='이미지'/`);

              setContent(test);
            }}
            onBlur={(event, editor) => {
              const data = editor.getData();
              console.log('data: ', data.indexOf('img'));
              const idx = data.indexOf('img');
              console.log('idx: ', idx);

              const newData = data.slice(idx, idx + 3);
              console.log('newData: ', newData);
              const test = data.replace(newData, `img src=${imagePaths[0]}/`);
              console.log('test: ', test);
              console.log('data: ', data);
            }}
            onFocus={(event, editor) => {
              // console.log('Focus.', editor);
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

      <div>
        {mainPosts.map((post) => {
          return (
            <>
              <div>{post.title}</div>
              <div>{post.category}</div>
              <div>{HTMLReactParser(post.content)}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Editor;
