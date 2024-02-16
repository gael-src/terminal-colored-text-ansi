# terminal-colored-text

Terminal colored text with ansi colors

---

```javascript
const c = {
  // Text color
  end: "\x1b[0m", // reset/close
  r: "\x1b[31m", // red
  g: "\x1b[32m", // green
  y: "\x1b[33m", // yellow
  b: "\x1b[34m", // blue
  m: "\x1b[35m", // magenta
  c: "\x1b[36m", // cyan
  w: "\x1b[37m", // white
  k: "\x1b[30m", // black

  // Background color
  R: "\x1b[41m", // background red
  G: "\x1b[42m", // background green
  Y: "\x1b[43m", // background yellow
  B: "\x1b[44m", // background blue
  M: "\x1b[45m", // background magenta
  C: "\x1b[46m", // background cyan
  W: "\x1b[47m", // background white
  K: "\x1b[40m", // background black

  // Text attributes
  bol: "\x1b[1m", // bold/bright
  dim: "\x1b[2m", // dim
  underscore: "\x1b[4m", // underscore
  bli: "\x1b[5m", // blink
  rev: "\x1b[7m", // reverse/inverse
  hid: "\x1b[8m", // hidden

  // Reset text attributes
  r_bol: "\x1b[21m", // reset bold/bright
  r_dim: "\x1b[22m", // reset dim
  r_und: "\x1b[24m", // reset underscore
  r_bli: "\x1b[25m", // reset blink
  r_rev: "\x1b[27m", // reset reverse/inverse
  r_hid: "\x1b[28m", // reset hidden
};

// How to use:

console.log(`
--- Text color examples ---`);
console.log(c.r + "Red Text" + c.end);
console.log(c.g + "Green Text" + c.end);
console.log(c.b + "Blue Text" + c.end);
console.log(c.y + "Yellow Text" + c.end);
console.log(c.m + "Magenta Text" + c.end);
console.log(c.c + "Cyan Text" + c.end);
console.log(c.w + "White Text" + c.end);
console.log(c.k + "Black Text" + c.end);

console.log(`
--- Background color examples ---`);
console.log(c.R + "Red Background" + c.end);
console.log(c.G + "Green Background" + c.end);
console.log(c.B + "Blue Background" + c.end);
console.log(c.Y + "Yellow Background" + c.end);
console.log(c.M + "Magenta Background" + c.end);
console.log(c.C + "Cyan Background" + c.end);
console.log(c.W + "White Background" + c.end);
console.log(c.K + "Black Background" + c.end);

console.log(`
--- Text attribute examples ---`);
console.log(c.bol + "Bold Text" + c.end);
console.log(c.dim + "Dim Text" + c.end);
console.log(c.und + "Underlined Text" + c.end);
console.log(c.bli + "Blinking Text" + c.end);
console.log(c.rev + "Reversed Text" + c.end);
console.log(c.hid + "Hidden Text" + c.end);

console.log(`
--- Reset text attribute examples ---`);
console.log(c.bol + "Bold Text" + c.r_bol + " Normal Text" + c.end);
console.log(c.dim + "Dim Text" + c.r_dim + " Normal Text" + c.end);
console.log(c.und + "Underlined Text" + c.r_und + " Normal Text" + c.end);
console.log(c.bli + "Blinking Text" + c.r_bli + " Normal Text" + c.end);
console.log(c.rev + "Reversed Text" + c.r_rev + " Normal Text" + c.end);
console.log(c.hid + "Hidden Text" + c.r_hid + " Normal Text" + c.end);

console.log(`
--- Combine bol and color ---`);
console.log(c.bol + c.r + "Bold Red Text" + c.end);
console.log(c.bol + c.g + "Bold Green Text" + c.end);
console.log(c.bol + c.b + "Bold Blue Text" + c.end);
console.log(c.bol + c.y + "Bold Yellow Text" + c.end);
console.log(c.bol + c.m + "Bold Magenta Text" + c.end);
console.log(c.bol + c.c + "Bold Cyan Text" + c.end);
console.log(c.bol + c.w + "Bold White Text" + c.end);
console.log(c.bol + c.k + "Bold Black Text" + c.end);
```

---

**Ansi Color codes:**

- https://talyian.github.io/ansicolors/
- https://github.com/fidian/ansi
- https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124
