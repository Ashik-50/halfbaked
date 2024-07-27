import React from 'react';
import AdminRouter from './components/Admin/Routes/AdminRouter';
import DoctorRouter from './components/Doctor/Routes/DocRouter';
function App() {
  return (
    <div className="App">
      <DoctorRouter />
    </div>
  );
}

export default App;