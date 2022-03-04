export const pattern = {
  /**
   * 用户名验证
   * 接受字母,数字, _ , 4-30位
   */
  username: /^[a-zA-Z0-9_]{4,30}$/,

  /**
   * 密码验证
   * 接受字母,数字, _ , 6-20位
   */
  password: /^[a-zA-Z0-9_]{6,20}$/,

  /** url 验证 */
  url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,

  /** number 验证, 包括正负整数 */
  number: /^[-+]?[0-9]*$/,

  /** numerical 验证, 包括整数、浮点数、正、负数 */
  numerical: /^[-+]?[0-9]+(\.[0-9]+)?$/,

  /** pNumerical 验证, 包括正整数、浮点数 */
  pNumerical: /^[0-9]+(\.[0-9]+)?$/,

  /** integer 验证, 验证整数 */
  interger: /^[0-9]*$/,

  /** pInteger 验证, 验证正整数 */
  pInterger: /^[1-9]\d*$/,

  /** nInterger 验证, 验证负整数及0 */
  nInterger: /^((-\d+)|(0+))$/,

  /** mobile 验证, 验证手机号码 */
  mobilephone: /^1[3456789]\d{9}$/,
  mobile: /^1[3456789]\d{9}$/,
  phone: /^1[3456789]\d{9}$/,

  /** telephone 验证,验证电话号码 */
  telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,

  /** idCard 验证,验证身份证号 */
  idCard:
    /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,

  /** email 验证,验证邮箱 */
  email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/,

  /** 百分数验证，数字在1-99之间，保留一位小数 */
  percente: /^(((\d|[1-9]\d)(\.\d{1,2})?)|100|100.0|100.00)$/
}

/**
 * 非空验证
 *
 * e.g.
 *
 * isEmpty('http://192.168.0.254/1.json') => false
 * @export
 * @param {*} object
 * @returns
 */
export function isEmpty(object: any) {
  return object === null || object === undefined || object === ''
}

/**
 * url 正则验证
 *
 * e.g.
 *
 * isUrl('http://192.168.0.254/1.json') => true
 * @export
 * @param {*} param
 * @returns
 */
export function isUrl(param: any) {
  return pattern.url.test(param)
}

/**
 * 数字 正则验证（正负整数）
 *
 * e.g.
 *
 * isNumber(123) => true
 * @export
 * @param {*} param
 * @returns
 */
export function isNumber(param: any) {
  return pattern.number.test(param)
}

/**
 * 数值 正则验证（包括整数、浮点数、正、负数）
 *
 * e.g.
 *
 * isNumerical(123) => true
 * @export
 * @param {*} param
 * @returns
 */
export function isNumerical(param: any) {
  return pattern.numerical.test(param)
}

/**
 * 数值 正则验证（包括整数、浮点数、正数）
 *
 * e.g.
 *
 * isPNumerical(123) => true
 * @export
 * @param {*} param
 * @returns
 */
export function isPNumerical(param: any) {
  return pattern.pNumerical.test(param)
}

/**
 * 整数 正则验证
 *
 * e.g.
 *
 * isInterger(-123) => true
 * @export
 * @param {*} param
 * @returns
 */
export function isInterger(param: any) {
  return pattern.interger.test(param)
}

/**
 * 正整数及0 正则验证
 *
 * e.g.
 *
 * isPInterger(123) => true
 * @export
 * @param {*} param
 * @returns
 */
export function isPInterger(param: any) {
  return pattern.pInterger.test(param)
}

/**
 * 负整数及0 正则验证
 *
 * e.g.
 *
 * isNInterger(-123) => true
 * @export
 * @param {*} param
 * @returns
 */
export function isNInterger(param: any) {
  return pattern.nInterger.test(param)
}

/**
 * 手机号码 正则验证
 *
 * e.g.
 *
 * isMobile('13011111111') => true
 * @export
 * @param {*} param
 * @returns
 */
export function isMobile(param: any) {
  return pattern.mobile.test(param)
}

/**
 * 电话号码 正则验证
 *
 * e.g.
 *
 * isTelephone('42901920') => true
 * @export
 * @param {*} param
 * @returns
 */
export function isTelephone(param: any) {
  return pattern.telephone.test(param)
}

/**
 * 身份证 正则验证
 *
 * e.g.
 *
 * isIDCard('400210188801011010') => true
 * @export
 * @param {string} code
 * @returns
 */
export function isIDCard(code: string) {
  code = code.toUpperCase()
  const city: any = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  }
  const idCardReg = pattern.idCard // 身份证格式正则表达式

  let isPass = true // 身份证验证是否通过（true通过、false未通过）

  // 如果身份证不满足格式正则表达式
  if (!code) {
    isPass = false
  } else if (!code.match(idCardReg)) {
    isPass = false
  } else if (!city[parseInt(code.substr(0, 2))]) {
    isPass = false
  } else if (code.length === 18) {
    // 18位身份证需要验证最后一位校验位
    let codes = code.split('')
    // ∑(ai×Wi)(mod 11)
    // 加权因子
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 校验位
    const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0
    let ai = 0
    let wi = 0
    for (let i = 0; i < 17; i++) {
      ai = parseInt(codes[i])
      wi = factor[i]
      sum += ai * wi // 开始计算并相加
    }
    const last = parity[sum % 11] // 求余
    if (last.toString() !== codes[17]) {
      isPass = false
    }
  }
  return isPass
}

/**
 * 邮箱 正则验证
 *
 * e.g.
 *
 * isEmail('aa@qq.com') => true
 * @export
 * @param {*} param
 * @returns
 */
export function isEmail(param: any) {
  return pattern.email.test(param)
}

/**
 * 区间 正则验证
 *
 * e.g.
 *
 * isRange('36.5', 1, 100) => false
 * @export
 * @param {*} param
 * @param {*} iMin
 * @param {*} iMax
 * @returns
 */
export function isRange(param: any, iMin: any, iMax: any) {
  let re = /(\d+)/g

  while (re.exec(param)) {
    let int = parseInt(RegExp.$1)
    if (int < iMin || int > iMax) {
      return false
    }

    return true
  }
}
