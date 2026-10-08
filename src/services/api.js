
/**
 * Get a JSON value from localStorage
 * @param {string} key - key to get localStorage item parsed to JSON format
 * @returns a JSON object if it exists, else a empty string
 */
export function getJSON(key) {
  const jsonObj = JSON.parse(localStorage.getItem(key));
  if (jsonObj !== null) {
    return jsonObj;
  }
  return "";
}

/**
 * Get an item from localStorage
 * @param {string} key - key to get localStorage item 
 * @returns a string if it exists, else a empty string
 */
export function saveItem(key, value) {
  const valueString = typeof value !== "string" ? JSON.stringify(value) : value;
  localStorage.setItem(key, valueString);
}

/**
 * Check that an item exists in localStorage
 * @param {string} key - key of localStorage item 
 * @returns a boolean showing whether the item exists or not
 */
export function checkItemExists(key) {
  const item = localStorage.getItem(key);
  return item !== null;
}

/**
 * Delete an item from localStorage
 * @param {string} key - key to remove localStorage item
 */
export function removeItem(key) {
  localStorage.removeItem(key);
}