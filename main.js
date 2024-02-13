// Ansi Color codes:
// https://talyian.github.io/ansicolors/
// https://github.com/fidian/ansi
// https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124

// Farben definieren
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

// Verwendung der Farben
console.log(colors.red + "Roter Text" + colors.reset);
console.log(colors.green + "Grüner Text" + colors.reset);
console.log(colors.blue + "Blauer Text" + colors.reset);
console.log(colors.yellow + "Gelber Text" + colors.reset);
console.log(colors.magenta + "Magenta Text" + colors.reset);
console.log(colors.cyan + "Cyan Text" + colors.reset);
console.log(colors.white + "Weißer Text" + colors.reset);

console.log(`${colors.red}Template string test${colors.reset}`);

// ---
// ---
// ---

// Short version

const c = {
  end: "\x1b[0m",
  re: "\x1b[31m",
  gr: "\x1b[32m",
  ye: "\x1b[33m",
  bl: "\x1b[34m",
  ma: "\x1b[35m",
  cy: "\x1b[36m",
  wh: "\x1b[37m",
};

// Using of colors
console.log(c.re + "Roter Text" + c.end);
console.log(c.gr + "Grüner Text" + c.end);
console.log(c.bl + "Blauer Text" + c.end);
console.log(c.yel + "Gelber Text" + c.end);
console.log(c.ma + "Magenta Text" + c.end);
console.log(c.cy + "Cyan Text" + c.end);
console.log(c.wh + "Weißer Text" + c.end);

console.log(`${c.re}Template string test${c.end}`);
