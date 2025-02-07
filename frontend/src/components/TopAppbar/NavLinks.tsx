import { Link } from 'react-router';
import AuthButton from '@/components/Buttons/AuthButton';

const pages = ['Courses', 'Blogs', 'Portfolio'];

export default function NavLinks() {
  const user = '';
  return (
    <>
      {pages.map((page, i) => (
        <Link
          key={i}
          to={`/${page.toLocaleLowerCase()}`}
          className="my-1 md:mx-5 lg:mx-7 text-gray-700 block capitalize bg-transparent text-lg leading-14 md:leading-none font-medium rounded-none text-center hover:underline"
        >
          {page}
        </Link>
      ))}
      {!user && <AuthButton />}
    </>
  );
}
