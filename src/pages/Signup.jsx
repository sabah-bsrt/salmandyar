import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const diseases = [
    "Diabetes",
    "High Blood Pressure",
    "Heart Disease",
    "Arthritis",
    "Alzheimer's Disease",
    "Other",
    "None",
  ];

  function handleDiseaseChange(disease) {
    if (disease === "None") {
      setSelectedDiseases(["None"]);
      return;
    }

    setSelectedDiseases((previous) => {
      const withoutNone = previous.filter((item) => item !== "None");

      if (withoutNone.includes(disease)) {
        return withoutNone.filter((item) => item !== disease);
      }

      return [...withoutNone, disease];
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    data.diseases = selectedDiseases;

    console.log("Signup data:", data);
    alert("Signup form submitted!");
  }

  return (
    <div className="signup-page">
      <div className="signup-card">

        <h1>Create Your Account</h1>
        <p className="signup-description">
          Join Salmandyar today
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>

          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Mobile Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" required defaultValue="">
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="birthDate">Date of Birth</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              required
            />
          </div>

          {/* User Type */}
          <div className="form-group">
            <label htmlFor="user-type">User Type</label>
            <select id="user-type" name="user-type" required defaultValue="">
              <option value="" disabled>Select User Type</option>
              <option value="Student">Student</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          {/* Diseases */}
          <div className="form-group">
            <label>Medical Conditions</label>
            <p className="form-hint">
              Select all that apply
            </p>

            <div className="checkbox-group">
              {diseases.map((disease) => (
                <label key={disease}>
                  <input
                    type="checkbox"
                    name="diseases"
                    value={disease}
                    checked={selectedDiseases.includes(disease)}
                    onChange={() => handleDiseaseChange(disease)}
                  />
                  {disease}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="signup-submit">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Log In</a>
        </p>

      </div>
    </div>
  );
}

export default Signup;