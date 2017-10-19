const fs = require("fs");
const token = fs.readFileSync("token");
module.exports = exports = {
    "token": token,
    "prefix": "*",
    "username": "simpleton [*]",
    "createTrigger": (trigger) => {
        return `${exports.prefix}${trigger}`
    }
};