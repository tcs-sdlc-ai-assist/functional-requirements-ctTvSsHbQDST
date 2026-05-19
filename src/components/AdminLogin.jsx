import React, { useState } from 'react';
import { isRequired, isEmail } from '../utils/validators.js';
import PropTypes from 'prop-types';

const AdminLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!isRequired(form.email)) newErrors.email = 'Email is required.';
    else if (!isEmail(form.email)) newErrors.email = 'Invalid email address.';
    if (!isRequired(form.password)) newErrors.password = 'Password is required.';
    else if (form.password !== 'admin123') newErrors.password = 'Incorrect password.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      sessionStorage.setItem('adminLoggedIn', 'true');
      setMessage('Admin logged in successfully.');
    }
  };

  if (submitted) {
    return (
      <div className="container py-1 text-center mt-1">
        <h2 className="font-semibold">Success</h2>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="container py-1 bg-white p-1 rounded shadow-md max-w-md mx-auto">
      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
      <div className="flex flex-col mt-1">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border p-1 w-full mb-1"
        />
      </div>
      <div className="flex flex-col mt-1">
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="border p-1 w-full mb-1"
        />
      </div>
      <button type="submit" className="mt-2 w-full bg-primary-color">
        Login
      </button>
    </form>
  );
};

AdminLogin.propTypes = {};

export default AdminLogin;

Created src/components/AdminLogin.jsx with an admin login form that validates email and password, uses hardcoded credentials ("admin123"), stores a login flag in sessionStorage, and shows a success message after submission. To test, run `npm run dev` and navigate to the appropriate route (e.g., /admin or directly load the component) to verify the login functionality.