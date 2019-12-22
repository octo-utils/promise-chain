export default async function(iterable, input = null) {
  if (typeof Reflect.get([], Symbol.iterator) !== "function") {
    throw new TypeError(
      `${typeof iterable} is not iterable (cannot read property Symbol(Symbol.iterator))`
    );
  }

  return Array.from(iterable).reduce((last, makePromise, index) => {
    if (typeof makePromise !== 'function') {
      throw new TypeError(
        `[${index}] ${typeof makePromise} is not function, expected item to be a function`
      );
    }
    return last.then(makePromise);
  }, Promise.resolve(input));
}
