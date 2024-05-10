import http from 'http';
import koa from 'koa';
import router from 'koa-router';
 
let app = new koa();
let routers = router();
routers.get('/api-testing',getMessage)
function *getMessage ()
{
    this.body = "Hello Friend Welcome to the Ratan World's";
}
app.use(routers.routes());
app.listen(3000);

