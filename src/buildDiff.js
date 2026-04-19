import sortBy from 'lodash/sortBy.js';

const buildDiff = (data1, data2) => {
  const keys = sortBy([...new Set([...Object.keys(data1), ...Object.keys(data2)])]);

  return keys.flatMap((key) => {
    if (!(key in data2)) {
      return { key, type: 'removed', value: data1[key] };
    }

    if (!(key in data1)) {
      return { key, type: 'added', value: data2[key] };
    }

    if (data1[key] === data2[key]) {
      return { key, type: 'unchanged', value: data1[key] };
    }

    return [
      { key, type: 'removed', value: data1[key] },
      { key, type: 'added', value: data2[key] },
    ];
  });
};

export default buildDiff;
