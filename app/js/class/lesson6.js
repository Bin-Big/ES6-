{
    let arr = Array.of(3, 7, 9, 14);
    console.log(arr);
    let len = Array.of(3).length;
    console.log('len=' + len);
    let empty = Array.of();
    console.log(empty);
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item){
      console.log(item.textContent);
    });
    console.log(Array.from(['a', 'b', 'c']));

    // Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
    console.log(Array.from([1,3,5],function(x){return x*2}));
}

{
  // fill方法使用给定值，填充一个数组
  console.log('fill-7', [1, 'a', undefined].fill(7));
  console.log('fill-123', ['a', 'b', 'c'].fill(7, 1, 3));
}

{
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys',index);
  }
  for (let value of ['text', 'html', 'values'].values()) {
    console.log(value);
  }
  for (let [index, elem] of ['a', 'b'].entries()) {
      console.log(index, elem);
  }
}

{
  // 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员）
  console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
  // 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，
  // 直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
  //
  let arr=[1, 2, 3, 4,5,6].find(function(item){return item>3});
  let arr2=[1, 2, 3, 4,5,6].findIndex(function(item){return item>3});
  console.log(arr,arr2);
}

{
  console.log('number',[1, 2, NaN].includes(1));
  console.log('nan',[1, 2, NaN].includes(NaN));

}
