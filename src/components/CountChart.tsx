import Image from 'next/image';
import Example from './Radial';
const data = [
  {
    name: 'Boys',
    count: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: 'Girls',
    count: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: 'Total',
    count: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt="alt" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className=" relative w-full h-[75%]">
            <Example />
            <Image src="/maleFemale.png" alt="alt" width={50} height={50} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </div>
        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-lamaSky rounded-full"/>
                <h1 className="font-bold">1,234</h1>
                <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
            </div>
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-lamaYellow rounded-full"/>
                <h1 className="font-bold">1,234</h1>
                <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
            </div>
        </div>

        </div>
    )
}

export default CountChart