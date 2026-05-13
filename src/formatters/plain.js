import { isComplexValue } from '../utils.js'

const formatValue = (value) => {
  if (isComplexValue(value)) {
    return '[complex value]'
  }

  if (typeof value === 'string') {
    return `'${value}'`
  }

  return String(value)
}

const plainFormatters = {
  unchanged: () => null,
  removed: ({ key }) => `Property '${key}' was removed`,
  added: ({ key, value }) => `Property '${key}' was added with value: ${formatValue(value)}`,
  changed: ({ key, value1, value2 }) => `Property '${key}' was updated. From ${formatValue(value1)} to ${formatValue(value2)}`,
}

const formatPlain = (diff) => {
  const lines = diff
    .map(node => plainFormatters[node.type](node))
    .filter(line => line !== null)

  return lines.join('\n')
}

export default formatPlain
