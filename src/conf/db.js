/**
 * @description 存储配置
 * @author Ray
 */
const { isProd } = require('../utils/env')

 let REDIS_CONF = {
  port: 6379,
  // host: '127.0.0.1'
  host: '192.168.10.10'
 }

 // 线上环境
 if (isProd) {
  REDIS_CONF = {
    port: 6379,
    // host: '127.0.0.1'
    host: '192.168.10.10'
   }
 }

 module.exports = {
  REDIS_CONF
 }