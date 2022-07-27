const User = require("../models/user.model");
const { registerInfoValidator } = require("../validation/user.validation");
exports.CREATE_USER = async (req, res) => {
  try {
    const { error } = registerInfoValidator(req.body);
    const { first_name, last_name, email, password, contact } = req.body;
    if (error)
      return res.status(400).json({ errorMessage: error.details[0].message });

    console.log(req.body);

    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
      contact,
    });
    const saveUser = await newUser.save();
    if (saveUser) {
      res
        .status(200)
        .json({ successMessage: "Successfully created an account" });
    }
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ errorMessage: "Somthing went wrong while creating an account" });
  }
};
