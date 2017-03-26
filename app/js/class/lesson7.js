{
    // 默认值
    function test(x, y = 'World') {
        console.log(x, y);
    }

    test('hello');
    test('test', 'one');

    // 注意默认值后面不能有非默认值的参数
}

{
    // 因为length属性的含义是，该函数预期传入的参数个数;length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。
    console.log('一个参数', (function(a) {}).length);
    console.log('二个参数', (function(a, b, c, d = 7) {}).length);
}

{
    // 作用域
    let a = 'test';
    function test(x, y = x) {
        console.log({x, y});
    }
    test('kill')
}

{
    // rest参数
    function test(...arg) {
        for (let value of arg) {
          console.log(value);
        }
    }
    test(1,'a','b')
    // 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
}

{
  // name属性
  function testName() {}
  console.log(testName.name); // "foo"
}

{
  // 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列
  console.log(...[1, 2, 3])
  console.log(1, ...[2, 3, 4], 5)
}

{
  // 箭头函数
  let arrow = v => v*2;
  console.log(arrow.name);
  console.log(arrow(2));
  let arrow2=() => 5;
  console.log(arrow2());
}

{
  // 尾调用
  function tail(x){
    console.log('tail',x);
  }
  function fa(x){
    return tail(x);
  }
  fa(123);
}
