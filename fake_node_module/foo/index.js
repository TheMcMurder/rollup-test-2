function sayFoo() {
  console.log('foo')
}

if (process.env.THEME_LIGHT && !process.env.THEME_DARK) require('./theme_light.css');

if (process.env.THEME_DARK && !process.env.THEME_LIGHT) require('./theme_dark.css');

module.exports = {
  sayFoo
}