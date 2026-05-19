import React, { useState } from 'react';
import { isRequired, isEmail, isPassword } from './utils/validators.js';
import { isEmailDuplicate } from './utils/storage.js';

const InterestForm = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!isRequired(form.firstName)) newErrors.firstName = 'First name is required.';
    if (!isRequired(form.lastName)) newErrors.lastName = 'Last name is required.';
    if (!isRequired(form.email)) newErrors.email = 'Email is required.';
    else if (!isEmail(form.email)) newErrors.email = 'Invalid email address.';
    else if (isEmailDuplicate(form.email)) newErrors.emailDup = 'This email has already been submitted.';
    if (!isRequired(form.password)) newErrors.password = 'Password is required.';
    else if (!isPassword(form.password)) newErrors.password = 'Password must be at least 8 characters and include a number.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="container py-1 text-center mt-1">
        <h2 className="font-semibold">Thank you!</h2>
        <p className="mt-1">Your interest has been recorded.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="container py-1 bg-white p-1 rounded shadow-md max-w-md mx-auto">
      {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
      {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      {errors.emailDup && <p className="text-red-600 text-sm mt-1">{errors.emailDup}</p>}
      {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}

      <div className="flex flex-col mt-1">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className="border p-1 w-full mb-1"
        />
      </div>

      <div className="flex flex-col mt-1">
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className="border p-1 w-full mb-1"
        />
      </div>

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
        Submit
      </button>
    </form>
  );
};

export { InterestForm };

Created src/components/InterestForm.jsx with a form that validates required fields, email format, password complexity, and checks for duplicate email, displaying a thank‑you message after successful submission.