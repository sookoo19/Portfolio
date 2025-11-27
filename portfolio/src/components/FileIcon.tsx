import { FaFolder } from 'react-icons/fa';

export interface FileIconProps {
  name?: string;
  className?: string;
}
export default function FileIcon({ name, className = '' }: FileIconProps) {
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <FaFolder className='w-16 h-16 flex-shrink-0' color='#88CEF7' aria-hidden />
      {name && (
        <figcaption
          className='text-sm text-white whitespace-nowrap select-none'
          style={{ textShadow: '0 2px 6px rgba(23, 23, 23, 0.6)' }}
        >
          {name}
        </figcaption>
      )}
    </figure>
  );
}
