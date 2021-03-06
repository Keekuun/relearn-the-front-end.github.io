/***
 * 文件系统
 Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。

 读取文件
 Node 导入文件系统模块(fs)语法如下所示：
 var fs = require("fs");

 异步和同步
 Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
 建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。

 打开文件
 异步：fs.open(path, flags[, mode], callback)
 path - 文件的路径。
 flags - 文件打开的行为。具体值详见下文。
 mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
 callback - 回调函数，带有两个参数如：callback(err, fd)。


 Flag	描述
 r	    以读取模式打开文件。如果文件不存在抛出异常。
 r+	    以读写模式打开文件。如果文件不存在抛出异常。
 rs	    以同步的方式读取文件。
 rs+	以同步的方式读取和写入文件。
 w	    以写入模式打开文件，如果文件不存在则创建。
 wx	    类似 'w'，但是如果文件路径存在，则文件写入失败。
 w+	    以读写模式打开文件，如果文件不存在则创建。
 wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
 a	    以追加模式打开文件，如果文件不存在则创建。
 ax	    类似 'a'， 但是如果文件路径存在，则文件追加失败。
 a+	    以读取追加模式打开文件，如果文件不存在则创建。
 ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
 */

const fs = require('fs');

// 异步读取
fs.readFile('input.txt', (err, data) => {
    if(err){
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
const data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

// 结果：
// 同步读取: 每一个不曾起舞的日子，都是对生命的辜负！
// 程序执行完毕。
// 异步读取: 每一个不曾起舞的日子，都是对生命的辜负！

console.log("准备打开文件！");
fs.open('input.txt', 'a+', (err, fd) =>{
    if (err) {
        return console.error(err);
    }
    console.log(fd);
    console.log("文件打开成功！");
});