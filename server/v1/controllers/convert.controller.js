const {
  findByIdAndDelete,
  findOneAndUpdate,
  error,
  State,
  User,
} = require("../../core/index");
const { convert_service } = require("../services/convert.service");

// Check fa
async function convert(req, res, next) {
  try {
    const getState = await convert_service({ _id: req.params.id });
    if (getState === 0) {
      res.send({
        message: "Not Success",
      });
    } else if (getState === 1) {
      res.send({
        message: "Success",
      });
    }
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

module.exports = {
  convert,
};
