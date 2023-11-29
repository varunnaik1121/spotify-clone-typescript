'use client';
import AuthModal from '@/components/AuthModal';
import Modal from '@/components/Modal';
import SubscribeModal from '@/components/SubscribeModel';
import UploadModal from '@/components/UploadModal';
import { useEffect, useState } from 'react';
import { ProductWithPrice } from '@/types';
interface ModalProviderProps {
  products: ProductWithPrice[];
}
const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};
export default ModalProvider;
