{
    // 定义
    let a1 = Symbol();
    let a2 = Symbol.for ('a2');
    let a3 = Symbol();
    let a4 = Symbol.for ('a2')
    ;

    console.log(a1 === a3, a2 === a4);
    // 作用
}

{
    let a1 = Symbol();
    let a2 = Symbol.for ('a2')
    ;
    let a3 = Symbol();
    let a4 = Symbol.for ('a2')
    ;

    console.log({a1: Symbol.keyFor(a1), a2: Symbol.keyFor(a2), a3: Symbol.keyFor(a3), a4: Symbol.keyFor(a4)});
}

{
  // 使用for...in和for...of都无法遍历到Symbol值的属性，Symbol值作为对象的属性名，
  // 也无法通过Object.keys()、Object.getOwnPropertyNames()来获取了。
  // 但是，不同担心，这种平常的需求肯定是会有解决办法的。
  // 我们可以使用Object.getOwnPropertySymbols()方法获取一个对象上的Symbol属性名。
  // 也可以使用Reflect.ownKeys()返回所有类型的属性名，包括常规属性名和 Symbol属性名
  let a1=Symbol.for('a1');
  let a2=Symbol('a2');
  let obj={
    [a1]:123,
    [a2]:890,
    b:345,
    c:567
  };
  
  for(let [key,value] of Object.entries(obj)){
    console.log(key,value);
  }

  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  });

  Reflect.ownKeys(obj).forEach(function(item){
    console.log(obj[item]);
  })
}
