<!-- 密码输入组件 -->
<style  scoped>
    .modal-wrap {
        user-select : none;
        color:#333;
        z-index: 1000;
        position: relative;
        height:320px;
        left : 0;
        right : 0;
        bottom : 0;
        top : 0;
    }
    .input-wrap {
        background: #f8f8f8;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .top-wrapper {
        padding : 0 0px 10px;
        border-bottom: 1px solid #E7E7E7;
    }
    .font-primary{
        font-size: 16px;
    }
    .title-wrapper {
        line-height: 35px;
        border-bottom: 1px solid #E7E7E7;
    }
    .tip-wrapper {
        text-align: center;
        font-size: 16px;
        line-height: 48px;
        width: 100%;
        border-bottom:1px solid #cdcdcd;
        position: relative;
        margin-bottom: 5px;
    }
    .tip-count{
        font-size: 14px;
        line-height: 35px;
    }
    .input-list {
        border : 1px solid #d1d1d1;
        border-radius: 5px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 0;
        height : auto;
        line-height: 0;
        margin: 0 10px;
    }
    .input-list input {
        padding : 0;
        font-size: 24px;
        height : 45px;
        line-height: 45px;
        appearance : none;
        -webkit-appearance : none;
        box-sizing: border-box;
        border : none;
        border-radius: 0;
        border-right: 1px solid #E7E7E7;
        text-align: center;
        width:16.55%;
    }
    .input-list input:last-child {
        border-right: none;
    }
    .jp-wrapper .num-keybord{
        user-select : none;
        float : left;
        box-sizing: border-box;
        width : 33.33%;
        text-align : center;
        line-height: 50px;
        font-size: 20px;
        border : 1px solid #d1d1d1;
        background: #fff;
        border-width: 0 1px 1px 0;
    }
    .jp-wrapper .num-keybord:active {
        background: #ccc;
    }
    .jp-wrapper .num-keybord img {
        height : 20px;
        width : auto;
    }
    .jp-wrapper .num-keybord:nth-child(3n) {
        border-right: none;
    }
    /* 必需 */
    .expand-transition {
        transition: all 2s ease;
        overflow: hidden;
    }

    /* .expand-leave 定义离开的结束状态 */
    .expand-enter, .expand-leave {
        opacity: 0;
    }
    a{
        text-decoration: none;
    }
</style>

<template>
    <div class="modal-wrap"   @click="closePass" id="modal-wrap">
        <div class="input-wrap" @click.stop="">
            <div class="top-wrapper">
                <!-- 标题 -->
                <div class="tip-wrapper" >
                    <p class="text-center" style="margin:0">{{title}}</p>
                </div>
                <div class="tip-count text-center" v-if="tradeAmount">支付金额为 <a href="javascript:">{{tradeAmount}}</a> 元</div>
                <!-- 输入框 -->
                <div class="input-list clearfix">
                    <template v-for="num in passLength">
                        <input type="password" readonly :value="passwords[num-1]" />
                    </template>
                </div>
                <div class="row" style="padding:0 10px" v-if="findPasswordPath">
                    <router-link :to="findPasswordPath" replace>
                        <a class=" font-small text-right" style="font-size:14px;line-height:30px">忘记密码?</a>
                    </router-link>
                </div>
            </div>
            <!-- 小键盘 -->
            <div class="jp-wrapper">
                <div class="num-keybord" @click.stop="inputPasswordHandler(1)">&nbsp;1&nbsp;</div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(2)">&nbsp;2&nbsp;</div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(3)">&nbsp;3&nbsp;</div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(4)">&nbsp;4&nbsp;</div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(5)">&nbsp;5&nbsp;</div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(6)">&nbsp;6&nbsp;</div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(7)">&nbsp;7&nbsp;</div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(8)">&nbsp;8&nbsp;</div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(9)">&nbsp;9&nbsp;</div>
                <div class="num-keybord"  @click.stop="" style="background: #d2d5de;height:50px"></div>
                <div class="num-keybord" @click.stop="inputPasswordHandler(0)">0</div>
                <div class="num-keybord" @click.stop="passwords.pop()" style="background: #d2d5de"> X </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name:'vue-password-input',
        data () {
            return {
                passwords : [],
                errorMsg : ''
            }
        },
        methods : {
            inputPasswordHandler : function(num) {
                if(this.passwords.length < this.passLength) {
                    this.passwords.push(num)
                }
                if(this.passwords.length === this.passLength) {
                    /** 向上冒泡密码输入完成事件 */
                    setTimeout(()=>{
                        this.$emit('completed-input', this.passwords.join(""))
                    // this.$emit("showpassword")
                    this.passwords=[];
                },300)
                }
            },
            closePass:function(){
                this.$emit("closeInput")
                this.passwords=[];
            }
        },
        props : {
            //交易金额
            tradeAmount : [String, Number],
            findPasswordPath:'',
            title:{
                type:String,
                default:'输入密码'
            },
            passLength:{
                type:Number,
                default:6
            }
        }
    }
</script>
