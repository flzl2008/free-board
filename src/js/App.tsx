import React from 'react';
import '../css/App.css';
import PostEditor from './components/PostEditor';
import PostList from './components/PostList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostList />}></Route>
            <Route path="/editor" element={<PostEditor />}></Route>
            <Route path="/editor/:postId" element={<PostEditor />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
