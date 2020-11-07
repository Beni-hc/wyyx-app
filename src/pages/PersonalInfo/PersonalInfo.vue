<template>
    <div
        class="info"
        :class="{ loginInfo: !isShowMain }"
        :style="{ height: heightChange }"
    >
        <heading>
            <generalNav
                :leftWidth="52"
                :leftHeight="52"
                :rightWidth="47"
                :rightHeight="47"
                :boxHeight="84"
                @clickHouse="clickHouse"
                ><i class="headLogo"></i
            ></generalNav>
        </heading>
        <div :class="isShowMain ? 'infoHomePageLogo' : 'logInPageLogo'">
            <img src="./img/wyyx_1.png" alt="" />
        </div>
        <!-- 选择登录方式界面 -->
        <div v-show="isShowMain">
            <div class="infoHomePageButton">
                <div @touchstart="phoneLogin">
                    <i class="iconfont icon-shouji1"></i>
                    <span>手机号快捷登录</span>
                </div>
                <div @touchstart="emailLogin">
                    <i class="iconfont icon-youjian1"></i>
                    <span>邮箱账号登录</span>
                </div>
            </div>
            <div class="infoHomePageFooter">
                <div>
                    <i class="iconfont icon-weixin-copy"></i>
                    <span>微信</span>
                </div>
                <div>
                    <i class="iconfont icon-QQ-copy"></i>
                    <span>QQ</span>
                </div>
                <div>
                    <i class="iconfont icon-sinaweibo-copy"></i>
                    <span>微博</span>
                </div>
            </div>
        </div>
        <!-- 登陆界面,手机验证码，密码和邮箱登录 -->
        <div v-show="!isShowMain" class="logInBox" :class="logInBoxClass">
            <form action="">
                <div>
                    <!-- 帐号输入框 -->
                    <div class="logInNumber" :class="logInNumberClass">
                        <!-- 邮箱后缀提示框 -->
                        <ul
                            v-if="loginMethod === 2 && !!emailBoxSuffix"
                            class="emailSuffix"
                        >
                            <li
                                v-for="itme in emailBoxSuffix"
                                :key="itme"
                                @touchstart="clickSuffix(itme)"
                            >
                                {{ itme }}
                            </li>
                        </ul>
                        <input
                            :type="logInData.loginId.type"
                            :maxlength="logInData.loginId.maxlength"
                            :spellcheck="logInData.loginId.spellcheck"
                            :tabindex="logInData.loginId.tabindex"
                            :autocomplete="logInData.loginId.autocomplete"
                            :name="logInData.loginId.name"
                            :placeholder="logInData.loginId.placeholder"
                            v-model="inputId"
                        />
                        <div
                            v-show="!!inputId"
                            class="iconfont icon-chahao"
                            @touchstart="clearInput(true)"
                        ></div>
                    </div>
                    <!-- 密码及验证码输入框 -->
                    <div class="logInPwd" :class="logInPwdClass">
                        <input
                            :type="logInData.loginPwd.type"
                            :maxlength="logInData.loginPwd.maxlength"
                            :spellcheck="logInData.loginPwd.spellcheck"
                            :tabindex="logInData.loginPwd.tabindex"
                            :autocomplete="logInData.loginPwd.autocomplete"
                            :name="logInData.loginPwd.name"
                            :placeholder="logInData.loginPwd.placeholder"
                            v-model="inputPwd"
                        />
                        <div v-show="loginMethod === 0">获取验证码</div>
                        <div
                            v-show="
                                (loginMethod === 1 || loginMethod === 2) &&
                                !!inputPwd
                            "
                            class="iconfont icon-chahao"
                            @touchstart="clearInput(false)"
                        ></div>
                    </div>
                    <!-- 输入错误提示框 -->
                    <div v-show="!!errorTextBox" class="errorText">
                        <div>{{ errorTextBox }}</div>
                    </div>
                    <div>
                        <!-- 输入框与按钮之间的选项 -->
                        <div class="logInText" :class="logInTextClass">
                            <div>{{ logInData.loginText.leftText }}</div>
                            <div @touchstart="logInTextRight">
                                {{ logInData.loginText.rightText }}
                            </div>
                        </div>
                        <div class="logInButton" :class="logInButtonClass">
                            登录
                        </div>
                        <!-- 协议显示区域 -->
                        <div v-show="loginMethod === 0" class="authCodeClause">
                            <div>
                                <input
                                    type="checkbox"
                                    name="inputCheckbox"
                                    id="inputCheckbox"
                                    v-model="inputCheckBox"
                                />
                                <label
                                    for="inputCheckbox"
                                    class="iconfont"
                                ></label>
                            </div>
                            <div>
                                <span>我同意</span>
                                <a href="javascript:;"> 《服务条款》</a>
                                <span> 和 </span>
                                <a href="javascript:;">《网易隐私政策》</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <!-- 界面跳转 -->
            <div class="logInPageRedirect">
                <div @touchstart="logInPageRedirect">
                    <span>其他登录方式</span>
                    <i class="iconfont icon-iconfontyoujiantou-copy"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import heading from "../../components/Heading/Heading";
import generalNav from "../../components/Heading/generalNav";
export default {
    name: "PersonalInfo",
    data() {
        return {
            pageHeight: 0,
            //true显示登录选择界面,false显示具体登录方式界面
            isShowMain: true,
            //0手机验证码登录，1手机密码登录，2邮箱登录
            loginMethod: 0,
            inputId: "",
            inputPwd: "",
            inputCheckBox: true,
        };
    },
    methods: {
        _clientHeight() {
            const target = document.documentElement;
            const clientHeight = target.clientHeight;
            const scrollHeight = target.scrollHeight;
            clientHeight >= scrollHeight
                ? (this.pageHeight = clientHeight)
                : (this.pageHeight = scrollHeight);
        },
        phoneLogin() {
            this.isShowMain = false;
            this.loginMethod = 0;
        },
        emailLogin() {
            this.isShowMain = false;
            this.loginMethod = 2;
        },
        logInPageRedirect() {
            this.isShowMain = true;
            this.loginMethod = 0;
        },
        logInTextRight() {
            if (this.loginMethod === 0) return (this.loginMethod = 1);
            if (this.loginMethod === 1) return (this.loginMethod = 0);
            if (this.loginMethod === 2) return null;
        },
        //辅助邮箱后缀
        clickSuffix(itme) {
            this.inputId = itme;
        },
        //跳转主页
        clickHouse() {
            this.$router.push("/home");
        },
        //true清空inputId,false清空inputPwd
        clearInput(isClear) {
            isClear ? (this.inputId = "") : (this.inputPwd = "");
        },
    },
    computed: {
        heightChange() {
            return !!this.pageHeight ? this.pageHeight + "px" : "100%";
        },
        //0手机验证码登录，1手机密码登录，2邮箱登录
        logInBoxClass() {
            if (this.loginMethod === 0) return "authCodeBox";
            if (this.loginMethod === 1 || this.loginMethod === 2)
                return "phoneEmailBox";
        },
        logInNumberClass() {
            if (this.loginMethod === 0) return "authCodePhoneNumber";
            if (this.loginMethod === 1 || this.loginMethod === 2)
                return "phoneEmailInput";
        },
        logInPwdClass() {
            if (this.loginMethod === 0) return "authCodeNumber";
            if (this.loginMethod === 1 || this.loginMethod === 2)
                return "phoneEmailInput";
        },
        logInTextClass() {
            if (this.loginMethod === 0) return "authCodeText";
            if (this.loginMethod === 1) return "pwdText";
            if (this.loginMethod === 2) return "emailText";
        },
        logInButtonClass() {
            if (this.loginMethod === 0) return "authCodeButton";
            if (this.loginMethod === 1) return "pwdButton";
            if (this.loginMethod === 2) return "emailButton";
        },
        //动态错误提示
        errorTextBox() {
            this.logInData.errorText.errorText;
        },
        //动态添加input属性及显示的文本
        logInData() {
            const PhoneCode = {
                loginId: {
                    type: "tel",
                    maxlength: "11",
                    spellcheck: "false",
                    tabindex: "1",
                    autocomplete: "off",
                    name: "phone",
                    placeholder: "请输入手机号",
                },
                loginPwd: {
                    type: "tel",
                    maxlength: "6",
                    spellcheck: "false",
                    tabindex: "5",
                    autocomplete: "off",
                    name: "phonecode",
                    placeholder: "请输入短信验证码",
                },
                loginText: {
                    leftText: "遇到问题？",
                    rightText: "使用密码验证登录",
                },
                errorText: {
                    verifyMethod: "",
                    errorText: [
                        "请输入手机号",
                        "手机号格式错误",
                        "请输入短信验证码",
                        "短信验证码格式错误",
                        "帐号或密码错误",
                    ],
                },
            };
            const PhonePwd = {
                loginId: {
                    type: "tel",
                    maxlength: "11",
                    spellcheck: "false",
                    tabindex: "1",
                    autocomplete: "off",
                    name: "phone",
                    placeholder: "请输入手机号",
                },
                loginPwd: {
                    type: "password",
                    maxlength: "",
                    spellcheck: "false",
                    tabindex: "2",
                    autocomplete: "off",
                    name: "phonepwd",
                    placeholder: "请输入密码",
                },
                loginText: {
                    leftText: "忘记密码？",
                    rightText: "短信快捷登录",
                },
                errorText: {
                    verifyMethod: "",
                    errorText: [
                        "请输入手机号",
                        "手机号格式错误",
                        "请输入密码",
                        "",
                        "帐号或密码错误",
                    ],
                },
            };
            const emailPwd = {
                loginId: {
                    type: "text",
                    maxlength: "",
                    spellcheck: "false",
                    tabindex: "1",
                    autocomplete: "off",
                    name: "email",
                    placeholder: "邮箱帐号",
                },
                loginPwd: {
                    type: "password",
                    maxlength: "50",
                    spellcheck: "false",
                    tabindex: "2",
                    autocomplete: "off",
                    name: "emailpwd",
                    placeholder: "密码",
                },
                loginText: {
                    leftText: "注册帐号",
                    rightText: "忘记密码",
                },
                errorText: {
                    verifyMethod: "",
                    errorText: [
                        "请输入帐号",
                        "",
                        "请输入密码",
                        "",
                        "帐号或密码错误",
                    ],
                },
            };
            if (this.loginMethod === 0) return PhoneCode;
            if (this.loginMethod === 1) return PhonePwd;
            if (this.loginMethod === 2) return emailPwd;
        },
        //邮箱后缀提示
        emailBoxSuffix() {
            const inputId = this.inputId.trim();
            const emailBoxSuffix = [
                "@163.com",
                "@126.com",
                "@yeah.net",
                "@188.com",
            ];
            if (!!!inputId || inputId.indexOf(" ") !== -1) return "";
            if (inputId.indexOf("@") === -1) {
                return emailBoxSuffix.map((x) => inputId + x);
            } else {
                const re = new RegExp("^" + inputId.split("@")[1], "i");
                const list = emailBoxSuffix
                    .filter((x) => re.test(x.split("@")[1]))
                    .map((x) => inputId.split("@")[0] + x);
                if (list.length === 0) return "";
                if (inputId === list[0]) return "";
                return list;
            }
        },
    },
    mounted() {
        this._clientHeight();
    },
    components: {
        heading,
        generalNav,
    },
};
</script>
<style lang="stylus" scoped>
.info
    width 100%
    position relative
    top 0px
    left 0px
    background-color #f2f5f4
.loginInfo
    background-color #fff !important
.headLogo
    display block
    width 172px
    height 54px
    background-image url('../../assets/jltu_1.png')
    background-repeat no-repeat
    background-size 173px
    background-position 0px -125px
.errorText
    width 100%
    margin-top 15px
    margin-bottom 3px
    div
        font-size 24px
        color #dd1a21
// 邮箱登录后缀提示
.emailSuffix
    width 100%
    position absolute
    top 102%
    left 0
    z-index 999
    background-color #fff
    li
        padding 25px 0 20px
        font-size 28px
        color #333
// 选择登录方式界面
.infoHomePageLogo
    width 100%
    height 486px
    position relative
    top 0
    left 0
    img
        width 268px
        height 90px
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -89%)
.infoHomePageButton
    width 670px
    height 300px
    margin 0 40px
    padding-bottom 80px
    div
        width 100%
        height 94px
        font-size 28px
        border-radius 4px
        display flex
        justify-content center
        align-items center
        i
            margin-right 16px
            font-size 38px
        &:first-child
            margin-bottom 32px
            background-color #dd1a21
            color #fff
        &:last-child
            color #dd1a21
            border 1px solid #eaa3a5
.infoHomePageFooter
    width 100%
    height 40px
    position absolute
    left 0
    bottom 80px
    display flex
    justify-content center
    div
        padding 0 43px
        color #7f7f7f
        display flex
        align-items center
        i
            font-size 35px
        span
            font-size 27px
            margin-left 5px
        &:first-child
            border-right 1px solid #7f7f7f
        &:last-child
            border-left 1px solid #7f7f7f
// 登录界面LOGO及公共样式
.logInPageLogo
    width 100%
    height 150px
    padding-top 60px
    background-color #fff
    img
        display block
        width 267px
        height 100%
        margin 0 auto
.logInBox
    width 670px
    margin 0 auto
.logInNumber, .logInPwd
    width 100%
    position relative
    top 0
    left 0
    input
        height 42px
        font-size 28px
        line-height 42px
        border 0
        color #333
    div
        position absolute
        top 50%
        text-align center
    &::after
        content ''
        position absolute
        left -50%
        bottom 0
        width 200%
        height 1px
        background-color #d9d9d9
        transform scale(0.5)
.logInText
    width 100%
    position relative
    top 0px
    left 0px
    div
        height 45px
        line-height 45px
        position absolute
        top 50%
        &:first-child
            left 0px
        &:last-child
            right 0px
.logInButton
    width 100%
    height 92px
    font-size 28px
    background-color #dd1a21
    text-align center
    line-height 92px
    border-radius 6px
// 手机验证码登录页
.authCodeBox
    padding-top 58px
.authCodePhoneNumber
    input
        width 590px
        margin 32px 0 20px 0
    div
        transform translateY(-45%)
        width 63px
        height 63px
        right 0
        line-height 63px
        font-size 26px
        color #ccc
.authCodeNumber
    margin-top 34px
    input
        width 380px
        margin 30px 0 22px 0
    div
        transform translateY(-50%)
        color #333
        width 164px
        height 53px
        right 15px
        font-size 28px
        line-height 53px
        border-radius 4px
        border 1px solid #cfcfcf
.authCodeText
    height 116px
    div
        font-size 28px
        &:first-child
            color #7f7f7f
            transform translateY(-35%)
        &:last-child
            color #333
            transform translateY(-50%)
.authCodeButton
    color #fff
// 服务条款栏
.authCodeClause
    height 68px
    display flex
    padding-top 25px
    margin-bottom 45px
    div
        &:first-child
            width 35px
            height 35px
            margin-right 13px
            position relative
            top 0
            left 0
        &:last-child
            font-size 24px
            padding-bottom 6px
            span
                color #7f7f7f
            a
                color #007aff
#inputCheckbox
    visibility hidden
#inputCheckbox + label
    display block
    width 34px
    height 34px
    position absolute
    top 2px
    left 0
    background-color #fff
    border 1px solid #c3c3c3
    border-radius 4px
#inputCheckbox:checked + label::before
    display block
    content '\e62e'
    font-size 26px
    color #c3c3c3
    text-align center
    line-height 34px
// 手机密码登录和邮箱登录公共样式
.phoneEmailBox
    padding-top 154px
.phoneEmailInput
    input
        width 590px
        margin 28px 0 23px
    div
        width 63px
        height 63px
        right 0
        line-height 63px
        font-size 26px
        color #ccc
        transform translateY(-45%)
// 手机密码登录页
.pwdText
    height 118px
    div
        font-size 28px
        &:first-child
            color #7f7f7f
            transform translateY(-35%)
        &:last-child
            color #333
            transform translateY(-45%)
.pwdButton
    color #fff
    margin-bottom 66px
// 邮箱账号登录
.emailText
    height 118px
    div
        font-size 26px
        color #7f7f7f
        transform translateY(-50%)
.emailButton
    color rgba(255, 255, 255, 0.5)
    margin-bottom 66px
// 登录界面重定向
.logInPageRedirect
    width 100%
    div
        width 250px
        margin 0 auto
        text-align center
        span
            font-size 28px
            color #333
        i
            font-size 25px
            margin-left 5px
            color #7f7f7f
</style>