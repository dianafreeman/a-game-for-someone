const zeroToHalf = (half) => {
  const out = [];
  for (let i = 0; i < (half / 2); i += 1) {
    out.push(i);
  }
  return out;
};

export const negToPosRange = (size) => {
  const pos = zeroToHalf((size - 1 / 2));
  const reversed = [...pos].reverse();
  const neg = reversed.slice(0, -1).map((i) => -i);
  return [...neg, ...pos];
};

export const RowData = (xSize, yPosition) => {
  const xS = negToPosRange(xSize);
  const rowData = xS.map((x) => [x, yPosition]);
  return rowData;
};
