var str = 'hello';
var stt = 'hello tu hao';
// const str1 = str.indexOf('e'); 查找指定字符下标
// const str1 = str.indexOf('h',3); //查找指定字符下标第二个参数代表开始查找的位置
// const str1 = str.charAt(4); 已指定下标查找字符
// const str1 = str.split(''); 把字符串已指定字符转换成数组
// const str1 = str.substr(1,2); 从原字符串中获取子串，第一个参数表示开始的位置，第二个参数表示获取的个数；
// const str1 = str.substring(1,2); 从原字符串中获取子串，第一个参数表示开始的位置，第二个参数表示结束的位置（不包括第二个参数的位置）；
// const str1 = str.toUpperCase(); 变为大写
// const str1 = str.toLowerCase(); 变为小写
// const str1 = str.slice(2,4) 等同于substring
// const str1 = str.localeCompare(stt) 比较字符串大小 大返回1 小则返回-1
// const str1 = str.replace('w','c'); 字符串替换 第一个是被替换的字符，第二个参数是要替换的字符；
// const str1 = str.concat(stt); 字符串拼接
// const str1 = str.charCodeAt(1); 查询指定字符的unicode编码

// ES6方法

// const str1 = str.repeat(3); 表示将原字符串重复3次，并返回一个新的字符串 参数不能是负数 NAN将被读取为零
// const str1 = str.includes('e',3); 返回一个布尔值，表示在字符串中是否找到指定字符；true 表示找到。第二个参数表示开始的位置
// const str1 = str.startsWith('e',1); 返回一个布尔值，表示指定字符是否在字符串首位；true 表示是；第二个参数表示开始的位置
// const str1 = str.endsWith('l',4); //返回一个布尔值，表示指定字符是否在字符串尾部；true 表示是；第二个参数表示前n个
// const str1 = str.padStart(8,'s');字符串补全，第一个参数表示原字符串的长度是否达到8，如果达不到则以第二个参数在头部补到8位；
// 如果接收字符串的长度大于等于原字符长度，则返回原始字符串：
// const str1 = str.padEnd(8,'s'); 在末尾补全字符
console.log(str1)