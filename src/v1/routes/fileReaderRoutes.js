const { Router } = require("express");
const multer = require("multer");
const { getFileMetadata } = require("../../controller/fileReaderController");
const upload = multer({ dest: "src/uploads" });

const router = Router();

router.post("/fileanalyse", upload.single("upfile"), getFileMetadata);

module.exports = router;
