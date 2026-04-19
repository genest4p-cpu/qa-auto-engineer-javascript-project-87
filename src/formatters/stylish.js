const formatValue = (value) => String(value);

const typeToPrefix = {
  added: '  + ',
  removed: '  - ',
  unchanged: '    ',
};

const stylish = (diff) => {
  const lines = diff.map(({ key, type, value }) => `${typeToPrefix[type]}${key}: ${formatValue(value)}`);

  return ['{', ...lines, '}'].join('\n');
};

export default stylish;
