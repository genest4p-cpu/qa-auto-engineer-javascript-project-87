const formatValue = (value) => String(value)

const typeToPrefix = {
  added: '  + ',
  removed: '  - ',
  unchanged: '    ',
}

const formatNode = ({ key, type, value, oldValue, newValue }) => {
  if (type === 'changed') {
    return [
      `${typeToPrefix.removed}${key}: ${formatValue(oldValue)}`,
      `${typeToPrefix.added}${key}: ${formatValue(newValue)}`,
    ]
  }

  return [`${typeToPrefix[type]}${key}: ${formatValue(value)}`]
}

const formatStylish = (diff) => {
  const lines = diff.flatMap((node) => formatNode(node))

  return ['{', ...lines, '}'].join('\n')
}

export default formatStylish
