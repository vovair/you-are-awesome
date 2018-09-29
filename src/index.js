// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propertyName => propertyName;
const createNotEnumerableProperty = propertyName => Symbol(propertyName);
const createProtoMagicObject = () => {
  const magic = () => {};
  magic.prototype = Function.prototype;
  return magic;
};

let counter = 0;
const incrementor = () => {
  counter++;
  const result = () => {
    counter++;
    return result;
  };
  result.valueOf = () => counter;
  return result;
};

let asyncCounter = 0;
const asyncIncrementor = () => {
  asyncCounter++;
  return Promise.resolve(asyncCounter);
};
const createIncrementer = function*() {
  let result = 1;
  while (true) yield result++;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = value => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });
};

const getDeepPropertiesCount = obj => {
  let keys = Object.keys(obj);
  if (keys.length == 0) return 0;
  let count = keys.length;
  for (let elem of keys) {
    if (typeof obj[elem] === "object") count += getDeepPropertiesCount(obj[elem]);
  }
  return count;
};
const createSerializedObject = () => {
  return null;
};
const toBuffer = () => {};
const sortByProto = arr => {
  return arr.sort((obj1, obj2) => {
    return obj1.__proto__ < obj2.__proto__ ? -1 : obj1.__proto__ > obj2.__proto__ ? 1 : 0;
  });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
