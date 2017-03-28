{
  // 简洁表示法
  // 属性简写
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log(es5,es6);
  // 方法简写
  let es5_method={
    hello(){
      console.log('es5_hello');
    }
  };
  let es6_method={
    hello(){
      console.log('es6_hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}

{
  // 属性名表达式
  let a='b';
  let es5_obj={
    a:'a'
  }
  let es6_obj={
    [a+'c']:'ko'
  }
  console.log(es6_obj.bc);
}

{
  // 新增api，判断
  console.log('字符串',Object.is('abc', 'abc'));
  console.log('数组',Object.is([],[]));
  // 拷贝，Object.assign拷贝的属性是有限制的，
  // 只拷贝源对象的自身属性（不拷贝继承属性），
  // 也不拷贝不可枚举的属性（enumerable: false）
  console.log(Object.assign({a:'a'},{b:'b'}));

  let test={k:123,o:456};
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value]); 
  }
}

{
  // 扩展运算符
  // let { a, b, ...c } = { a:'test',b:'kill',c:'ddd',d:'ccc' };
  // console.log('扩展运算符',a,b,c);
}
