{

  // npm install babel-plugin-transform-decorators-legacy --save-dev
  //
  // 修饰器（Decorator）是一个函数，用来修改类的行为
    // 装饰器模式
    // 装饰器(Decorator)就是一个函数，
    // 她接受另一个函数作为参数，
    // 然后在不直接修改这个函数的情况下，
    // 扩展该函数的行为，
    // 最终再将该函数返回
    //
    // 此时，修饰器函数一共可以接受三个参数，
    // 第一个参数是所要修饰的目标对象，
    // 第二个参数是所要修饰的属性名，
    // 第三个参数是该属性的描述对象。
    //
    // core-decorators.js 可以安装npm install core-decorators
    let readonly = function(target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    };

    class Test{
      @readonly
      time(){
        return '2017-03-31'
      }
    }

    let test=new Test();
    // test.time=function(){
    //   console.log('readonly false');
    // };
    console.log(test.time());
}

{
  let typename = function(target, name, descriptor) {
      target.myname='hello';
  };

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);

}
