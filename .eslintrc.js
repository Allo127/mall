module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': "off",
		'no-mixed-spaces-and-tabs': 'off',
		'comma-spacing': 0, //逗号前后的空格
		'spaced-comment': 0, //注释风格要不要有空格什么的
		'space-before-function-paren': 0,
		'indent': 0,
		'quotes': 0,
		'operator-linebreak': 0
	}
}
