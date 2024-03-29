const fs = require("node:fs")
const saveFile = (file)=>{

    const newPath = `./src/uploads/${file.originalname}`;

    fs.renameSync(file.path, newPath)

    return newPath
}

module.exports = {saveFile}