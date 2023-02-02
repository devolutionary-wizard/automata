const {
  findByIdAndDelete,
  findOneAndUpdate,
  error,
  State,
  User,
} = require("../../core/index");
const { accept_string_service } = require("../services/accept_string.service");

// Check fa
async function accept_string(req, res, next) {
  try {
    const result = await accept_string_service(req.body);
    if (result === 0) {
      res.send({
        message: "Rejected",
      });
    } else if (result === 1) {
      res.send({
        message: "Accepted",
      });
    } else {
      res.send({
        message: "String is not included!",
      });
    }
  } catch (err) {
    res.send({ message: "Not found" });
  }
}

module.exports = {
  accept_string,
};
