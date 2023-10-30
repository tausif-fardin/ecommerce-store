'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Expand, ShoppingCart } from 'lucide-react';

import { Product } from '@/types';
import IconButton from './icon-button';
import Currency from './currency';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'
    >
      <div className='aspect-square rounded-xl bg-gray-200 relative group'>
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt='image'
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute inset-0 flex items-center justify-center'>
          <div className='flex gap-x-6'>
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className='text-gray-500' />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className='text-gray-500' />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm'>{data.category?.name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
