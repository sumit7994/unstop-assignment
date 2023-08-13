import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set up a layout component for sidebar fixing */}
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
