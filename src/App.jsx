import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";

function App() {
  const currentPath = window.location.pathname;
  
  if (currentPath === "/login") {
    return <Login />;
  }

  if (currentPath === "/signup") {
    return <Signup />;
  }

  if (currentPath === "/forgot-password") {
    return <ForgotPassword />;
  }

  return (
    <div className="welcome-container">
      <div className="welcome-card">

        <img src="/login-logo.jpg"  alt="Salmandyar"  className="welcome-image"  />

        <h1 className="welcome-title">Welcome to Salmandyar</h1>

        <p className="welcome-description">Smart companionship for a better life</p>

        <div className="button-container">
          <button className="login-button" onClick={() => {window.location.href="/login";}}>Log In</button>
          <button className="signup-button" onClick={() => {window.location.href="/signup";}}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
