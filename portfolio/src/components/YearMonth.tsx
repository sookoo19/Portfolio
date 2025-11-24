export interface YearMonthProps {
  year: string;
  month: string;
}

export default function YearMonth({ year, month }: YearMonthProps) {
  return (
    <div className='flex flex-col'>
      <p className='text-4xl'>{year}</p>
      <p className='text-end text-2xl'>{month}</p>
    </div>
  );
}
