/** 
 * Provides CRUD utilities for localStorage and duplicate‑email checks.
 * All functions are pure and use JSON serialization for complex values.
 */

/**
 * Saves a value to localStorage under the specified key.
 * @param {string} key - The storage key.
 * @param {any} value - The value to store.
 */
export function setItem(key, value) {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

/**
 * Retrieves a value from localStorage by key.
 * @param {string} key - The storage key.
 * @returns {any|null} - The parsed value or null if not found.
 */
export function getItem(key) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? null : JSON.parse(stored);
  } catch (e) {
    console.error('Failed to read from localStorage:', e);
    return null;
  }
}

/**
 * Removes a key/value pair from localStorage.
 * @param {string} key - The storage key to remove.
 */
export function removeItem(key) {
  localStorage.removeItem(key);
}

/**
 * Clears all entries from localStorage.
 */
export function clearStorage() {
  localStorage.clear();
}

/**
 * Checks whether the given email already exists in the stored email list.
 * The email list is stored under the key "emails" as a JSON array.
 * @param {string} email - The email to check.
 * @returns {boolean} - True if the email is a duplicate, false otherwise.
 */
export function isEmailDuplicate(email) {
  if (typeof email !== 'string' || email.trim() === '') return false;
  const stored = getItem('emails');
  if (!Array.isArray(stored)) return false;
  return stored.includes(email.trim());
}