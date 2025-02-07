import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Navigation from '@/components/TopAppbar/Navigation';
import { Divider } from '@mui/material';

export default function TopAppbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const targetHeight = 5;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= targetHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Box className="fixed w-full z-40 p-0">
      <Box
        className={`bg-white ${
          isScrolled ? 'h-[30px]' : 'h-[60px]'
        } transition-all duration-300`}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters className="cursor-pointer">
            <img className="size-10 rounded-full" src="/nma.png" alt="haha" />
            <Link
              to="/"
              className="ml-3 capatilize text-lg text-gray-700 font-semibold"
            >
              Justin Myo .
            </Link>
          </Toolbar>
        </Container>
      </Box>
      <Divider className="z-50 bg-gray-100" />
      <Navigation isScrolled={isScrolled} />
    </Box>
  );
}
