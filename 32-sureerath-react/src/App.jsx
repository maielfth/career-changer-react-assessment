import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Home</h1>
          <nav className="space-x-4">
            <a href="#" className="text-lg font-bold">Owner</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">James - Group X - 61</h2>
          <div className="inline-block bg-gray-300 w-64 h-64 mb-4 flex items-center justify-center">
            <span>picture</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Short Biography:</h3>
          <p className="text-gray-700 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
