import React from 'react';
import { useRouter } from 'next/router';
// AppLayout
import AppLayout from '../../components/AppLayout/AppLayout';
// components
import PostDetailPage from '../../components/Pages/Detail/PostDetailPage';

// MockData
import { youtube_card_fake_data } from '../../MockDatas/MockData';

const YoutubeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  // console.log('router query: ', id);

  return (
    <AppLayout>
      <PostDetailPage data={youtube_card_fake_data} />
    </AppLayout>
  );
};

export default YoutubeDetail;
