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
  changed: ({ key, oldValue, newValue }) => `Property '${key}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`,
}

const formatPlain = (diff) => {
  const lines = diff
    .map(node => plainFormatters[node.type](node))
    .filter(line => line !== null)

  return lines.join('\n')
}

export default formatPlain
