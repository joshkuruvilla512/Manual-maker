if (process.env.NODE_ENV === 'production') {
  // Production
  module.exports = require('./prod');
} else {
  // Development
  module.exports = require('./dev');
}