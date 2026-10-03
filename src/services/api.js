
/**
 * 
 * @param {string} key - key to get localStorage item parsed to JSON format
 * @returns a json object if existing, else a empty string
 */
export function getJson(key) {
  const jsonObj = JSON.parse(localStorage.getItem(key));
  if (jsonObj !== null) {
    return jsonObj;
  }
  return "";
}

/**
 * 
 * @param {string} key - key to get localStorage item 
 * @returns a string if existing, else a empty string
 */
export function getItem(key) {
  const item = localStorage.getItem(key);
  if (item !== null) {
    return item;
  }
  return "";
}

/**
 * 
 * @param {string} key - key to remove localStorage item
 */
export function removeItem(key) {
  localStorage.removeItem(key);
}


