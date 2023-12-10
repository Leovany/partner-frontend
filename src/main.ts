import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入Vant组件
import { Button } from 'vant';

var app = createApp(App);
// 使用Vant组件
app.use(Button);
app.mount('#app')
