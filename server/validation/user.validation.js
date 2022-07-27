const Joi = require("joi");
exports.registerInfoValidator = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().min(2).max(255).required(),
    last_name: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    contact: Joi.string().max(11).required(),
    address: Joi.object({
      house_number: Joi.string().min(2).max(255),
      street: Joi.string().min(2).max(255),
      barangay: Joi.string().min(2).max(255),
      city_municipality: Joi.string().min(2).max(255),
      province: Joi.string().min(2).max(255),
      zipcode: Joi.number().min(4).max(4),
    }),
  });
  return schema.validate(data);
};
