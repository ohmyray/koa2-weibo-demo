/**
 * @description 存储配置
 * @author Ray
 */
const { isProd } = require('../utils/env')

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
  // host: '192.168.10.10'
}

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'koa2_weibo_db'
}
// 线上环境
if (isProd) {
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
    // host: '192.168.10.10'
  }
  MYSQL_CONF = {
    // 线上的 mysql 配置
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'koa2_weibo_db'
  }
}
module.exports = {
  REDIS_CONF,
  MYSQL_CONF
}