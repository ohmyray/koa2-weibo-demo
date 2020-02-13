/**
 * @description user controller
 * @author Ray
 */

const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { 
  registerUserNameNotExistInfo,
  registerUserNameExistInfo,
  registerFailInfo 
} = require('../model/ErrorInfo')

/**
  * 用户名是否存在
  * @param {string} userName 用户名
  */
async function isExist(userName){
  // 业务逻辑处理 (无）
  // 调用 services 获取数据
  // 统一返回格式
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 已存在
    // { errno: 0, data: { ... }}
    return new SuccessModel(userInfo)
  } else {
    // 不存在
    // { errno: 1000, message: '用户名可以使用' }
    return new ErrorModel( registerUserNameNotExistInfo )
  }
}

/**
 * 注册
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别 （1 男，2 女，3 保密）
 */
async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName) 
  if (userInfo) {
    // 用户名已存在
    return ErrorModel( registerUserNameExistInfo )
  }

  // 注册 services
  try {
    await createUser({
      userName,
      password,
      gender
    })
    return new SuccessModel()
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(registerFailInfo)
  }
}

module.exports = {
  isExist,
  register
}