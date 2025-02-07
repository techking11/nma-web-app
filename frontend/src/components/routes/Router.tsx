import { Route, Routes } from 'react-router';
import Blog from '@/pages/Blog/Blog';
import MainLayout from '@/components/layouts/MainLayout';
import Research from '@/pages/Research';
import Courses from '@/pages/Courses';
import Portfolio from '@/pages/Portfolio';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import BlogItem from '@/pages/Blog/BlogItem';
import NotFound from '@/pages/NotFound/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Research />} />
        <Route path="blogs">
          <Route index element={<Blog />} />
          <Route path=":id" element={<BlogItem />} />
        </Route>
        <Route path="courses" element={<Courses />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
