{
  // 定义
  class parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  let v_parent=new parent('v');
  console.log('name',v_parent.name);
}


{
  // 继承
  class parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class child extends parent{

  }

  console.log('child',new child().name);
}

{
  // 继承带参数
  class parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class child extends parent{
    constructor(name='child'){
      super(name);
      this.sex='male';
    }
  }
  let v_child=new child('v_child');
  console.log('child',v_child);
}

{
  // setter 和 getter
  class Parent{
    constructor(){
      this.name='test';
    }

    get longName(){
      return 'mk'+this.name;
    }

    set longName(value){
      this.name=value;
    }
  }

  let v_parent=new Parent();
  v_parent.longName='net';
  console.log('getter',v_parent.longName);
}

{
  // 静态方法
  class Parent{
    constructor(name='parent'){
      this.name=name;
    }
    static longName(){
      console.log('longName');
    }
  }

  let v_parent=new Parent();
  Parent.longName()
}

{
  // 静态属性
  class Parent{

  }
  Parent.test='test';

  console.log(new Parent().test,Parent.test);
}
