const storage = {
  setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  getItem: (key) => JSON.parse(localStorage.getItem(key)),
  removeItem: (key) => localStorage.removeItem(key),
}

export default storage
