{
  // 什么是generator函数？generator函数是什么呢？
  // 其实它还是一个函数，
  // 只是跟我们es5中的函数有两点区别：
  // 一是形式写法上的区别，
  // 二是调用之后内部的执行过程的区别。
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  }

  let k=tell();
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  // 与Iterator接口的关系
  // 任意一个对象的iterator接口都是部署在了Symbol.iterator属性，
  // 由于generator函数就是遍历器生成函数，
  // 所以可以直接把它赋值给Symbol.iterator，
  // 从而使的该对象具有Iterator接口
  var obj = {};
  obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  };

  for(let value of obj){
    console.log('value',value);
  }
}

{
  // 状态机
  let state = function*() {
    while (1) {
      yield 'A';
      yield 'B';
      yield 'C';
    }
  };
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

{
  // let state = async function () {
  //   while (1) {
  //     await 'A';
  //     await 'B';
  //     await 'C';
  //   }
  // };
  // let status=state();
  // console.log(status.next());
  // console.log(status.next());
  // console.log(status.next());
  // console.log(status.next());
  // console.log(status.next());
}
