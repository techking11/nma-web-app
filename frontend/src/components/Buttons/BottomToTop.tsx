import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function BottomToTop() {
  const [show, hide] = useState(false);
  const targetHeight = 15;
  useEffect(() => {
    const handleScroll = () => hide(window.scrollY >= targetHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Box
      className={`fixed bottom-10 right-10 bg-cyan-600 size-12 text-white flex justify-center items-center rounded-full shadow-md shadow-cyan-800 opacity-0 sm:opacity-100 ${
        show ? '' : 'hidden'
      }`}
    >
      <a href="#top">
        <IoIosArrowUp className="size-7" />
      </a>
    </Box>
  );
}
