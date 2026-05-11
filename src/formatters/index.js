import formatJson from './json.js'
import formatPlain from './plain.js'
import formatStylish from './stylish.js'

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
}

const formatDiff = (diff, outputFormat = 'stylish') => {
  const formatter = formatters[outputFormat]

  if (!formatter) {
    throw new Error(`Unsupported output format: ${outputFormat}`)
  }

  return formatter(diff)
}

export default formatDiff
