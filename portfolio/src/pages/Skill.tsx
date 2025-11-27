import SkillSheet from '../components/SkillSheet.tsx';

export default function Skill() {
  return (
    <div className='p-4 min-h-screen bg-[#f2f2f2] flex items-center justify-center'>
      <div className='w-full max-w-4xl mx-auto flex flex-col gap-4 md:gap-8'>
        <h1 className='my-8 text-4xl md:text-6xl font-bold text-center whitespace-nowrap'>
          My Skill Set
        </h1>
        <div className='flex flex-col justify-center md:flex-row md:space-x-40'>
          <div className='w-full flex flex-col items-center md:items-start space-y-4 border rounded-2xl p-4 '>
            <h2 className='text-2xl font-bold'>プログラミング言語</h2>
            <SkillSheet
              name='JavaScript'
              src='/images/javascript-original.svg'
              level={3}
            />
            <SkillSheet
              name='TypeScript'
              src='/images/typescript-original.svg'
              level={2}
            />
            <SkillSheet name='PHP' src='/images/php-original.svg' level={3} />
          </div>
          <div className='w-full flex flex-col items-center md:items-start space-y-4 border rounded-2xl p-4'>
            <h2 className='text-2xl font-bold'>フロントエンド</h2>
            <SkillSheet
              name='React'
              src='/images/react-original.svg'
              level={3}
            />
            <SkillSheet
              name='Inertia.js'
              src='/images/inertiajs-original.png'
              level={2}
            />
            <SkillSheet
              name='Next.js'
              src='/images/nextjs-original.svg'
              level={1}
            />
            <SkillSheet
              name='Tailwind CSS'
              src='/images/tailwindcss-original.svg'
              level={3}
            />
          </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row md:space-x-40 md:my-10'>
          <div className='w-full flex flex-col items-center md:items-start space-y-4 border rounded-2xl p-4'>
            <h2 className='text-2xl font-bold'>バックエンド</h2>
            <SkillSheet
              name='Laravel'
              src='/images/laravel-original.svg'
              level={3}
            />
            <SkillSheet
              name='Node.js'
              src='/images/nodejs-original.svg'
              level={2}
            />
          </div>
          <div className='w-full flex flex-col items-center md:items-start space-y-4 border rounded-2xl p-4'>
            <h2 className='text-2xl font-bold'>その他</h2>
            <SkillSheet
              name='MySQL'
              src='/images/mysql-original.svg'
              level={2}
            />
            <SkillSheet name='AWS' src='/images/amazonaws.svg' level={3} />
            <SkillSheet
              name='Docker'
              src='/images/docker-original.svg'
              level={2}
            />
            <SkillSheet name='Git' src='/images/git-original.svg' level={3} />
            <SkillSheet
              name='Github Actions'
              src='/images/github-original.svg'
              level={2}
            />
          </div>
        </div>
        <div className='w-full max-w-3xl mx-auto flex flex-col items-center justify-center'>
          <h2 className='text-xl font-bold text-center'>評価基準</h2>
          <table className='w-full border-collapse my-4'>
						<tr className='border-b-2 border-gray-300' />
            <tbody>
              <tr className='border-b border-gray-200'>
                <td className='py-3 pr-4'>
                  <SkillSheet level={1} size={20} />
                </td>
                <td className='pb-2 pt-3 pr-4'>
                  基礎レベル（本や公式ドキュメントで、基本的な概念や文法について学習）
                </td>
              </tr>
              <tr className='border-b border-gray-200'>
                <td className='py-3 pr-4'>
                  <SkillSheet level={2} size={20} />
                </td>
                <td className='pb-2 pt-3 pr-4'>
                  実用レベル（小〜中規模のアプリ開発に使用可能。個人開発で実際に利用した経験がある）
                </td>
              </tr>
              <tr className='border-b border-gray-200'>
                <td className='py-3 pr-4'>
                  <SkillSheet level={3} size={20} />
                </td>
                <td className='pb-2 pt-3 pr-4'>
                  実務レベル（本番環境を意識した設計・運用ができ、デプロイした経験がある）
                </td>
              </tr>
              <tr className='border-b border-gray-200'>
                <td className='py-3 pr-4'>
                  <SkillSheet level={4} size={20} />
                </td>
                <td className='pb-2 pt-3 pr-4'>
                  高度レベル（アプリ設計でベストプラクティスを選択できる）
                </td>
              </tr>
              <tr>
                <td className='py-3 pr-4'>
                  <SkillSheet level={5} size={20} />
                </td>
                <td className='pb-2 pt-3 pr-4'>
                  エキスパート（技術的リーダーシップが取れる）
                </td>
              </tr>
              <tr className='border-b-2 border-gray-300' />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
