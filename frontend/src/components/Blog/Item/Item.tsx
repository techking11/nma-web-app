import Content from '@/components/Blog/Item/Content';
import { Divider } from '@mui/material';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import CardList from '@/components/Blog/CardList';

export default function Item() {
  return (
    <div className="container mx-auto px-5">
      <div className="px-6 pt-4 pb-2 text-center">
        <div className="font-medium text-gray-600 text-xl mb-2">
          April 17, 2023
        </div>
        <p className="text-gray-700 font-bold text-3xl leading-12 py-5 lg:px-20">
          How generational differences affect consumer attitudes towards ads
        </p>
        <span className="inline-block text-gray-600 text-lg font-medium">
          By: Jamie Tolan, Camille Couprie, and Tracy Johns
        </span>
      </div>
      <img
        className="w-full my-20"
        src="https://plus.unsplash.com/premium_photo-1738528459492-3acf8e5004c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sunset in the mountains"
      />
      <Content />
      <Divider sx={{ my: 13 }} />
      <div className="flex justify-between items-center">
        <h1 className="text-gray-700 text-3xl font-medium">Feature News</h1>
        <a href="" className="flex items-center font-medium text-gray-700">
          <IoArrowBackCircleOutline className="size-5 mr-2" />
          All News
        </a>
      </div>
      <CardList />
    </div>
  );
}
