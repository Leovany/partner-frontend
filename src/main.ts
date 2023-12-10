import {createApp} from 'vue'
import App from './App.vue'
// 1. Vant
//  1.1 引入Vant样式
import 'vant/lib/index.css';
//  1.2 引入Vant组件
import {Button, Icon} from 'vant';
import {NavBar} from 'vant';
import {Tabbar, TabbarItem} from 'vant';
import {Toast} from 'vant';

var app = createApp(App);
// 使用Vant组件
app.use(Button);
// Navbar导航栏
app.use(NavBar);
app.use(Icon);
// Tabbar标签栏
app.use(Tabbar);
app.use(TabbarItem);
// Toast 轻提示
app.use(Toast);

app.mount('#app')
