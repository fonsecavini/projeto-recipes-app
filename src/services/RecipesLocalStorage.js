export function getName(item) {
  return JSON.parse(localStorage.getItem(item));
}

export function setName(item, data) {
  localStorage.setItem(item, JSON.stringify(data));
}
