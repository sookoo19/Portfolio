export default function Intro() {
  return (
    <div className='p-4 min-h-screen bg-[#f5efe2] flex items-center justify-center'>
      <div className='w-full max-w-3xl mx-auto flex flex-col items-center gap-8 md:gap-12'>
        
        {/* About me タイトル */}
        <h1 className='text-4xl md:text-6xl font-bold whitespace-nowrap text-center'>
          About me
        </h1>

        {/* プロフィール画像と名前・説明 */}
        <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8'>
          
          {/* プロフィール画像 */}
          <div className='flex-shrink-0'>
            <img
              src='/images/Profile.jpg'
              alt='Profile Image'
              className='w-40 h-40 md:w-52 md:h-52 object-cover rounded-sm'
              draggable='false'
            />
          </div>

          {/* 名前と説明 */}
          <div className='flex flex-col gap-2 flex-1'>
            <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>
              Kohei SUZUKI
            </h2>
            
            <p className='text-sm md:text-base leading-relaxed text-left'>
              大学で芸術工学を学んだのち、広告制作会社でTVCMやWebムービーの制作進行に従事。その後、北アフリカにあるチュニジアで2年間、青少年の育成に従事。そこで世界におけるITの重要性、影響力を再認識し、IT業界への転職を決意、2025年4月よりプログラミングの学習を始める。
            </p>
          
        <div className=" flex flex-row">
          {/* GitHub */}
          <div className="w-11 h-11 rounded-full overflow-hidden hover:bg-[#dcd7cb] hover:scale-105 transform transition-all duration-200 ease-in-out flex items-center justify-center">
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

          {/* Qiita */}
          <div className="w-11 h-11 rounded-full overflow-hidden hover:bg-[#dcd7cb] hover:scale-105 transform transition-all duration-200 ease-in-out flex items-center justify-center">
            <a
              href='https://qiita.com/sookoo19'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Qiita Profile'
              className='w-8 h-8 flex items-center justify-center'
            >
              <img
                src='/images/qiita-icon.png'
                alt='Qiita Profile'
                className='w-full h-full object-cover'
                draggable='false'
              />
            </a>
          </div>
          </div>
          </div>
          </div>

      </div>
    </div>
  );
}
