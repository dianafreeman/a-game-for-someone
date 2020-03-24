const errorCb = console.error;

console.error = (message) => (/(is using incorrect casing)/.test(message) ? false : message);
