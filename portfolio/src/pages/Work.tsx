import { useState } from 'react';
import TripostModal from '../components/TripostModal';
import PortfolioModal from '../components/PortfolioModal';

export default function Work() {
  const [openTripostModal, setOpenTripostModal] = useState(false);
  const [openPortfolioModal, setOpenPortfolioModal] = useState(false);
  return (
    <div className='p-4 text-[#f2f2f2] pb-10 min-h-screen flex items-center justify-center bg-black/20 rounded-[50px] lg:mx-20'>
      <div className='w-full max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-8'>
        <h1 className='text-4xl md:text-6xl font-bold whitespace-nowrap'>
          Works
        </h1>
        <h2 className='text-base md:text-lg'>
          私が自主制作した制作物です。クリックすると詳細をご覧いただけます。
        </h2>
        <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-8'>
          <div className='w-full flex flex-col items-center'>
            <button
              onClick={() => setOpenTripostModal(true)}
              className='rounded-sm cursor-pointer'
              aria-label='Open modal'
            >
              <img
                src='./images/tripost/ogp.jpg'
                alt='Product Image1'
                className='object-cover aspect-[16/10] rounded-sm shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 ease-in-out'
                draggable='false'
              />
            </button>
            <figcaption className='text-lg mt-3'>
              旅行共有SNS「Tripost」
            </figcaption>
          </div>
          <div className='w-full flex flex-col items-center'>
            <button
              onClick={() => setOpenPortfolioModal(true)}
              className='rounded-sm cursor-pointer'
              aria-label='Open modal'
            >
              <img
                src='./images/portfolio/portfolio-site.png'
                alt='Product Image2'
                className='object-cover aspect-[16/10] rounded-sm shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 ease-in-out'
                draggable='false'
              />
            </button>
            <figcaption className='text-lg mt-3'>
              ポートフォリオサイト
            </figcaption>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-8 mt-4'>
          <div className='w-full flex flex-col items-center opacity-60'>
            <img
              src='./images/ComingSoon.svg'
              alt='Product Image3'
              className='object-cover aspect-[16/10] rounded-sm shadow-lg'
              draggable='false'
            />
            <figcaption className='text-lg mt-3'>Coming Soon...</figcaption>
          </div>
          <div className='w-full flex flex-col items-center opacity-60'>
            <img
              src='./images/ComingSoon.svg'
              alt='Product Image4'
              className='object-cover aspect-[16/10] rounded-sm shadow-lg'
              draggable='false'
            />
            <figcaption className='text-lg mt-3'>Coming Soon...</figcaption>
          </div>
        </div>
      </div>
      {/* モーダル */}
      <TripostModal
        isOpen={openTripostModal}
        onClose={() => setOpenTripostModal(false)}
      />
      <PortfolioModal
        isOpen={openPortfolioModal}
        onClose={() => setOpenPortfolioModal(false)}
      />
    </div>
  );
}
