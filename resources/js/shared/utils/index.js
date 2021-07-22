/**
 * Define application-wide functions that might be accessed anywhere in the React app
 */

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const { route } = window;

export { classNames, route };
