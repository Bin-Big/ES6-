{
  // 基本定义
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback();
    }, 1000);
  }

  ajax(function(){
    console.log('timeout');
  });

  let ajax2=function(){
    console.log('执行2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax2().then(function(){
    console.log('timeout2');
  })

  // 如果想执行多个步骤
  ajax2().then(function(){
    console.log('timeout2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve();
      }, 1000);
    })
  }).then(function(){
    console.log('timeout3');
  })
}

{
  // catch
  let ajax=function(num){
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve();
      }else{
        throw new Error('出错了');
      }
    })
  }

  ajax(6).then(function(){
    console.log('6');
  }).catch(function(err){
    console.log(err);
  });
  ajax(3).then(function(){
    console.log('6');
  }).catch(function(err){
    console.log(err);
  });
}
