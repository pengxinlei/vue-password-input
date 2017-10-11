/**
 * Created by Administrator on 2017/10/10.
 */
import vuePasswordInput from './password-input.vue';

const passwordInput={
    install (Vue,options) {
        Vue.component(vuePasswordInput.name,vuePasswordInput)
    }
}

export default passwordInput;