import Logo from '../components/Logo';
import FileIcon from '../components/FileIcon';

function App() {
  return (
    <div className='p-4 min-h-screen max-h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
      <div className='w-full max-w-full grid grid-cols-12 grid-rows-7 gap-4'>
        <div className='col-start-6 col-span-2 row-start-3 row-span-2 flex items-center justify-center'>
          <Logo />
        </div>
        <div className='col-start-1 row-start-1'>
          <FileIcon name='テスト' />
        </div>
      </div>
    </div>
  );
}

export default App;
