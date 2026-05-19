import React from 'react';
import PropTypes from 'prop-types';

const SubmissionTable = ({ submissions, onEdit, onSave, onDelete }) => {
  return (
    <div style={{ overflowY: 'auto', maxHeight: '400px', marginBottom: '1rem' }}>
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
                  <button
                    onClick={() => onEdit(sub.id)}
                    className="bg-secondary-color text-white px-1 py-0.5 rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => onSave(sub.id)}
                  className="bg-primary-color text-white px-1 py-0.5 rounded ml-1"
                >
                  Save
                </button>
                <button
                  onClick={() => onDelete(sub.id)}
                  className="bg-secondary-color text-white px-1 py-0.5 rounded ml-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SubmissionTable.propTypes = {
  submissions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SubmissionTable;

Created src/components/SubmissionTable.jsx with a responsive table component that renders submissions, includes edit, save, and delete action buttons, applies existing CSS utility classes, and defines PropTypes for the expected props. To use, render <SubmissionTable submissions={...} onEdit={...} onSave={...} onDelete={...} /> within a route that provides the necessary data and callbacks. Run `npm run dev` to verify the component displays correctly and handles actions as expected.