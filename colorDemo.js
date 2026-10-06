const chalk = require("chalk");
const { hexToRGB } = require("./src/colorConverter");

const hex = "#FF5733";
const rgb = hexToRGB(hex);

console.log(chalk.blue(`Hex color: ${hex}`));
console.log(chalk.green(`RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`));