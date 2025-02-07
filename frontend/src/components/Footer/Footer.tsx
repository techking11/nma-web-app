import Box from '@mui/material/Box';
import { CiEdit } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa6';

export default function Footer() {
  return (
    <Box className="w-full bg-cyan-600 flex flex-col justify-center items-center text-white text-center font-medium py-5 px-5">
      <img className="size-14 rounded-full" src="/nma.png" alt="nma" />
      <p className="pt-3">
        Copyright &copy;{new Date().getFullYear()} All rights reserved &nbsp;
        <FaHeart className="inline-block" /> &nbsp; by Justin Myo .
      </p>
      <a href="" className="flex items-center pt-1">
        <CiEdit /> &nbsp; <span className="hover:underline">About Me</span>
      </a>
    </Box>
  );
}
