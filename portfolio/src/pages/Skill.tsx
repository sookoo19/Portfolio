import SkillSheet from '../components/SkillSheet.tsx';

export default function Skill() {
  return (
    <div className='p-4 min-h-screen bg-[#f2f2f2] flex items-center justify-center'>
      <div className='w-full max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-8'>
        <h1 className='text-4xl md:text-6xl font-bold whitespace-nowrap'>
          My Skill Set
        </h1>
        <h2>プログラミング言語</h2>
        <SkillSheet name='JavaScript' level={3} />
        <SkillSheet name='TypeScript' level={2} />
        <SkillSheet name='PHP' level={3} />
        <h2>フロントエンド</h2>
        <SkillSheet name='React' level={3} />
        <SkillSheet name='Inertia.js' level={2} />
        <SkillSheet name='Next.js' level={1} />
        <SkillSheet name='Tailwind CSS' level={3} />
        <h2>バックエンド</h2>
        <SkillSheet name='Laravel' level={3} />
        <SkillSheet name='Node.js' level={2} />
        <h2>その他</h2>
        <SkillSheet name='MySQL' level={2} />
        <SkillSheet name='AWS' level={3} />
        <SkillSheet name='Docker' level={2} />
        <SkillSheet name='Git' level={3} />
        <SkillSheet name='Github Actions' level={2} />

        <div className='w-full max-w-3xl'>
					<h2 className='text-xl font-bold text-center'>評価基準</h2>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='border-b-2 border-gray-300'>
                <th className='py-2 pl-10 text-left'>レベル</th>
                <th className='py-2 text-left'>説明</th>
              </tr>
            </thead>
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
							<tr className='border-b-2 border-gray-300'/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
