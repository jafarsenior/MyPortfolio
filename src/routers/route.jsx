import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loading from '../components/Loading/Loading'; // 👈 loading komponent import qilindi

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Services = lazy(() => import('../pages/Services/Services'));
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio'));
const Resume = lazy(() => import('../pages/Resume/Resume'));
const Contact = lazy(() => import('../pages/contact/Contact')); // 👈 E'tibor bering: 'contact' kichik harflarda!
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const loader = (Component) => (
  <Suspense fallback={<Loading />}> {/* 👈 Custom loading ishlatildi */}
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: loader(Home) },
      { path: 'about', element: loader(About) },
      { path: 'services', element: loader(Services) },
      { path: 'portfolio', element: loader(Portfolio) },
      { path: 'resume', element: loader(Resume) },
      { path: 'contact', element: loader(Contact) },
      { path: '*', element: loader(NotFound) },
    ],
  },
]);

export default router;
