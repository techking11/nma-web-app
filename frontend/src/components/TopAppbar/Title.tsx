import { Link } from 'react-router';

interface TitleProps {
  classes: string;
}

export default function Title({ classes }: TitleProps) {
  return (
    <Link
      to="/"
      className={`${classes} text-gray-900 font-medium text-xl hover:underline`}
    >
      Research
    </Link>
  );
}
