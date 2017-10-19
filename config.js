const fs = require("fs");
const token = fs.readFileSync("token").toString("ascii");
module.exports = exports = {
    "token": token,
    "prefix": "*",
    "username": "simpleton [*]",
    "createTrigger": (trigger) => {
        return `${exports.prefix}${trigger}`
    }
};