import React from 'react';
import { useRouter } from 'next/router';
// AppLayout
import AppLayout from '../../components/AppLayout/AppLayout';
// components
import PostDetailPage from '../../components/Pages/Detail/PostDetailPage';

// MockData
import { humor_board_fake_data } from '../../MockDatas/MockData';

const HumorDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  // console.log('router query: ', id);

  return (
    <AppLayout>
      <PostDetailPage data={humor_board_fake_data} />
    </AppLayout>
  );
};

export default HumorDetail;
