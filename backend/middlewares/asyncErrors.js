// middleware for handling, and resolving the async errors

module.exports = (asyncError) => (req, res, next) => {
  Promise.resolve(asyncError(req, res, next)).catch(next);
};
