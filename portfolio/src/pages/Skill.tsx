import SkillSheet from '../components/SkillSheet.tsx';

export default function Skill() {
    return(
        <div className='p-4 min-h-screen bg-[#f2f2f2] flex items-center justify-center'>
      <div className='w-full max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-8'>
        <h1 className='text-4xl md:text-6xl font-bold whitespace-nowrap'>
          My Skill Set
        </h1>
        <SkillSheet name='React' level={3} />
        </div>
        </div>
    )
}