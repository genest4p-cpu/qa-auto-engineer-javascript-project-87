import sortBy from 'lodash/sortBy.js'
import union from 'lodash/union.js'

const buildDiff = (data1, data2) => {
  const keys = sortBy(union(Object.keys(data1), Object.keys(data2)))

  return keys.map((key) => {
    if (!(key in data2)) {
      return { key, type: 'removed', value: data1[key] }
    }

    if (!(key in data1)) {
      return { key, type: 'added', value: data2[key] }
    }

    if (data1[key] === data2[key]) {
      return { key, type: 'unchanged', value: data1[key] }
    }

    return {
      key,
      type: 'changed',
      value1: data1[key],
      value2: data2[key],
    }
  })
}

export default buildDiff
