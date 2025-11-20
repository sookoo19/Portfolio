import { useEffect, useState } from 'react';

interface TripostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TripostModal({ isOpen, onClose }: TripostModalProps) {
    const [mainSrc, setMainSrc] = useState('/images/tripost/welcome.png');
    const [caption, setCaption] = useState('Welcomeページ');
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
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
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
          <div className='flex flex-col'>
            <h3 className='text-2xl font-bold mb-4'>旅行共有SNS「Tripost」</h3>
            <div className='text-base text-gray-700 space-y-4'>
              <p>旅行の思い出を共有するSNSアプリケーションです。</p>
              <div>
                <h4 className='font-bold mb-2'>使用技術</h4>
                <ul className='list-disc list-inside'>
                  <li>React / TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>その他技術スタック</li>
                </ul>
              </div>
              <div>
                <h4 className='font-bold mb-2'>主な機能</h4>
                <ul className='list-disc list-inside'>
                  <li>旅行記の投稿・閲覧</li>
                  <li>写真のアップロード</li>
                  <li>ユーザー間の交流</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
          <div className='flex flex-row gap-2 lg:mt-0 lg:ml-6 lg:w-200 items-center justify-center'>
            <img
              src='/images/tripost/welcome.png'
              alt='Tripost Detail'
              className='w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
              draggable='false'
              onClick={() => { setMainSrc('/images/tripost/welcome.png'); setCaption('Welcomeページ'); }}
            />
            <img
              src='/images/tripost/register.png'
              alt='Tripost Detail'
              className='w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
              draggable='false'
              onClick={() => { setMainSrc('/images/tripost/register.png'); setCaption('新規登録ページ'); }}
            />
            <img
              src='/images/tripost/help.png'
              alt='Tripost Detail'
              className='w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
              draggable='false'
              onClick={() => { setMainSrc('/images/tripost/help.png'); setCaption('お問い合わせページ'); }}
            />
            <img
              src='/images/tripost/home.png'
              alt='Tripost Detail'
              className='w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
              draggable='false'
              onClick={() => { setMainSrc('/images/tripost/home.png'); setCaption('投稿一覧ページ'); }}
            />
            <img
              src='/images/tripost/profile.png'
              alt='Tripost Detail'
              className='w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
              draggable='false'
              onClick={() => { setMainSrc('/images/tripost/profile.png'); setCaption('プロフィールページ'); }}
            />
            <img
              src='/images/tripost/post_detail.png'
              alt='Tripost Detail'
              className='w-20 h-auto object-cover aspect-square rounded-sm shadow-lg cursor-pointer hover:scale-105 transform duration-200 ease-in-out'
              draggable='false'
              onClick={() => { setMainSrc('/images/tripost/post_detail.png'); setCaption('投稿詳細ページ'); }}
            />
          </div>
          <div className="mt-4 lg:ml-6 lg:w-200 flex-shrink-0">
            <img
              src={mainSrc}
              alt='Tripost Detail'
              className='w-full h-auto object-cover aspect-[16/10] rounded-sm shadow-lg'
              draggable='false'
            />
          </div>
          <figcaption className='mt-2 text-center'>
            {caption}
          </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}
