import {createApp} from 'vue'
import App from './App.vue'

// 引入路由
import * as VueRouter from 'vue-router';
import routes from './config/routes.ts'

// 1. Vant
//  1.1 引入Vant样式
import 'vant/lib/index.css';
//  1.2 引入Vant组件
import {Button, Icon} from 'vant';
import {NavBar} from 'vant';
import {Tabbar, TabbarItem} from 'vant';
import {Toast} from 'vant';


var app = createApp(App);
// 1. 使用Vant组件
app.use(Button);
// Navbar导航栏
app.use(NavBar);
app.use(Icon);
// Tabbar标签栏
app.use(Tabbar);
app.use(TabbarItem);
// Toast 轻提示
app.use(Toast);

// 2. 路由
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
//整个应用支持路由。
app.use(router)


app.mount('#app')
