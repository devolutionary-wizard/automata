const {
  findByIdAndDelete,
  findOneAndUpdate,
  error,
  State,
  User,
} = require("../../core/index");
const { check_fa_service } = require("../services/check_fa.service");

// Check fa
async function check_fa(req, res, next) {
  try {
    const getState = await check_fa_service({ _id: req.params.id });
    if (getState === 0) {
      res.send({
        message: "DFA",
      });
    } else if (getState === 1) {
      res.send({
        message: "NFA",
      });
    }
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

module.exports = {
  check_fa,
};
