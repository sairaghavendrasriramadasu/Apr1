import React, { useState } from "react";
import "./form.css"; // Importing CSS for styling

const initialState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  address: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
  terms: false,
};

export default function ConditionalForm() {
  const [formData, setFormData] = useState(initialState);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    // 1. Required field validation for all 10 fields
    const requiredFields = ['name', 'email', 'phone', 'password', 'confirmPassword', 'address', 'city', 'state', 'country', 'zipCode'];
    const isAnyFieldEmpty = requiredFields.some(field => !formData[field].trim());

    if (isAnyFieldEmpty) {
      setError("All fields are required");
      return;
    }

    // 2. Email format validation
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    // 3. Password length check
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // 4. Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // 5. Zip code length check
    if (formData.zipCode.length < 5) {
      setError("Zip code must be at least 5 digits");
      return;
    }

    // 6. Terms checkbox validation
    if (!formData.terms) {
      setError("You must accept the terms and conditions");
      return;
    }

    // Success
    setError("");
    alert("Form submitted successfully!");
    console.log("Final Data:", formData);
    setFormData(initialState);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleForm} className="registration-form">
        <h2>Registration Form</h2>
        
        {error && <p className="error-message">{error}</p>}

        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
        
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
        
        <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} />

        <div className="checkbox-container">
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
          <label htmlFor="terms">I accept the terms</label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}