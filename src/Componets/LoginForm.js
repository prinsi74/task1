import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const validateForm = () => {
    if (!formData.email) {
      setError('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Email address is invalid');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    setError('');
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true); 
      console.log('Form submitted:', formData);
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="container col-md-6 mt-5">
      <h2 className="mt-5">Login Form</h2>
      <form onSubmit={handleSubmit}>
 
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={formData.email}
          onChange={handleInputChange}
        />

       
        <label htmlFor="password" className="form-label mt-3">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={formData.password}
          onChange={handleInputChange}
        />

      
        {error && <p className="text-danger mt-2">{error}</p>}

       
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>

    
      {success && <p className="text-success mt-3">Login successful!</p>}
    </div>
  );
}

export default LoginForm;
