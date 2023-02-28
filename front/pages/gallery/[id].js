import React from 'react';
import { useRouter } from 'next/router';
// AppLayout
import AppLayout from '../../components/AppLayout/AppLayout';
// components
import PostDetailPage from '../../components/Pages/Detail/PostDetailPage';

// MockData
import { gallery_card_fake_data } from '../../MockDatas/MockData';

const GalleryDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  // console.log('router query: ', id);

  return (
    <AppLayout>
      <PostDetailPage data={gallery_card_fake_data} />
    </AppLayout>
  );
};

export default GalleryDetail;
