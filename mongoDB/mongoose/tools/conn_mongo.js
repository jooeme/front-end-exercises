/*  
  定义一个模块，用来连接 MongoDB 数据库
*/
// 引入
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
// // 断开数据库
// mongoose.disconnect();

mongoose.connection.once('open', () => {
  console.log('数据库连接成功～～～');
});
mongoose.connection.once('close', () => {
  console.log('数据库连接已经断开～～～');
});
