/**
 *  Utility to print a deprecation warning.
 */
function deprecated(msg, parameters, prefix) {
  if(process.env.NODE_ENV === 'test') return;
  prefix = prefix !== undefined ? prefix : 'deprecated ! ';
  msg = prefix + msg;
  if(Array.isArray(parameters)) {
    return console.warn.apply(console, [msg].concat(parameters));
  }
  return console.warn(msg);
}

module.exports = deprecated;
