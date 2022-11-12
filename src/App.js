import React from 'react'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import './scss/style.scss'
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { currentUser } = React.useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to='/login' />
    return children
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
