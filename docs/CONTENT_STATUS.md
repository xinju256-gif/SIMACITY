# 产品资料收录与核验状态

更新日期：2026-11-04。网站为改版预览，尚未发布到正式域名。产品中心根据用户表格、原官网及已读取的原厂/品牌独立站整理，不能标记为所有品牌的全部型号与规格书均已收录。

## 已完成

- 54 条产品线（SIMACITY 自研 + 53 条品牌线）、8 款自研产品、302 个产品类别；支持双语、品牌/型号/应用搜索及跨类别筛选。
- 9 家原厂公开目录、4 个用户指定品牌独立站及 SIMACITY 原官网已读取并用于补充内容，来源与查阅日期保存在 `src/catalog.js`。
- 38 个资料入口，提供原厂产品表、数据手册目录、用户手册、应用笔记、评估板和替代选型查询。类别卡片可直达已确认的原厂分类页面；这不代表每个型号文件均已下载或核验。
- Firecomms、SiTime、中科银河芯、Taitien、共模半导体的首页与产品中心入口按用户要求直接打开独立站。SiTime 远端内容仍无法读取，其余四站已读取。
- 五份自研 PDF 从原官网公开产品页获取，完整存储于 `public/documents/`，校验记录在 `docs/datasheet-sources.json`：XJDM2 V1.1、XJDM11 V1.0、M2202 Rev 1.0.0、YT3110、MD2686。后两份 PDF 未发现明确版本号，不虚构版本。
- YT3110 的表格与原官网 HTML 曾错误重复 FPGA/ADC 参数；已依据真实 PDF 改为音频功放参数，并明确 15 W 对应 16 V / 8 Ω / 10% THD。M2202 的参数明确区分 ADC、DAC、运放与 RS-422。
- 公司完整名称、2009 年成立信息及电话 021-62271972 来自原官网；地址按用户确认采用“上海市长宁区延安西路华敏翰尊国际726栋22楼I座”。选型邮箱为用户指定的 sales@simacity.com.cn。
- 全站共享蓝白配色和字体体系，参照 firecomms-cn.com 的深蓝 #003270、红色 #c00000；中文使用系统苹方/微软雅黑，英文 Arial/Helvetica，不依赖远程字体加载。原始 Hero、Logo 及两张二维码已接入，社交图标按用户要求不跳转。

## 仍缺少的资料

- XJ485、温湿度探头线束未找到公开 PDF；仍显示已提供/原站参数及资料咨询入口。XJDM20w2B 在原站也只有图片和名称，没有参数或公开规格书，不补造性能指标。
- 其余品牌以用户表格为基础，尚未逐一核验完整原厂目录。海力士补充 DRAM、NAND、嵌入式存储及 SSD 的通用分类概览，未声称完成原厂核验。不得把资料目录导航解释为全部规格书的本地镜像。
- 佰维原厂域名已根据 SIMACITY 原站纠正为 `www.biwin.com.cn`；`www.biwin.com` 是同名开关厂商，不能作为存储产品来源。
- 网站不宣称已核实所有品牌的代理授权；用户内部“产品线梳理”表未公开。
- 已根据原官网 `/Home/Server` 迁移 10 个公开客户名称，并接入 `/Home/BlogDetail?id=1` 的已发布资讯入口；客户展示不扩写为未提供的项目交付记录。两份方案依据已核对的产品资料补充信号链路、器件与验证要点，仍明确为应用参考。三篇新增技术文章仍为待审核草稿。
- 选型表单生成本地需求文件和邮件链接，发送由用户邮件客户端确认；没有自动邮件后端。

## 网络与资料来源限制

原官网与多数第一批允许域名已能访问。后续确认的佰维、钰泰重定向目标、泰晶等域名已追加到环境配置草稿，保存草稿不会自动应用运行时网络策略。实际请求中 `www.biwin.com.cn`、`www.eta-semi.com`、SiTime 两个独立站主机与 ODU 仍在 CONNECT 阶段返回 403；芯海根页返回 468，UTC 返回 403。没有绕过访问限制。其他来源未完成逐一访问，不据此标记为不可访问。

需要继续在线核验时，在环境设置保存并发布网络配置，再根据具体产品线补充所需的公开资料域名。已收录的静态页面、图片与本地 PDF 不依赖这些外站即可运行。

## 品牌目录

| 品牌 | 产品类别数 | 入口 | 当前内容依据 |
| --- | ---: | --- | --- |
| SiTime | 4 | https://sitime-cn.com/ | 用户产品线表格；未完成原厂核验 |
| Taitien | 5 | https://taitien-cn.com/ | 已读取 品牌独立站 |
| KDS | 9 | /products/kds | 已读取 原厂公开目录 |
| 泰晶 | 3 | /products/tkd | 用户产品线表格；未完成原厂核验 |
| Firecomms | 5 | https://firecomms-cn.com/ | 已读取 品牌独立站 |
| 优达 | 5 | /products/youda | 用户产品线表格；未完成原厂核验 |
| 兆易创新 / GigaDevice | 6 | /products/gigadevice | 已读取 原厂公开目录 |
| 佰维 / Biwin | 5 | /products/biwin | 用户表格；正确域名已由原站确认，远端未读取 |
| 新諦 | 2 | /products/xindi | 用户产品线表格；未完成原厂核验 |
| 槟城电子 | 7 | /products/bencent | 用户产品线表格；未完成原厂核验 |
| 捷捷微 | 7 | /products/jiejie | 用户产品线表格；未完成原厂核验 |
| SIMACITY | 6 | /products/simacity | 已读取 芯聚原官网 + 规格书 |
| 圣邦微 | 27 | /products/sgmicro | 已读取 原厂公开目录 |
| 芯海科技 | 5 | /products/chipsea | 用户产品线表格；未完成原厂核验 |
| 台湾晶技 / TXC | 8 | /products/txc | 已读取 原厂公开目录 |
| 华润微 | 6 | /products/crm | 已读取 原厂公开目录 |
| 顺络 / Sunlord | 6 | /products/sunlord | 已读取 原厂公开目录 |
| 英集芯 / INJOINIC | 1 | /products/injoinic | 用户产品线表格；未完成原厂核验 |
| 思远 | 9 | /products/siyuan | 用户产品线表格；未完成原厂核验 |
| 劲芯微 | 6 | /products/jingxin | 用户产品线表格；未完成原厂核验 |
| 普林芯驰 | 3 | /products/pulin | 用户产品线表格；未完成原厂核验 |
| 敏芯股份 | 6 | /products/memsensing | 用户产品线表格；未完成原厂核验 |
| 芯导科技 | 14 | /products/prisemi | 已读取 原厂公开目录 |
| 镓未来 | 4 | /products/ganfuture | 用户产品线表格；未完成原厂核验 |
| 钰泰 | 8 | /products/eta | 用户产品线表格；未完成原厂核验 |
| 岑科电感 | 6 | /products/cenker | 用户产品线表格；未完成原厂核验 |
| 泰科天润 | 2 | /products/globalpower | 用户产品线表格；未完成原厂核验 |
| 拓尔微 | 5 | /products/tuoer | 用户产品线表格；未完成原厂核验 |
| 普罗森美 | 6 | /products/prosemi | 用户产品线表格；未完成原厂核验 |
| 沃尔德 / World | 3 | /products/world | 用户产品线表格；未完成原厂核验 |
| 茂睿芯 | 6 | /products/meraki | 用户产品线表格；未完成原厂核验 |
| 永铭 | 8 | /products/ymin | 已读取 原厂公开目录 |
| 物奇 | 4 | /products/wuqi | 用户产品线表格；未完成原厂核验 |
| 声加 | 6 | /products/shengjia | 用户产品线表格；未完成原厂核验 |
| 灿瑞 | 4 | /products/orientchip | 用户产品线表格；未完成原厂核验 |
| 欧度 / ODU | 4 | /products/odu | 用户产品线表格；未完成原厂核验 |
| 科特翎 | 5 | /products/keteling | 用户产品线表格；未完成原厂核验 |
| 兴威帆 | 5 | /products/xingweifan | 用户产品线表格；未完成原厂核验 |
| 捷拓 | 2 | /products/jietuo | 用户产品线表格；未完成原厂核验 |
| 友顺 / UTC | 8 | /products/utc | 用户产品线表格；未完成原厂核验 |
| 三莹 | 1 | /products/sanying | 用户产品线表格；未完成原厂核验 |
| 领亚智能 | 6 | /products/lingya | 用户产品线表格；未完成原厂核验 |
| 派恩杰 | 4 | /products/panej | 用户产品线表格；未完成原厂核验 |
| 芯洲 | 6 | /products/sct | 用户产品线表格；未完成原厂核验 |
| 中科银河芯 | 7 | https://gxcas-cn.com/ | 已读取 品牌独立站 |
| 普冉 | 6 | /products/puya | 已读取 原厂公开目录 |
| 智芯微 | 5 | /products/zhixin | 用户产品线表格；未完成原厂核验 |
| 联影微电子 | 5 | /products/unitedimaging | 用户产品线表格；未完成原厂核验 |
| 毂梁微 | 1 | /products/guliang | 用户产品线表格；未完成原厂核验 |
| 东华电力 | 6 | /products/donghua | 用户产品线表格；未完成原厂核验 |
| 源拓光电 | 3 | /products/yuantuo | 用户产品线表格；未完成原厂核验 |
| 美格 | 3 | /products/meig | 用户产品线表格；未完成原厂核验 |
| 海力士 | 4 | /products/hynix | 通用产品分类；未完成原厂核验 |
| 共模半导体 | 4 | https://gongmo-cn.com/ | 已读取 品牌独立站 |
