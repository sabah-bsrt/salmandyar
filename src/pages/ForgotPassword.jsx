import "./ForgotPassword.css";

function ForgotPassword() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");

    console.log("Password reset requested for:", email);

    alert("If an account exists with this email, you will receive password reset instructions.");
  }

  return (
    <div className="forgot-page">
      <div className="forgot-card">

        <div className="forgot-icon">
          🔐
        </div>

        <h1>Forgot Password?</h1>

        <p className="forgot-description">
          Don't worry! Enter your email address and
          we'll help you reset your password.
        </p>

        <form className="forgot-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <button type="submit" className="reset-submit">
            Send Reset Instructions
          </button>

        </form>

        <a href="/login" className="back-to-login">
          Back to Log In
        </a>

      </div>
    </div>
  );
}

export default ForgotPassword;