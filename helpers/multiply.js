const fs = require("fs");
const colors = require("colors/safe");

const createFile = async (base, list, range) => {
  if (!base) throw new Error(`base missed!`);

  try {
    let output = "";

    for (let index = 1; index <= range; index++) {
      output += `${base} x ${index} = ${index * base}\n`;
    }

    fs.writeFileSync(`./output/tabla-${base}.txt`, output);

    if (list) console.log(colors.gray.bold(output));
    console.log(colors.green(`==Table of ${base} created==`));

    return `tabla-${base}.txt`;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createFile,
};
