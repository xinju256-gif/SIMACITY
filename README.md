# SIMACITY 官网改版

面向产品查询、技术资料阅读与选型咨询的中英文响应式官网。当前是可运行的改版预览，尚未部署到正式域名。

## 运行

需要 Node.js 20 或更新版本（当前环境已验证 Node.js 24）。网站运行和构建均无第三方依赖，无需安装依赖。

```sh
cd /workspace/SIMACITY
npm run dev
```

默认端口 3000，可用 `PORT` 调整。使用现有仓库即可，无需创建 Git worktree。

```sh
npm run build              # 生成可部署的 dist/
npm test                   # HTTP、资源与目录数据集成测试
SERVE_DIST=1 npm test       # 检查构建产物
SERVE_DIST=1 npm start      # 以本地服务检查构建产物
```

生产部署时发布 `dist/` 并将页面深层路径回退到 `index.html`。`scripts/server.mjs` 用于开发和构建产物验证，不包含邮件发送、后台管理或用户数据存储服务。

## 页面和内容

- `/`：产品方向、品牌入口、应用方案和技术文章。
- `/products`：55 条产品线（54 条代理产品线与 SIMACITY），支持六类产品筛选、8 款自研产品及品牌/型号搜索；岸达按用户最新清单收录，型号与 Logo 待补充。
- `/products/:brand`：品牌概览、系列站内资料页、应用与选型资料；产品页不提供原厂外链。
- `/products/simacity`：8 款自研产品、7 份对应型号规格书，另提供 XJ1302、MD2689 及 Revision 6.12 产品线信息卡，共 10 份用户上传原始 PDF。信息卡为 2020 年历史版本，不覆盖当前目录和联系信息。
- `/solutions`：时钟同步、工业光通信、混合信号采集、温湿度监测、电源与功率驱动、物联网与无线主控六类方案，与首页同步。
- `/contact`：公司信息与选型表单。必填项校验通过后下载需求文本，并生成指向 `sales@simacity.com.cn` 的邮件链接。需要用户在邮件客户端确认发送，不会由网页自动发信。没有邮件客户端时可通过网页邮箱发送下载文件，附件需手动添加。
- `/news` 和 `/news/:id`：原官网已发布资讯入口及 3 篇中英文技术文章草稿，草稿待企业审核。

EN / CN 切换覆盖导航、页面和表单，语言偏好保存在当前浏览器。品牌名称保留资料中的名称，不自行创造英文商标。页面无需请求第三方图片、字体或脚本。

内容文件：

- `src/catalog.js`：品牌、应用、自研产品、双语参数；图片在 `public/brands`、`public/products`。已由用户上传的《副本芯聚主要产品线20260427(2).xlsx》整理。主表采用“原版”，并补充“1”工作表中的源拓光电、美格和海力士；“芯聚”归并到 SIMACITY。未将含冲突描述的另一版品牌介绍覆盖主表。共模半导体依据本次用户指定新增，并已按其品牌独立站补充四类产品与规格书目录。其他已读取来源保存在品牌的 `sources` 字段。
- `src/content.js`：产品分类、方案、技术文章和联系信息。
- 每个品牌的 `products[].documents` 可补充 `{title,url,language,revision}`。支持公开 HTTPS 文档链接和本地 `/documents/*.pdf`。已获取的自研 PDF 放在 `public/documents/`，记录来源、版本（已知时）、文件大小及 SHA-256；品牌 `resources` 保存稳定的原厂资料目录，`families[].url` 指向公开产品分类。

资料处理说明：

1. 原始工作簿和内部“产品线梳理”工作表未复制到公开目录，页面不宣称品牌代理授权。
2. YT3110 的原始表格重复了 M2202 的 FPGA/ADC 参数，已用原官网 PDF 核对后的音频功放参数替换，功率指标保留测试条件。
3. XJDM20w2B 已按用户确认的 XJ-JM-GD-GXHT-V1.1 手册补全 UART、温湿度范围、带条件精度及工作电流；封面 V1.0 与正文 V1.1 的差异已记录。
4. 关键参数与参数摘录用于初步选型，正式 PDF 单独提供。XJDM2、XJDM11、M2202、YT3110、MD2686 的 PDF 已核对并迁移；XJ485 已由后续用户 ZIP 补齐；XJDM20w2B 已由用户确认的 XJ-JM-GD-GXHT 手册补齐；探头线束仍未收到对应独立规格书。认证、替代兼容及最终应用性能需由技术人员结合完整条件确认。
5. 仓库起初只有 README；此实现根据用户需求和上传表格新建，后续已补充原站公开资料与部分原厂目录，不包含原站源码迁移。

## 浏览器验证

`scripts/smoke.mjs` 使用 Playwright 验证品牌查询、图片加载、参数下载、双语持久化、表单校验和邮件收件人，并检查 4 种屏幕宽度下的 9 类页面。先启动开发服务，再运行 `npm run test:e2e`；执行环境需要提供 Playwright 和 Chromium。

本云环境可运行：

```sh
PLAYWRIGHT_MODULE=/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs CHROMIUM_PATH=/usr/bin/chromium npm run test:e2e
```

其他环境可通过 `PLAYWRIGHT_MODULE`、`CHROMIUM_PATH` 和 `SITE_URL` 选择安装好的工具及目标服务。截图保存到忽略提交的 `artifacts/`。

## 页面视觉与媒体配置

界面采用白色和深蓝色 #003270 为主，红色 #c00000 用于主行动按钮和少量标记，参照 firecomms-cn.com 的公开样式；英文字体使用 Arial / Helvetica，中文优先使用苹方或微软雅黑。

页脚与联系页已接入用户提供的微信公众号和企业微信二维码，并在页脚显示 YouTube、LinkedIn、Instagram 图标。按用户要求，当前社交图标不设置跳转链接。媒体配置集中在 `src/content.js` 的 `siteMedia` 与 `socialProfiles`，详见 `docs/MEDIA.md`。

Hero 已替换为 ZIP 内的原始背景图（3238 × 1295），保持原文件字节；原始公司 Logo 也已接入页头和页脚。桌面使用全幅比例，移动端响应式裁切。参考站 firecomms-cn.com、原官网和九家原厂目录已读取；部分后续域名仍受网络限制，新增网络配置已保存为草稿，需应用后才能继续读取。完整内容收录与未完成事项见 `docs/CONTENT_STATUS.md`。

## 上线前需补充

未收录型号的正式规格书与版本；其余品牌的原厂核验；核实后的技术文章、真实方案与客户案例。公司名称、原官网地址及电话已接入。若需要网页直接提交邮件而无需用户邮件客户端，需要独立邮件后端、相应凭证与隐私说明。请通过安全环境配置提供凭证，勿写入前端。
