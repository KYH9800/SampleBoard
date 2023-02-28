import React from 'react';
import { useRouter } from 'next/router';
// AppLayout
import AppLayout from '../../components/AppLayout/AppLayout';
// components
import PostDetailPage from '../../components/Pages/Detail/PostDetailPage';

// MockData
import { notice_board_fake_data } from '../../MockDatas/MockData';

const NoticeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  // console.log('router query: ', id);

  return (
    <AppLayout>
      <PostDetailPage data={notice_board_fake_data} />
    </AppLayout>
  );
};

export default NoticeDetail;
