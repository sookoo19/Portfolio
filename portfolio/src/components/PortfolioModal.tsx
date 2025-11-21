import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
  const [mainSrc, setMainSrc] = useState('/images/tripost/welcome.png');
  const [caption, setCaption] = useState('Welcomeページ');
  const [fadeIn, setFadeIn] = useState(true);

  // 画像切り替え時にフェード効果
  const handleImageChange = (src: string, cap: string) => {
    setFadeIn(false);
    setTimeout(() => {
      setMainSrc(src);
      setCaption(cap);
      setFadeIn(true);
    }, 300);
  };

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      // スクロールを無効化
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      setMainSrc('/images/tripost/welcome.png');
      setCaption('Welcomeページ');
      setFadeIn(true);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='relative max-w-[90%] max-h-[90vh] bg-[#F2F2F2] rounded-lg shadow-2xl p-6 overflow-auto'
            onClick={e => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 duration-200 text-2xl font-bold cursor-pointer'
              aria-label='Close modal'
            >
              ✕
            </button>
            {/* モーダル内容 */}
            <div className='flex flex-col lg:flex-row'>
              <div className='flex flex-col lg:w-2/5'>
                <h3 className='text-xl md:text-3xl font-bold mb-4'>
                  ポートフォリオサイト
                </h3>
                <div className='text-base text-gray-700 leading-relaxed'>
                  <p className='mb-2'>
                    ポートフォリオサイトを作成しました（本サイト）。
                  </p>
                  <p>
                    <a
                      href='https://mytripost.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex flex-row items-center text-[#039be5] hover:text-[#026ca0]'
                    >
                      <img
                        src='/images/tripost/icon-192.png'
                        alt='Tripost Icon'
                        draggable='false'
                        className='w-8 h-auto object-cover aspect-square cursor-pointer'
                      />
                      <span className='text-sm md:text-base'>
                        Tripost - Welcomeページ
                      </span>
                    </a>
                  </p>
                  <p>
                    <a
                      href='https://github.com/sookoo19/Tripost'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex flex-row items-center text-[#039be5] hover:text-[#026ca0]'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='26'
                        height='26'
                        viewBox='0 0 24 24'
                        className='mx-1 object-cover aspect-square cursor-pointer'
                      >
                        <path d='M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z' />
                      </svg>
                      <span className='text-sm md:text-base'>Github</span>
                    </a>
                  </p>
                  <p className='mt-1'>
                    <a
                      href='https://qiita.com/sookoo19/items/30b858ce211d8b409fac'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex flex-row items-center text-[#039be5] hover:text-[#026ca0]'
                    >
                      <img
                        src='/images/qiita-icon.png'
                        alt='Qiita Tripost'
                        className='mx-1.5 w-5.5 h-5.5 object-cover aspect-square cursor-pointer'
                        draggable='false'
                      />
                      <span className='text-sm md:text-base'>Qiita</span>
                    </a>
                  </p>
                  <div>
                    <h4 className='text-lg font-bold mt-6 mb-2'>使用技術</h4>
                    <div className='space-y-2 text-sm text-gray-700'>
                      <div>
                        <strong>フロントエンド —</strong> React.js, Inertia.js,
                        Tailwind CSS
                      </div>
                      <div>
                        <strong>バックエンド —</strong> Laravel, Redis
                      </div>
                      <div>
                        <strong>インフラ / CI —</strong> Docker, Docker Compose, AWS
                        (EC2 / RDS / Route 53 / S3), Nginx, Github Actions
                      </div>
                      <div>
                        <strong>その他 —</strong> Mailgun, Google Maps API
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col lg:w-3/5'>
                <div className='flex flex-row flex-wrap gap-2 mt-6 lg:mt-0 lg:ml-6 items-center md:justify-center '>
                  <img
                    src='/images/tripost/welcome.png'
                    alt='Tripost Detail'
                    className='w-16 md:w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
                    draggable='false'
                    onClick={() =>
                      handleImageChange(
                        '/images/tripost/welcome.png',
                        'Welcomeページ'
                      )
                    }
                  />
                  <img
                    src='/images/tripost/register.png'
                    alt='Tripost Detail'
                    className='w-16 md:w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
                    draggable='false'
                    onClick={() =>
                      handleImageChange(
                        '/images/tripost/register.png',
                        '新規登録ページ'
                      )
                    }
                  />
                  <img
                    src='/images/tripost/help.png'
                    alt='Tripost Detail'
                    className='w-16 md:w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
                    draggable='false'
                    onClick={() =>
                      handleImageChange(
                        '/images/tripost/help.png',
                        'お問い合わせページ'
                      )
                    }
                  />
                  <img
                    src='/images/tripost/home.png'
                    alt='Tripost Detail'
                    className='w-16 md:w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
                    draggable='false'
                    onClick={() =>
                      handleImageChange(
                        '/images/tripost/home.png',
                        '投稿一覧ページ'
                      )
                    }
                  />
                  <img
                    src='/images/tripost/profile.png'
                    alt='Tripost Detail'
                    className='w-16 md:w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
                    draggable='false'
                    onClick={() =>
                      handleImageChange(
                        '/images/tripost/profile.png',
                        'プロフィールページ'
                      )
                    }
                  />
                  <img
                    src='/images/tripost/post_detail.png'
                    alt='Tripost Detail'
                    className='w-16 md:w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
                    draggable='false'
                    onClick={() =>
                      handleImageChange(
                        '/images/tripost/post_detail.png',
                        '投稿詳細ページ'
                      )
                    }
                  />
                </div>
                <div className='mt-4 lg:ml-6 flex-shrink-0'>
                  <img
                    src={mainSrc}
                    alt='Tripost Detail'
                    className={`w-full h-auto object-cover aspect-[16/10] rounded-sm shadow-lg transition-opacity duration-500 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                    draggable='false'
                  />
                </div>
                <figcaption
                  className={`mt-2 text-center lg:ml-6 transition-opacity duration-500 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                >
                  {caption}
                </figcaption>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
