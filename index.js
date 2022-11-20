const Koa = require('koa');
const {toJSS} = require("./transform");
const app = new Koa();

app.use(async ctx => {
  const styleQuery = ctx.query.style;
  if(styleQuery) {
    ctx.body = toJSS(styleQuery);
  } else {
    ctx.body = {error: '请输入 style 参数'}
  }
});

app.listen(5000);
