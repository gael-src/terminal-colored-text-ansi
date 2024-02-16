// Ansi Color codes:
// https://talyian.github.io/ansicolors/
// https://github.com/fidian/ansi
// https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124

// IMPORT COLORS OBJECT:
import { c } from "./main.js";

// How to use:

console.log(`
--- Text color examples: ---`);
console.log(c.r + "Red Text" + c.end);
console.log(c.g + "Green Text" + c.end);
console.log(c.b + "Blue Text" + c.end);
console.log(c.y + "Yellow Text" + c.end);
console.log(c.m + "Magenta Text" + c.end);
console.log(c.c + "Cyan Text" + c.end);
console.log(c.w + "White Text" + c.end);
console.log(c.k + "Black Text" + c.end);

console.log(`
--- Background color examples: ---`);
console.log(c.R + "Red Background" + c.end);
console.log(c.G + "Green Background" + c.end);
console.log(c.B + "Blue Background" + c.end);
console.log(c.Y + "Yellow Background" + c.end);
console.log(c.M + "Magenta Background" + c.end);
console.log(c.C + "Cyan Background" + c.end);
console.log(c.W + "White Background" + c.end);
console.log(c.K + "Black Background" + c.end);

console.log(`
--- Change text color on colored background: ---`);
console.log(c.R + c.w + "White Text on Red Background" + c.end);
console.log(c.G + c.k + "Black Text on Green Background" + c.end);
console.log(c.B + c.y + "Yellow Text on Blue Background" + c.end);
console.log(c.Y + c.m + "Magenta Text on Yellow Background" + c.end);
console.log(c.M + c.c + "Cyan Text on Magenta Background" + c.end);
console.log(c.C + c.b + "Blue Text on Cyan Background" + c.end);
console.log(c.W + c.g + "Green Text on White Background" + c.end);
console.log(c.W + c.r + "Red Text on White Background" + c.end);
console.log(c.K + c.g + "Green Text on Black Background" + c.end);
console.log(c.K + c.r + "Red Text on Black Background" + c.end);

console.log(`
--- Text attribute examples: ---`);
console.log(c.bol + "Bold Text" + c.end);
console.log(c.dim + "Dim Text" + c.end);
console.log(c.und + "Underlined Text" + c.end);
console.log(c.bli + "Blinking Text" + c.end);
console.log(c.rev + "Reversed Text" + c.end);
console.log(c.hid + "Hidden Text" + c.end);

console.log(`
--- Reset text attribute examples: ---`);
console.log(c.bol + "Bold Text" + c.r_bol + " Normal Text" + c.end);
console.log(c.dim + "Dim Text" + c.r_dim + " Normal Text" + c.end);
console.log(c.und + "Underlined Text" + c.r_und + " Normal Text" + c.end);
console.log(c.bli + "Blinking Text" + c.r_bli + " Normal Text" + c.end);
console.log(c.rev + "Reversed Text" + c.r_rev + " Normal Text" + c.end);
console.log(c.hid + "Hidden Text" + c.r_hid + " Normal Text" + c.end);

console.log(`
--- Combine bol and color: ---`);
console.log(c.bol + c.r + "Bold Red Text" + c.end);
console.log(c.bol + c.g + "Bold Green Text" + c.end);
console.log(c.bol + c.b + "Bold Blue Text" + c.end);
console.log(c.bol + c.y + "Bold Yellow Text" + c.end);
console.log(c.bol + c.m + "Bold Magenta Text" + c.end);
console.log(c.bol + c.c + "Bold Cyan Text" + c.end);
console.log(c.bol + c.w + "Bold White Text" + c.end);
console.log(c.bol + c.k + "Bold Black Text" + c.end);
