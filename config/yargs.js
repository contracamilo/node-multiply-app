const yargs = require("yargs");

yargs.options({
  b: {
    alias: "base",
    type: "number",
    describe: "-b --base base to create a multiplication table",
    demandOption: true,
  },
  l: {
    alias: "list",
    type: "boolean",
    describe: "-l --list list the output",
    demandOption: false,
    default: "false",
  },
  r: {
    alias: "range",
    type: "number",
    describe: "-r --range length of the table",
    default: "10",
    demandOption: false,
  },
});

yargs.check((argv, options) => {
  const { b, l, r } = argv;
  if (isNaN(b) || isNaN(r)) throw new Error("argument must be a number");
  if (typeof l !== "boolean")
    throw new Error("argument must be a boolean value");
  return true;
});

module.exports = {
  yargs,
};
