import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AdminDashboard = () => {
  useEffect(() => {
    if (!sessionStorage.getItem('adminLoggedIn')) {
      // Access denied; component will render guard message below
    }
  }, []);

  const [submissions, setSubmissions] = useState([
    { id: 1, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', status: 'Pending' },
    { id: 2, firstName: 'Bob', lastName: 'Jones', email: 'bob@example.com', status: 'Approved' },
  ]);

  const handleEdit = (id) => {
    const updated = submissions.map(s => s.id === id ? { ...s, status: 'Edit mode' } : s);
    setSubmissions(updated);
  };

  const handleSave = (id) => {
    const updated = submissions.map(s => s.id === id ? { ...s, status: 'Approved' } : s);
    setSubmissions(updated);
  };

  const handleDelete = (id) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
  };

  if (!sessionStorage.getItem('adminLoggedIn')) {
    return (
      <div className="container py-1 text-center mt-1">
        <h2 className="font-semibold">Access Denied</h2>
        <p>Admin login required to view this dashboard.</p>
      </div>
    );
  }

  return (
    <div className="container py-1">
      <h1 className="mt-1">Admin Dashboard</h1>
      <p className="mt-1">Submissions Overview</p>

      <div className="mt-1 flex flex-col items-center space-y-2">
        <button onClick={() => alert('Export CSV functionality would go here.')}>
          Export Submissions
        </button>
      </div>

      <div className="mt-2">
        <table className="w-full border-collapse collapse">
          <thead>
            <tr>
              <th className="border p-1">ID</th>
              <th className="border p-1">First Name</th>
              <th className="border p-1">Last Name</th>
              <th className="border p-1">Email</th>
              <th className="border p-1">Status</th>
              <th className="border p-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map(sub => (
              <tr key={sub.id}>
                <td className="border p-1">{sub.id}</td>
                <td className="border p-1">{sub.firstName}</td>
                <td className="border p-1">{sub.lastName}</td>
                <td className="border p-1">{sub.email}</td>
                <td className="border p-1">{sub.status}</td>
                <td className="border p-1">
                  {sub.status !== 'Approved' && (
                    <button onClick={() => handleEdit(sub.id)} className="bg-secondary-color text-white px-1 py-0.5 rounded">
                      Edit
                    </button>
                  )}
                  <button onClick={() => handleSave(sub.id)} className="bg-primary-color text-white px-1 py-0.5 rounded ml-1">
                    Save
                  </button>
                  <button onClick={() => handleDelete(sub.id)} className="bg-secondary-color text-white px-1 py-0.5 rounded ml-1">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

AdminDashboard.propTypes = {};

export default AdminDashboard;

This file creates src/components/AdminDashboard.jsx, a protected admin dashboard that checks for a sessionStorage flag 'adminLoggedIn', displays a table of mock submissions with edit, save, and delete actions, and shows an access‑denied message when not logged in. To test, run `npm run dev` and navigate to a route that renders the component (e.g., add a route '/admin' in the router) and ensure the login flag is set via the AdminLogin component. The component uses only existing CSS utility classes and does not introduce new dependencies.