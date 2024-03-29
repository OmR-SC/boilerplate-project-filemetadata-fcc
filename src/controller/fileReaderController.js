const { saveFile } = require("../utils/saveFile");

const getFileMetadata = (req, res) => {
  const file = req.file;
  console.log(req.file);
  saveFile(file);
  const response = {
    name: file.originalname,
    type: file.mimetype,
    size: file.size,
  };

  return res.json(response);
};

module.exports = { getFileMetadata };
