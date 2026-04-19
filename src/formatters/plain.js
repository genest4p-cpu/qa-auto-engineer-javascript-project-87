const formatValue = value => {
  if (value !== null && typeof value === 'object') {
    return '[complex value]'
  }

  if (typeof value === 'string') {
    return `'${value}'`
  }

  return String(value)
}

const plain = diff => {
  const lines = []

  for (let index = 0; index < diff.length; index += 1) {
    const current = diff[index]
    const next = diff[index + 1]

    if (current.type === 'unchanged') {
      continue
    }

    if (current.type === 'removed' && next && next.type === 'added' && next.key === current.key) {
      lines.push(`Property '${current.key}' was updated. From ${formatValue(current.value)} to ${formatValue(next.value)}`)
      index += 1
      continue
    }

    if (current.type === 'removed') {
      lines.push(`Property '${current.key}' was removed`)
      continue
    }

    if (current.type === 'added') {
      lines.push(`Property '${current.key}' was added with value: ${formatValue(current.value)}`)
    }
  }

  return lines.join('\n')
}

export default plain
