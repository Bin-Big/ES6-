// JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。
// http://www.ruanyifeng.com/blog/2014/12/unicode.html

{
  // 字符的 Unicode 表示法
  console.log('a',`\u0061`);
  console.log(`\u20BB7`);
  console.log(`\u{20BB7}`);
}

{
  // JavaScript对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。
  let s = "𠮷";
  console.log('length',s.length);
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  let x = "\u{20bb7}a";
  console.log('char',x); //吉
  console.log('length',x.length);
  console.log('code0',x.codePointAt(0)); //134071
  console.log('code0-16',x.codePointAt(0).toString(16)); //20bb7
  console.log('code-1',x.codePointAt(1)); //57271 第二个字符（后两个字节）
  console.log('code-2',x.codePointAt(2)); //a
}

{
  // ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）。
  // ES6提供了String.fromCodePoint方法，可以识别0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。
  console.log(String.fromCharCode("0x20bb7")); //ஷ
  console.log(String.fromCodePoint("0x20bb7")); //吉
}

{
  // 字符串的遍历器接口
  // let text = String.fromCodePoint("0x20bb7"); //吉
  let text = '\u{20bb7}abc';
  for (let i = 0; i < text.length; i++) {
      console.log('es5',text[i]);
  }
  for (let codePoint of text) {
      console.log('es6',codePoint); //𠮷
  }
}

{
  // 传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
  // includes()：返回布尔值，表示是否找到了参数字符串。
  // startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
  // endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
  let str = "string";
  console.log('includes',str.includes("r")); //True
  console.log('startsWith',str.startsWith("str")); //True
  console.log('endsWith',str.endsWith("g")); //True
}

{
  // repeat方法返回一个新字符串，表示将原字符串重复n次。
  let str = "abc";
  console.log(str.repeat(2)); //abcabc
}

{
  // padStart用于头部补全，padEnd用于尾部补全。
  // 两个参数：1个是最小字符串长度；另一个是补全的字符串
  console.log('1'.padStart(2,'0'));
  console.log('a'.padEnd(2,'0'));
}

{
  // 模板字符串
  let name = "Oliver"; //变量
  let info = `hello world
  welcome you`; //多行字符串
  console.log(`hello ${name}`,info); //嵌套变量，输出多行字符串
}

{
  // 标签模板
  let user = {
    name: "net",
    info: "welcome to use the system."
  };
  abc`Hello ${user.name}; Infomation: ${user.info}`;
  function abc(s, v1, v2) {
      console.log(s); //["Hello ", "; Infomation: ", ""]
      console.log(v1); //Oliver
      console.log(v2); //welcome to use the system.
  }
  // “标签模板”的一个重要应用，就是过滤HTML字符串，防止用户输入恶意内容。
  // 标签模板的另一个应用，就是多语言转换（国际化处理）。
}

{
  console.log(String.raw`Hi\n${2+3}!`);
  console.log(`Hi\n${2+3}!`);
}
