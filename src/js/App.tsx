import React from 'react';
import '../css/App.css';
import PostEditor from './pages/PostEditor';
import PostList from './pages/PostList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PostList />}></Route>
            <Route path="/editor/*" element={<PostEditor />}>
              <Route path=":postId"></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
