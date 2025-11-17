import { motion } from 'motion/react';

export default function Intro() {
  return (
    <div className='p-4 min-h-screen max-h-full bg-[#f5efe2] flex items-center justify-center'>
      <div className='w-full max-w-full grid grid-cols-12 grid-rows-7 gap-4'>
        <div className='col-start-6 col-span-2 row-start-2 text-[60px] font-bold whitespace-nowrap flex items-center justify-center'>
            About me
        </div>
        <div className='col-start-4 col-span-2 row-start-3 row-span-3 flex items-center justify-center'>
            <img
            src='/images/Profile.jpg'
            alt='Profile Image'
            width={64}
            height={64}
            className='w-52 h-52 object-cover rounded-sm'
            draggable='false'
            />
        </div>
        <div className='col-start-6 col-span-4 row-start-3 row-span-3 flex items-center justify-center'>
            大学で芸術工学を学んだのち、広告制作会社でTVCMやWebムービーの制作進行に従事。その後、北アフリカのチュニジアという国で2年間、健全な青少年の育成に従事。そこで世界におけるITの重要性、影響力を再認識し、IT業界への転職を決意、2025年4月よりプログラミングの学習を始める。
        </div>
      </div>
    </div>
  );
}
