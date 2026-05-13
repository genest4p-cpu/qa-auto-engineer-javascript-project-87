const formatValue = value => String(value)

const stylishFormatters = {
  unchanged: ({ key, value }) => [`    ${key}: ${formatValue(value)}`],
  removed: ({ key, value }) => [`  - ${key}: ${formatValue(value)}`],
  added: ({ key, value }) => [`  + ${key}: ${formatValue(value)}`],
  changed: ({ key, value1, value2 }) => [
    `  - ${key}: ${formatValue(value1)}`,
    `  + ${key}: ${formatValue(value2)}`,
  ],
}

const formatStylish = (diff) => {
  const lines = diff.flatMap(node => stylishFormatters[node.type](node))

  return ['{', ...lines, '}'].join('\n')
}

export default formatStylish
