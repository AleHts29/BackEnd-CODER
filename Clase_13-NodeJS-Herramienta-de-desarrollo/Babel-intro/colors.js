const colorRGB = () => {
  let R = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let G = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let B = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let RGB = `(${R}, ${G}, ${B})`;
  return `Color RGB: ${RGB} - Random`;
};

export default colorRGB;
