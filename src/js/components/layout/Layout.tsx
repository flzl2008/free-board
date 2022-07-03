import React from 'react';
import { Outlet } from 'react-router-dom';
import Gnb from './Gnb';

export default function Layout() {
  return (
    <>
      <Gnb />
      <main>
        <Outlet />
      </main>
    </>
  );
}
