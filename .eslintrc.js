// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'semi': ['error', 'always',{ "omitLastInOneLineBlock": true}],
    'semi': 0,
    'indent': 0,  // 无缩进
    'space-before-function-paren': [0, "always"], //函数定义时括号前面要不要有空格
    "comma-spacing": 0, //允许逗号前后的空格
    "no-multiple-empty-lines": [1, {"max": 5}], //空行最多不能超过2行
    "no-trailing-spaces": 0, // 一行结束后面不要有空格
    /* "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格*/
    "padded-blocks": 0,  // 块语句内行首行尾是否要空行
    "space-infix-ops": 0, // 中缀操作符周围要不要有空格
    "no-unused-vars": 0, // 允许有声明后未被使用的变量或参数
    "spaced-comment": 0//注释风格要不要有空格什么的
  }
}
