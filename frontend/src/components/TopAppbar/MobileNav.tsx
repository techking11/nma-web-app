import NavLinks from '@/components/TopAppbar/NavLinks';

interface IMobileNav {
  showMobileNav: boolean;
}

export default function MobileNav({ showMobileNav }: IMobileNav) {
  return (
    <div className={`${showMobileNav ? 'block md:hidden' : 'hidden'}`}>
      <div className="pt-5 pb-16">
        <NavLinks />
      </div>
      <div className="fixed w-full h-screen z-40 bg-[rgba(0,0,0,0.3)]"></div>
    </div>
  );
}
