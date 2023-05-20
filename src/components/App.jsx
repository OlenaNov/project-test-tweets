import { Suspense, lazy } from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
  );
};
