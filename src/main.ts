import {createApp} from 'vue'
import App from './App.vue'

// 引入路由
import * as VueRouter from 'vue-router';
import routes from './config/routes.ts'

// Vant
//  引入Vant样式
import 'vant/lib/index.css';
import Vant from 'vant';

var app = createApp(App);
// 1. 组件
app.use(Vant);

// 2. 路由
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
//整个应用支持路由。
app.use(router)


app.mount('#app')
