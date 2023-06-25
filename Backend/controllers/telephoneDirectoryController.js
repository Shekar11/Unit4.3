const BaseController = require("./baseController");
const TelephoneDirectoryModel = require("../models/telephoneDirectoryModel");
class TelephoneDirectory extends BaseController {
  constructor() {
    super(TelephoneDirectory, TelephoneDirectoryModel);
  }
}
module.exports = new TelephoneDirectory();
