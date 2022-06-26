import React from 'react';
import '../css/App.css';
import PostEditor from './pages/PostEditor';
import PostList from './pages/PostList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostList />}></Route>
            <Route path="/editor/*" element={<PostEditor />}>
              <Route path=":postId"></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
