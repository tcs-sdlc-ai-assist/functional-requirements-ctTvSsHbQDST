import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isRequired, isEmail, isPassword } from '../utils/validators';

const EditModal = ({ isOpen, submission, onClose }) => {
  const [form, setForm] = useState({ ...submission });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!isRequired(form.firstName)) newErrors.firstName = 'First name is required.';
    if (!isRequired(form.lastName)) newErrors.lastName = 'Last name is required.';
    if (!isRequired(form.email)) newErrors.email = 'Email is required.';
    else if (!isEmail(form.email)) newErrors.email = 'Invalid email address.';
    if (!isRequired(form.password)) newErrors.password = 'Password is required.';
    else if (!isPassword(form.password))
      newErrors.password = 'Password must be at least 8 characters and include a number.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      setTimeout(() => {
        onClose();
      }, 500);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg max-w-2xl w-full p-4">
        <h2 className="text-lg font-semibold mb-2">Edit Submission</h2>
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
        {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
        {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
        <form onSubmit={handleSubmit} className="mt-2 space-y-2">
          <div className="flex flex-col">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="border p-1 w-full mb-1"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="border p-1 w-full mb-1"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border p-1 w-full mb-1"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="border p-1 w-full mb-1"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-primary-color text-white px-3 py-1 rounded mr-2"
            >
              {submitting ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-secondary-color text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  submission: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditModal;

Created src/components/EditModal.jsx – a reusable modal component for editing submissions with validation, save, and cancel functionality. It can be used in the admin dashboard edit flow. Run `npm run dev` to see it in action.