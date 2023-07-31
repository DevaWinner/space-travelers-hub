import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="all-container">
        <Routes>
          <Route path="/" element={<h />} />
          <Route path="/c" element={<c />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
