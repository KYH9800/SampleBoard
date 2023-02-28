import React from 'react';
import { useRouter } from 'next/router';
// AppLayout
import AppLayout from '../../components/AppLayout/AppLayout';
// components
import GalleryDetailPage from '../../components/Pages/GalleryDetailPage';

const GalleryDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('router query: ', id);

  return (
    <AppLayout>
      <GalleryDetailPage />
    </AppLayout>
  );
};

export default GalleryDetail;
