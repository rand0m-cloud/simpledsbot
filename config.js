const fs = require("fs");
const token = fs.readFileSync("token").toString("ascii");
module.exports = exports = {
    "token": token,
    "trigger": "*",
    "prefix": new RegExp("^\\"+"*"),
    "username": "simpleton [*]"
};