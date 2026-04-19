import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
};

const formatDiff = (diff, formatName = 'stylish') => {
  const formatter = formatters[formatName];

  if (!formatter) {
    throw new Error(`Unsupported output format: ${formatName}`);
  }

  return formatter(diff);
};

export default formatDiff;
