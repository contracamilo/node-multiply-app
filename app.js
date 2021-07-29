const { createFile } = require("./helpers/multiply");
const { yargs } = require("./config/yargs");
const colors = require("colors/safe");

const {
  argv: { b, l, r },
} = yargs;

createFile(b, l, r)
  .then((res) => {
    console.log(colors.inverse(res, "created"));
  })
  .catch((err) => {
    console.log(colors.red.underline(err));
  });
