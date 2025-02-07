import { Link } from 'react-router';

export default function AuthButton() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-lg md:ml-5 font-medium text-gray-900">
      <Link
        to="/register"
        className="text-gray-700 font-medium mt-2 md:mt-0 hover:underline"
      >
        Register
      </Link>
      <Link
        to="/login"
        className="bg-cyan-600 border-2 border-cyan-600 hover:bg-transparent hover:text-cyan-600 transition-all duration-300 active:bg-cyan-700 active:text-white text-white rounded-full px-4"
      >
        Login
      </Link>
    </div>
  );
}
