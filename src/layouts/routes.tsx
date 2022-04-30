import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import { App } from './app/pages';
import { PageError401 } from './errors/401';

const routes: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/error/401" element={<PageError401 />} />
    <Route path="/error/500" element={<h1>Error 500</h1>} />

    <Route path="/admin" element={
      <PrivateRoute component={<h1>Page private admin</h1>} />}
    />
  </Routes>
);

export default routes;
