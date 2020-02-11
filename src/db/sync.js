/**
 * @description sequelize 同步数据库
 * @author Ray
 */
const seq = require('./seq')

require('./model/index')

// 测试连接
seq.authenticate().then(()=>{
  console.log('auth ok')
}).catch(() => {
  console.log('auth err')
})

// 执行同步 force 清空表
seq.sync({ force: true }).then(()=>{
  console.log('sync ok')
  process.exit()
})