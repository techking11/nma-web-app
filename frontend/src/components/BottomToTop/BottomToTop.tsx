import Box from '@mui/material/Box';
import { IoIosArrowUp } from 'react-icons/io';

export default function BottomToTop() {
  return (
    <Box className="absolute top-10 right-10 bg-[#4eb2e2] size-12 text-white flex justify-center items-center rounded-full shadow-md shadow-cyan-700">
      <IoIosArrowUp className="size-7" />
    </Box>
  );
}
