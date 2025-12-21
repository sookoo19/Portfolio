import { motion } from 'motion/react';
import YearMonth from '../components/YearMonth.tsx';
import DeatilProfile from '../components/DeatilProfile.tsx';

export default function Profile() {
  // タイムラインアイテムのアニメーション設定
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='p-4 pb-10  min-h-screen flex items-center justify-center text-[#f2f2f2] bg-black/20 rounded-[50px] lg:mx-20'>
      <div className='w-full max-w-4xl mx-auto flex flex-col items-center'>
        <h1 className='my-8 text-4xl md:text-6xl font-bold whitespace-nowrap'>
          Profile
        </h1>

        {/* タイムライン */}
        <div className='relative w-full'>
          {/* 縦線 */}
          <div className='absolute left-[100px] md:left-[120px] top-0 bottom-0 w-0.5 bg-gray-300' />

          {/* 経歴アイテム */}
          <div className='space-y-8 md:space-y-24'>
            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2000' month='10月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile title='愛知県で生まれる' des='双子の兄です。' />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2008' month='' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='サッカーを始める'
                  des='小学2〜6年生までサッカークラブに所属。'
                />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2013' month='4月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='中学でバスケを始める'
                  des='中高6年間バスケ部に所属。最高成績は高校での県大会出場。'
                />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2019' month='4月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='九州大学芸術工学部画像設計学科(現:メディアデザインコース)へ入学'
                  des='デザインや映像、メディアアートについて学び、htmlやcss、pythonに少し触れる。'
                />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2019' month='9月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='プロレスを始める'
                  des='先輩に誘われプロレスサークルへ入る。学内外を対象に毎年２回公演を実施した。'
                />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2020' month='3月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='映像制作に熱中する'
                  des='主にインディーズバンドのMVや短編映画、ライブ背景映像を制作した。'
                />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2021' month='7月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='スターダストプロモーション所属アイドル「ukka」のMVを監督'
                  des='コンペを勝ち抜き、初めてメジャーアーティストのMVを作成。'
                />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2023' month='' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='卒業研究で携わったプロジェクトが2つの広告賞を受賞'
                  des='地元企業との産学連携プロジェクト「ECYCLE PROJECT」で商品設計やマーケティング、広報に携わる。【受賞歴:第62回福岡広告協会賞 銀賞、第15回日本マーケティング大賞 地域賞】'
                />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2023' month='4月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='広告制作会社へ入社'
                  des='大学卒業後、映像制作の道へ進む。主にTVCMやWebムービーの制作進行を担当。'
                />
              </div>
            </motion.div>

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2024' month='12月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='JICA海外協力隊でチュニジアへ'
                  des='将来の働き方に不安を感じてしまい、将来の選択肢を広げるために協力隊へ応募し合格。'
                />
              </div>
            </motion.div>

            {/*<motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2025' month='4月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='プログラミングの学習を始める'
                  des='発展途上国での生活で、世界におけるITの重要性、影響力を再認識し、IT業界への転職を決意する。'
                />
              </div>
            </motion.div>*/}

            <motion.div
              className='flex flex-row items-start relative'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={itemVariants}
            >
              <div className='flex-shrink-0'>
                <YearMonth year='2026' month='12月' />
              </div>
              <div className='absolute left-[95px] md:left-[115px] top-[10px] w-3 h-3 bg-gray-600 rounded-full border-4 border-[#f2f2f2]'></div>
              <div className='ml-10 md:ml-16 flex-1'>
                <DeatilProfile
                  title='日本へ帰国(予定)'
                  des='2年の任期を終え、チュニジアから帰国する。'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
