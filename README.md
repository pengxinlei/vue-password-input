# vue-password-input

> a vue component about password keybord
> 一个vue的支付键盘组件，6位数密码，可显示金额，可与mint-ui的弹窗组件组合使用

# Use Setup
### Install vue-password-input
```javascript
npm install vue-password-input -s
```

### Vue mount

```javascript
// import
import Vue from 'vue'
import vuePasswordInput from 'vue-password-input'

// or require
var Vue = require('vue')
var vuePasswordInput = require('vue-password-input')

// mount with global
Vue.use(vuePasswordInput)

// mount with component(can't work in Nuxt.js/SSR)
import { vuePasswordInput } from 'vue-password-input'

export default {
  components: {
    vuePasswordInput
  }
}
```

// 或者直接导入js文件
<script src="./dist/vue-password-input.js"></script>

### Attributes:

参数 | 说明 | 类型  | 默认值
|---|---|---|---|
title | 顶部显示文字 | String |  输入密码 |
findPasswordPath  | 忘记密码的链接（有显示文字，没有就不显示） | String |  |
tradeAmount  | 交易金额（有就显示，没有就不显示） | String |  |


