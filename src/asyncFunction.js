module.exports = (cb = null) => {
  if (cb) {
    setTimeout(() => {
      cb(undefined, 'done');
    }, 100);
    return;
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done');
    }, 100);
  });
};
