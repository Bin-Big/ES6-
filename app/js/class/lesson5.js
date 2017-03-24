{
  // 二进制
  console.log(0b111110111 === 503)
  // 八进制
  console.log(0o767 === 503);
}

{
  console.log('15',Number.isFinite(15));  // true
  console.log('0.8',Number.isFinite(0.8)); // true
  console.log('NaN',Number.isFinite(NaN)); // false
  console.log('Infinity', Number.isFinite(Infinity)); // false
  console.log('-Infinity',Number.isFinite(-Infinity));// false
  console.log('1/0',Number.isFinite(1/0));// true
  console.log('foo',Number.isFinite('foo'));// false
  console.log('NaN',Number.isNaN(NaN));//true
  console.log('t/0',Number.isNaN('t'/0));//false
}

{
  console.log('25',Number.isInteger(25));//true
  console.log('25.0',Number.isInteger(25.0));// true
  console.log('25.1',Number.isInteger(25.1)); // false
  console.log('15',Number.isInteger("15")); // false
  console.log('true',Number.isInteger(true));// false
}

{
  // JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
  console.log('2-53',Math.pow(2, 53));
  console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
}

{
  // 里面一定是数，判断是不是安全
  console.log('a',Number.isSafeInteger('a'));
  console.log('13',Number.isSafeInteger(13));
}

{
  // Math.trunc方法用于去除一个数的小数部分，返回整数部分。
  console.log(4.1,Math.trunc(4.1));
  console.log(4.9,Math.trunc(4.9));
  console.log(-4.1,Math.trunc(-4.1));
  console.log(-4.9,Math.trunc(-4.9));
  console.log(-0.1234,Math.trunc(-0.1234));
}

{
  // Math.sign方法用来判断一个数到底是正数、负数、还是零。
  console.log('-5',Math.sign(-5));// -1
  console.log('5',Math.sign(5));// +1
  console.log('0',Math.sign(0));// +0
  console.log('-0',Math.sign(-0)); // -0
  console.log('Nan',Math.sign(NaN)); // NaN
  console.log('foo',Math.sign('foo'));// NaN
}

{
  // Math.cbrt方法用于计算一个数的立方根
  console.log('-1',Math.cbrt(-1));// -1
  console.log('0',Math.cbrt(0));// 0
  console.log('1',Math.cbrt(1));// 1
  console.log('2',Math.cbrt(2));// 1.2599210498948734
}
