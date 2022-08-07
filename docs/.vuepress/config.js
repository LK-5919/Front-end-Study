const {
    defaultTheme
} = require('vuepress')

const {
    containerPlugin
} = require('@vuepress/plugin-container')



module.exports = {
    base: '/', //部署站点的基础路径 相当于BaseURL
    lang: 'zh-CN', //站点的语言
    title: '前端学习笔记', //站点的标题
    description: '这是NULL的第一个 VuePress 站点', //站点的描述
    head: [
        ['link', {
            rel: 'icon',
            href: '/image/logo.png'
        }]
    ],
    locales: {}, //配置不同地区的信息
    theme: defaultTheme({
        // 默认主题配置
        colorMode: 'auto', //默认颜色模式 'auto' | 'light' | 'dark'
        colorModeSwitch: true, //是否启用切换颜色模式的功能
        home: '/', //首页的路径 导航栏中 Logo 的链接, 404 页面的 返回首页 链接
        navbar: [ //导航栏配置
            /**
             * 为了配置导航栏元素，你可以将其设置为 导航栏数组 ，
             * 其中的每个元素是 NavbarItem 对象、 NavbarGroup 对象、或者字符串
             * 
            NavbarItem 对象应该有一个 text 字段和一个 link 字段，
                还有一个可选的 activeMatch 字段。
            NavbarGroup 对象应该有一个 text 字段和一个 children 字段。
                children 字段同样是一个 导航栏数组 。
            字符串应为目标页面文件的路径。它将会被转换为 NavbarItem 对象，
                将页面标题作为 text ，将页面路由路径作为 link 。
             */
            // NavbarItem
            {
                text: '首页',
                link: '/',
                activeMatch: ''
            },
            {
                text: "webpack5",
                children: [{
                        text: '基础',
                        activeMatch: '/webpack5/base/',
                        children: [
                            "/webpack5/base/README.md",
                            "/webpack5/base/base.md",
                            "/webpack5/base/config.md",
                            "/webpack5/base/development.md",
                            "/webpack5/base/css.md",
                            "/webpack5/base/image.md",
                            "/webpack5/base/output.md",
                            "/webpack5/base/clean.md",
                            "/webpack5/base/font.md",
                            "/webpack5/base/other.md",
                            "/webpack5/base/javascript.md",
                            "/webpack5/base/html.md",
                            "/webpack5/base/server.md",
                            "/webpack5/base/production.md",
                            "/webpack5/base/optimizeCss.md",
                            "/webpack5/base/minifyHtml.md",
                            "/webpack5/base/summary.md",
                        ]
                    },
                    {
                        text: '高级',
                        activeMatch: '/webpack5/senior/',
                        children: [
                            "/webpack5/senior/README.md",
                            "/webpack5/senior/enhanceExperience.md",
                            "/webpack5/senior/liftingSpeed.md",
                            "/webpack5/senior/reduceVolume.md",
                            "/webpack5/senior/optimizePerformance.md",
                            "/webpack5/senior/summary.md",
                        ]
                    },
                    {
                        text: '项目配置',
                        activeMatch: '/webpack5/project/',
                        children: [
                            "/webpack5/project/README.md",
                            "/webpack5/project/react-cli.md",
                            "/webpack5/project/vue-cli.md",
                            "/webpack5/project/summary.md",
                        ]
                    },
                    {
                        text: '原理分析',
                        activeMatch: '/webpack5/origin/',
                        children: [
                            "/webpack5/origin/README.md",
                            "/webpack5/origin/loader.md",
                            "/webpack5/origin/plugin.md",
                            "/webpack5/origin/summary.md"
                        ]
                    },
                ]
            },
        ],
        logo: '/image/logo.png', //Logo 图片的 URL
        logoDark: null, //在夜间模式中使用的 Logo 图片的 URL
        repo: 'https://gitee.com/LkGiteeCoder/front-end-study.git', //项目仓库的 URL
        repoLabel: '远程仓库', //项目仓库的标签
        sidebar: 'auto', //侧边栏配置 设置为 'auto'，侧边栏会根据页面标题自动生成
        sidebarDepth: 3, //设置根据页面标题自动生成的侧边栏的最大深度
        editLink: false, //是否启用 编辑此页 链接
        editLinkText: '编辑此页', //编辑此页 链接的文字
        lastUpdated: true, //是否启用 最近更新时间戳 
        lastUpdatedText: '最近更新时间', //最近更新时间戳 标签的文字
        contributors: true, //是否启用 贡献者列表
        contributorsText: 'NULL', //贡献者列表 标签的文字
        tip: '提示', //Tip 自定义容器 的默认标题
        notFound: ['未找到页面'], //404 页面的提示信息
        backToHome: '回到首页', //404 页面中 返回首页 链接的文字
        toggleColorMode: '切换主题', //切换颜色模式按钮的标题文字
        toggleSidebar: '切换侧边栏', //切换侧边栏按钮的标题文字
        host: '0.0.0.0', //指定开发服务器的主机名
        port: '8888', //指定开发服务器的端口号
        open: false, //是否在开发服务器启动后打开浏览器

        plugins: [
            containerPlugin({
                type: 'tip',
                locales: {
                    '/zh/': {
                        defaultInfo: '提示',
                    },
                },
            }),
            [
                "@vuepress/plugin-search",
                {
                    locales: {
                        "/zh/": {
                            placeholder: "搜索",
                        },
                    },
                },
            ],
        ],
    }),
}