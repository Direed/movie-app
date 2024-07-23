import React from 'react';
import './App.css';
import AppLayout from "./components/layouts/AppLayout";
import HomePage from "./pages/HomePage";

function App() {

    return (
        <div className="App">
      <AppLayout>
          <HomePage />
      </AppLayout>
    </div>
    );
}

export default App;
