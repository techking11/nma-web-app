import { CgArrowTopRight } from 'react-icons/cg';

interface ICardList {
  imgSrc: string;
  date: string;
  title: string;
  category: string;
}

export default function CardItem({ imgSrc, date, title, category }: ICardList) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div className="cursor-pointer group rounded-xl">
        <div className="rounded-xl w-full overflow-hidden">
          <img
            className="w-full object-cover h-full lg:h-[275px] xl:h-[235px] rounded-xl scale-100 group-hover:rounded-xl group-hover:scale-[1.045] transition-all duration-300"
            src={imgSrc}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-medium text-base text-gray-600 mb-2">{date}</div>
          <p className="text-gray-900 py-2 h-[95px] text-xl overflow-hidden group-hover:text-cyan-600 transition-all duration-300">
            {title}
          </p>
        </div>
        <div className="px-6 pb-2">
          <CgArrowTopRight
            className={`${
              category ? 'opacity-100' : 'opacity-0'
            } size-4 rounded-full inline-block border border-gray-500 text-gray-500 group-hover:text-cyan-600 group-hover:border-cyan-600`}
          />
          <span className="inline-block rounded-full px-3 py-1 text-sm font-medium text-gray-700">
            {category}
          </span>
        </div>
        <hr className="mt-3 border-[2px] text-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
  );
}
