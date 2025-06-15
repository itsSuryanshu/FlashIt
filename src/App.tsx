import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-purple-600">
        <nav className="p-4">
          <ul className="flex gap-4 justify-center">
            <li>
              <Link to="/login" className="text-purple-600 hover:text-purple-800">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-purple-600 hover:text-purple-800">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/app/*"
            element={
              <div>Welcome to FlashIt!</div>
            }
          />
          <Route path="/" element={<Navigate to="/app" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
