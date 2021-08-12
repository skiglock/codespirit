const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

const boxShadow = (color) => {
  return `5px 8px 0px ${hex2rgba(color, 0.85)}`
}

export default boxShadow
