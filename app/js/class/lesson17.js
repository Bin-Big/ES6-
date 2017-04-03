
// export let A=123;
// export function test(){
//   console.log('test');
// }
// export class Test{
//   test(){
//     console.log('class Test');
//   }
// }

let A='123';
let test=function(){
  console.log('test');
};

class Test{
  test(){
    console.log('class test');
  }
}

export default {
  A,
  test,
  Test
}
