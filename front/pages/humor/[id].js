import React from 'react';
import { useRouter } from 'next/router';
// AppLayout
import AppLayout from '../../components/AppLayout/AppLayout';
// components
import PostDetailPage from '../../components/Pages/PostDetailPage';

const HumorDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('router query: ', id);

  return (
    <AppLayout>
      <PostDetailPage />
    </AppLayout>
  );
};

export default HumorDetail;
