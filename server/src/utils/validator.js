import Joi from 'joi';

export default {
  '/api/v1/digits/reverse': {
    POST: (req) => {
      const schema = {
        number: Joi.number().required(),

      };

      const { error } = Joi.validate(req.body, schema);

      return error;
    },
  },
};
