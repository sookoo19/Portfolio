import { useState } from 'react';
import TripostModal from '../components/TripostModal.tsx';
import PortfolioModal from '../components/PortfolioModal.tsx';

export default function Work() {
  const [openTripostModal, setOpenTripostModal] = useState(false);
	const [openPortfolioModal, setOpenPortfolioModal] = useState(false);
  return (
    <div className='p-4 min-h-screen bg-[#f5efe2] flex items-center justify-center'>
      <div className='w-full max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-8'>
        <h1 className='text-4xl md:text-6xl font-bold whitespace-nowrap'>
          Works
        </h1>
        <h2 className='text-base md:text-lg'>
          私が自主制作した制作物です。クリックすると詳細をご覧いただけます。
        </h2>
        <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-8'>
          <div className='flex flex-col items-center'>
            <button
              onClick={() => setOpenTripostModal(true)}
              className='w-full rounded-sm cursor-pointer'
              aria-label='Open modal'
            >
              <img
                src='/images/tripost/ogp.jpg'
                alt='Product Image1'
                className=' w-full object-cover aspect-[16/10] rounded-sm shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 ease-in-out'
                draggable='false'
              />
            </button>
            <figcaption className='text-lg mt-3'>
              旅行共有SNS「Tripost」
            </figcaption>
          </div>
          <div className='flex flex-col items-center'>
						<button
              onClick={() => setOpenPortfolioModal(true)}
              className='w-full rounded-sm cursor-pointer'
              aria-label='Open modal'
            >
            <img
              src='/images/tripost/ogp.jpg'
              alt='Product Image1'
              className=' w-full object-cover aspect-[16/10] rounded-sm shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 ease-in-out'
              draggable='false'
            />
						</button>
						<figcaption className='text-lg mt-3'>
              ポートフォリオサイト
            </figcaption>
          </div>
        </div>
      </div>
      {/* モーダル */}
      <TripostModal isOpen={openTripostModal} onClose={() => setOpenTripostModal(false)} />
			<PortfolioModal isOpen={openPortfolioModal} onClose={() => setOpenPortfolioModal(false)} />
    </div>
  );
}
