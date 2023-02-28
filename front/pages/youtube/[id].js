import React from 'react';
import { useRouter } from 'next/router';
// AppLayout
import AppLayout from '../../components/AppLayout/AppLayout';
// components
import YoutubeDetailPage from '../../components/Pages/YoutubeDetailPage';

const YoutubeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('router query: ', id);

  return (
    <AppLayout>
      <YoutubeDetailPage />
    </AppLayout>
  );
};

export default YoutubeDetail;
