/**
 *  Utility to print a deprecation warning.
 */
function deprecated(msg, parameters, prefix) {
  if(process.env.NODE_ENV === 'test') return;
  prefix = prefix !== undefined ? prefix : 'deprecated ! ';
  msg = prefix + msg;
  if(parameters && parameters.length) {
    return console.warn(msg, parameters);
  }
  console.warn(msg);
}

module.exports = deprecated;
