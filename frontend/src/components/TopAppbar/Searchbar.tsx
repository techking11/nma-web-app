import { MdSearch } from 'react-icons/md';

interface ISearchBar {
  showSearch: boolean;
}

export default function Searchbar({ showSearch }: ISearchBar) {
  return (
    <div className={`${showSearch ? 'block' : 'hidden'}`}>
      <div className="fixed left-0 w-full px-10 h-[300px] bg-white flex items-center z-50">
        <div className="flex px-4 py-3 rounded-full border border-gray-700 w-full sm:w-1/2 mx-auto">
          <MdSearch className="size-6 text-gray-600" />
          <input
            type="email"
            placeholder="Search Something..."
            className="w-full pl-3 outline-none bg-transparent text-gray-800 text-base placeholder:text-gray-700"
          />
        </div>
      </div>
      <div className="fixed w-full h-screen z-40 bg-[rgba(0,0,0,0.3)]"></div>
    </div>
  );
}
