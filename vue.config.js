const px2rem = require('postcss-px2rem')

const postcss = px2rem({
    remUnit: 75
})
module.exports = {
    // 是否使用包含运行时编译器的 Vue 构建版本。
    // 设置为 true 后你就可以在 Vue 组件中使用 
    // template 选项了，但是这会让你的应用额外增加 10kb 左右。
    // runtimeCompiler: true,
    // 语法检查关闭
    lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            },
        },
    },
}