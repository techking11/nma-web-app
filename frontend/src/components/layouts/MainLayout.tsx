import { Outlet } from 'react-router';
import TopAppbar from '@/components/TopAppbar/TopAppbar';
import Footer from '@/components/Footer/Footer';
import BottomToTop from '@/components/Buttons/BottomToTop';
import ThirtyPx from '@/components/General/ThirtyPx';

export default function MainLayout() {
  return (
    <div className="wrapper">
      <TopAppbar />
      <ThirtyPx />
      <Outlet />
      <Footer />
      <BottomToTop />
    </div>
  );
}
