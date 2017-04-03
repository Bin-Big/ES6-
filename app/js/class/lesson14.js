{
  // Iterator不是array,也不是set,不是map,
  // 它不是一个实体，而是一种访问机制，
  // 是一个用来访问某个对象的接口规范,
  // 为各种不同的数据结构提供统一的访问机制。
  // 任何数据结构只要部署Iterator接口，
  // 就可以完成遍历操作（即依次处理该数据结构的成员）。
  let arr=['hello','world'];
  let map=arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}

{
  // 如何自定义Iterator
  let obj={
    start:[1,3,2],
    end:[7,9,8],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end);
      let len=arr.length;
      return {
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }

  for(let key of obj){
    console.log(key);
  }

}

{
  // for of
  let arr=['hello','world'];
  for(let value of arr){
    console.log(value);
  }
  for(let key in arr){
    console.log(key);
  }
}
