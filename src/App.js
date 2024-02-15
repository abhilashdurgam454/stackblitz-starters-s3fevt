import React, { createContext } from 'react';
import ChildA from './ChildA';

// Create a new context
const DataContext = createContext();

function App() {
  const name = "harhita";

  return (
    <div>
      {/* Provide the value of the context */}
      <DataContext.Provider value={name}>
        <ChildA />
      </DataContext.Provider>
    </div>
  );
}

export default App;
export { DataContext }; // Export the context for use in other files
