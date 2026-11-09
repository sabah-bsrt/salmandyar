import "./Login.css";

function Login() {
  return (
    <div className="login-page">
        <div className="login-card">

            <h1>Welcome Back</h1>
            <p className="login-description">Log in to your Salmandyar account</p>

            <form className="login-form">

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password"/>
                </div>

                <button type="submit" className="login-submit">Log In</button>

            </form>

            <p className="signup-text">Don't have an account? <a href="/signup">Sign Up</a></p>
            
            <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
            
            <p><a href="/" className="back-link">Back to Home</a></p>

        </div>
    </div>
  );
}

export default Login;