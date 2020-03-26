import React from 'react';
import './App.css';
import BucketMain from "./main/BucketMain"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Bucket List</h2>
      </header>
      <section>
        <BucketMain />
      </section>
    </div>
  );
}

export default App;
