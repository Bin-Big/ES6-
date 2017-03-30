{
  // Set的定义
  let list=new Set();
  list.add(5);
  list.add(7);

  console.log('zize',list.size);
}

{
  // Set的定义
  let arr=[1,2,3,4,5];
  let list = new Set(arr);
  console.log('size',list.size);
}

{
  // Set的元素是唯一的
  let list=new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('list',list);

  // 去重
  let arr=[1,2,3,1,2];
  let list2=new Set(arr);
  console.log('list unique',list2);

  let arr2=[1,2,3,1,'2'];
  let list3=new Set(arr2);
  console.log('不换转换数据类型',list3);
}

{
  // Set实例的几个方法
  let arr=['add','delete','clear','has'];

  let list=new Set(arr);

  console.log('has',list.has('add'));
  console.log('delete',list.delete('add'),list);

  list.clear();

  console.log('list',list);

}

{
  // Set实例的读取
  // keys()：返回键名的遍历器
  // values()：返回键值的遍历器
  // entries()：返回键值对的遍历器
  // forEach()：使用回调函数遍历每个成员
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  for(let key of list.keys()){
    console.log('keys',key);
  }
  // 也可以省略values
  for(let value of list){
    console.log('values',value);
  }
  for(let [key,value] of list.entries()){
    console.log('entries',[key,value]);
  }

  list.forEach(item=>console.log('forEach',item))
}


{

  // weakSet
  let weakList=new WeakSet();
  let arg = {};

  weakList.add(document);
  weakList.add(arg);

  console.log('has-document',weakList.has(document));
  console.log('has-arg',weakList.has(arg));

  console.log('delete',weakList.delete(document),weakList);

  // 没有size属性，不能遍历，弱引用
}


{
  // JavaScript的对象（Object），
  // 本质上是键值对的集合（Hash结构），
  // 但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
  let map=new Map();

  let arr=['123'];

  map.set(arr,456);

  console.log('map',map,map.get(arr));
}

{
  // Map定义可以带参数
  let map=new Map([['a',123],['b',345,'c',456]])

  console.log('arg',map);

  console.log('size',map.size);
  console.log('get',map.get('a'));
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
  // keys()：返回键名的遍历器。
  // values()：返回键值的遍历器。
  // entries()：返回所有成员的遍历器。
  // forEach()：遍历Map的所有成员
}

{
  let weakmap=new WeakMap();

  let o={};

  weakmap.set(o,123);
  console.log('weakmap',weakmap.get(o));

  // weakmap.set('12','34');
  // 没有size属性，不能遍历，不能clear
}
