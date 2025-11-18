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
            className='w-52 h-52 object-cover rounded-sm'
            draggable='false'
          />
        </div>
        <div className='col-start-6 col-span-4 row-start-2 row-span-3 pt-6 text-3xl font-bold flex items-center'>
          Kohei SUZUKI
        </div>
        <div className='col-start-6 col-span-4 row-start-3 row-span-3 flex items-center justify-center'>
          大学で芸術工学を学んだのち、広告制作会社でTVCMやWebムービーの制作進行に従事。その後、北アフリカにあるチュニジアという国で2年間、青少年の育成に従事。そこで世界におけるITの重要性、影響力を再認識し、IT業界への転職を決意、2025年4月よりプログラミングの学習を始める。
        </div>
        <div className='col-start-6 col-span-1 row-start-5 row-span-1 flex'>
        <div className="w-11 h-11 rounded-full overflow-hidden hover:bg-[#dcd7cb] duration-200 ease-in-out flex items-center justify-center">
          <a
            href='https://github.com/sookoo19'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
            className='w-8 h-8 flex items-center justify-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
            >
              <path d='M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z' />
            </svg>
          </a>
          </div>
          <div className="w-11 h-11 rounded-full overflow-hidden hover:bg-[#dcd7cb] duration-200 ease-in-out flex items-center justify-center">
          <a
            href='https://qiita.com/sookoo19'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
            className='w-8 h-8 flex items-center justify-center'
          >
            <img
              src='/images/qiita-icon.png'
              alt='Qiita Profile'
              className='w-8 h-8 object-cover rounded-sm'
              draggable='false'
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
