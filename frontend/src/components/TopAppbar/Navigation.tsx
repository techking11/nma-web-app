import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { VscMenu } from 'react-icons/vsc';
import Container from '@mui/material/Container';
import { MdSearch } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import Searchbar from '@/components/TopAppbar/Searchbar';
import NavLinks from '@/components/TopAppbar/NavLinks';
import Setting from '@/components/TopAppbar/Setting';
import MobileNav from '@/components/TopAppbar/MobileNav';
import Title from '@/components/TopAppbar/Title';

interface NavProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavProps) {
  const [showSearch, toggleSearch] = useState(false);
  const [showMobileNav, toggleMobileNav] = useState(false);
  const user = '';
  return (
    <div
      className={`bg-white text-black ${isScrolled ? 'shadow' : ''}`}
      style={{
        transition: 'transform 0.3s linear',
        transform: `translate3d(0px, ${isScrolled ? -35 : 0}px, 0px)`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Title classes="mr-2 hidden md:flex" />
          <div className="flex flex-1 md:hidden">
            <IconButton
              color="inherit"
              onClick={() => toggleMobileNav(!showMobileNav)}
            >
              {showMobileNav ? (
                <RxCross2 className="size-5" />
              ) : (
                <VscMenu className="size-5" />
              )}
            </IconButton>
          </div>
          <Title classes="mr-8 flex flex-1 md:hidden" />
          <div className="hidden md:flex flex-1 items-center md:ml-14">
            <NavLinks />
          </div>

          <IconButton className="p-3" onClick={() => toggleSearch(!showSearch)}>
            {showSearch ? (
              <RxCross2 className="size-6 text-gray-800" />
            ) : (
              <MdSearch className="size-6 text-gray-800" />
            )}
          </IconButton>
          {user && <Setting />}
        </Toolbar>
      </Container>
      <Searchbar showSearch={showSearch} />
      <MobileNav showMobileNav={showMobileNav} />
    </div>
  );
}
