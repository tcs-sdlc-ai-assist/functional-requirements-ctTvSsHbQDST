/** 
 * Validates if the given value is not empty and not only whitespace.
 * @param {string} value - The value to validate.
 * @returns {boolean} - True if value is truthy after trim, false otherwise.
 */
export function isRequired(value) {
  return value !== undefined && value !== null && value.trim() !== '';
}

/**
 * Validates if the given string is a valid email address.
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if email matches a simple email pattern, false otherwise.
 */
export function isEmail(email) {
  if (!isRequired(email)) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates if the given password meets complexity requirements.
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if password is at least 8 characters and contains at least one number, false otherwise.
 */
export function isPassword(password) {
  if (!isRequired(password)) return false;
  if (password.length < 8) return false;
  return /\d/.test(password);
}

/**
 * Validates if the given string contains only alphanumeric characters.
 * @param {string} str - The string to validate.
 * @returns {boolean} - True if string is alphanumeric, false otherwise.
 */
export function isAlphanumeric(str) {
  if (!isRequired(str)) return false;
  return /^[a-zA-Z0-9]+$/.test(str);
}Created src/utils/validators.js with client‑side validation utilities. To test, import the functions in a component and use them in form validation logic; run the dev server with `npm run dev`.