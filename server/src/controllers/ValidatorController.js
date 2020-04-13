import validator from '../utils/validator';

module.exports = (req, res, next) => {
  const validatorMethods = validator[req.path];
  if (validatorMethods) {
    const validatorMethod = validatorMethods[req.method.toUpperCase()];
    if (validatorMethod) {
      const errors = validatorMethod(req);
      if(errors) {
        return res.status(402).json(errors.details);
      }
    }
  }
  return next();
};