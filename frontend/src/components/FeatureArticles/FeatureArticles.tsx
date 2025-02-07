import SelectBox from '@/components/FeatureArticles/SelectBox';
import CardList from '@/components/FeatureArticles/CardList';
import filterItems from '@/data/filterItems';
import dateItems from '@/data/dateItems';

export default function FeatureArticles() {
  return (
    <div className="mt-32 px-3">
      <div className="container xl:max-w-6xl grid grid-cols-12 gap-3 mx-auto">
        <div className="col-span-12 md:col-span-3 lg:col-span-4">
          <p className="text-3xl text-gray-700 w-full">Featured Articles</p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <SelectBox title="Filter By" type="All Areas" items={filterItems} />
        </div>
        <div className="col-span-12 md:col-span-3">
          <SelectBox title="Date" type="All Years" items={dateItems} />
        </div>
      </div>
      <CardList />
    </div>
  );
}
