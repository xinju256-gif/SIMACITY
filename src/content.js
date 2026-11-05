// Company details, supplied media and bilingual editorial content.
// Source provenance and outstanding content are recorded in docs/CONTENT_STATUS.md.
export const company = {
 name: 'SIMACITY',
 legalName: {zh:'上海芯聚电子科技有限公司',en:'Shanghai Simacity Electronic Technology Co., Ltd.'},
 description: {zh:'上海芯聚电子成立于 2009 年，围绕半导体产品分销与系统解决方案，提供芯片供应、模块设计和定制化开发支持。',en:'Established in 2009, Shanghai Simacity provides semiconductor distribution and system solution support, including component supply, module design and custom development.'},
 email: 'sales@simacity.com.cn', phone: '021-62271972',
 address: '上海市长宁区延安西路华敏翰尊国际726栋22楼I座',
 addressEn: 'Room I, 22/F, Building 726, Huamin Hanzun International, Yan’an West Road, Changning District, Shanghai, China',
 formEndpoint: '',
 sourceUrl: 'https://www.simacity.com/'
};
// Populate these paths with the actual supplied image files; do not synthesize QR codes.
export const siteMedia = {
 logo: '/media/company-logo.jpg',
 heroImage: '/media/hero-background.jpg', // Supplied original, 3238 × 1295 pixels
 wechatQR: '/media/wechat-qr.jpg',
 wecomQR: '/media/wecom-qr.jpg'
};
// Icons are displayed without outbound navigation until official profile URLs are supplied.
export const socialProfiles = [
 {id:'youtube',name:'YouTube',url:''},
 {id:'linkedin',name:'LinkedIn',url:''},
 {id:'instagram',name:'Instagram',url:''}
];
export const categories = [
 {id:'frequency',zh:'时钟与频率',en:'Timing & frequency',subtitle:['为系统提供稳定时钟基准','A stable timing reference'],icon:'chip',tags:['晶振 / Oscillators','时钟 / Timing']},
 {id:'power',zh:'电源与功率',en:'Power & energy',subtitle:['连接供电、驱动与能量转换','Power, drive and conversion'],icon:'chip',tags:['电源管理 / Power management','驱动 / Drivers']},
 {id:'sensing',zh:'传感与自研',en:'Sensors & in-house products',subtitle:['从环境感知到自主模块','From sensing to in-house modules'],icon:'sensor',tags:['传感器 / Sensors','自主模块 / In-house modules']},
 {id:'control',zh:'存储与控制',en:'Memory & control',subtitle:['存储、运算与系统控制','Memory, processing and control'],icon:'chip',tags:['MCU / MCUs','存储 / Memory']},
 {id:'analog',zh:'模拟与信号链',en:'Analog & signal chain',subtitle:['精确信号处理','Precision signal processing'],icon:'chip',tags:['ADC / ADC','模拟 / Analog']},
 {id:'protection',zh:'无源与防护',en:'Passives & protection',subtitle:['可靠的电路基础','A reliable circuit foundation'],icon:'connector',tags:['无源 / Passives','防护 / Protection']},
 {id:'connectivity',zh:'连接与通信',en:'Connectivity & communications',subtitle:['让数据与设备可靠连接','Reliable device connectivity'],icon:'connector',tags:['连接器 / Connectors','通信 / Communication']}
];
export { brands } from './catalog.js';
export const featuredBrands = [
 {id:'simacity',label:'SIMACITY'},
 {id:'firecomms',label:'Firecomms'},
 {id:'sitime',label:'SITime'},
 {id:'taitien',label:'Taitien'},
 {id:'gongmo',label:'共模半导体'},
 {id:'unitedimaging',label:'联影微电子'},
 {id:'galaxy',label:'中科银河芯'},
 {id:'gigadevice',label:'兆易创新'},
 {id:'biwin',label:'佰维'}
];
// Public customer names are reproduced from the original company's customer page.
export const customers = [
 ['GE医疗','GE HealthCare'],['西门子医疗','Siemens Healthineers'],['联影医疗','United Imaging'],['奕瑞科技','iRay Technology'],['大陆汽车','Continental'],['岚图汽车','VOYAH'],['小鹏汽车','XPENG'],['航空电气','航空电气'],['祥生医疗','CHISON'],['丘钛科技','Q Technology']
];
export const publishedNews = [{
 title:['超140万亿！Token调用量激增，意味着什么？','What does the surge in daily AI token usage mean?'],
 date:'2026-03-26', url:'https://www.simacity.com/Home/BlogDetail?id=1',
 summary:['原官网已发布的行业资讯，讨论 AI 调用量增长及其产业意义。','An industry update published on the original website about growing AI usage and its implications.']
}];
export const solutions = [
 {id:'measurement', icon:'sensor', title:['混合信号采集与处理','Mixed-signal acquisition & processing'], tag:['M2202 · 应用参考','M2202 · Application reference'], summary:['以 M2202 SiP 连接模拟采集、FPGA 处理与模拟输出，为精密测量和闭环控制搭建紧凑的硬件基础。','Connect analog acquisition, FPGA processing and analog output with the M2202 SiP for compact measurement and closed-loop control hardware.'], steps:[['明确输入范围与采样带宽','Define input range and sampling bandwidth'],['配置 FPGA、ADC / DAC 时钟与接口','Configure FPGA, ADC/DAC clocks and interfaces'],['验证噪声、延迟、供电与热设计','Validate noise, latency, power and thermal design']],
 note:['本页为依据产品资料整理的应用参考；系统性能需通过实际电路设计与样机测试确认。','This application reference is based on product documentation. Validate system performance through circuit design and prototype testing.'],
 details:[[['信号链路','Signal path'],['模拟输入 → 14 位 ADC → FPGA 逻辑处理 → 16 位 DAC / RS-422 接口。可按采样、处理与输出分别核对时钟和数据时序。','Analog input → 14-bit ADC → FPGA processing → 16-bit DAC / RS-422 interface. Review clocking and data timing for acquisition, processing and output.']],[['核心器件','Core device'],['M2202 集成 FPGA、16 Mbit Flash、ADC、DAC、运放及 RS-422。ADC 最高 40 MSPS，主 DAC 最高 50 MSPS；具体电气条件见规格书。','M2202 integrates FPGA, 16 Mbit Flash, ADC, DAC, amplifiers and RS-422. The ADC supports up to 40 MSPS and the main DAC up to 50 MSPS; refer to the datasheet for electrical conditions.']],[['实施关注点','Implementation considerations'],['先确认输入幅度、误差预算和闭环延迟，再规划电源、参考、时钟、PCB 布局以及 FPGA 开发与验证。','Confirm input amplitude, error budget and loop latency, then plan power, references, clocks, PCB layout, FPGA development and validation.']]],
 products:[{id:'m2202',label:['M2202 两通道混合信号 SiP','M2202 mixed-signal SiP']}]
 },
 {id:'automation',icon:'chip',title:['温湿度监测与设备控制','Temperature & humidity monitoring and control'],tag:['XJDM 系列 · 应用参考','XJDM family · Application reference'],summary:['围绕除湿、暖通和仓储环境，使用温湿度模块完成感知，再结合控制器、通信与驱动器件形成设备控制链路。','Use temperature/humidity modules for dehumidification, HVAC and storage monitoring, with controllers, communications and drivers selected for the equipment.'],steps:[['确定测点、量程与环境要求','Define sensing locations, ranges and environment'],['选择传感接口、线缆与供电方式','Choose sensor interface, cabling and power'],['验证采集、控制逻辑与现场抗干扰','Validate acquisition, control logic and site noise immunity']],
 note:['本页为产品应用参考，传感模块与 RS-485 收发器采用不同接口，不能直接连接；协议转换与控制逻辑需由主控实现。','This is a product application reference. The sensor modules and RS-485 transceiver use different interfaces and cannot connect directly; a controller must implement protocol conversion and control logic.'],
 details:[[['温湿度感知','Temperature & humidity sensing'],['XJDM2 / XJDM11 提供单线数字通信，并支持以数据线和地线进行真两线传输。规格书给出的典型精度为 ±0.2 °C、±2% RH；最终性能应结合工作条件确认。','XJDM2 / XJDM11 use a single-wire digital protocol and support data-plus-ground operation. Datasheets state typical accuracy of ±0.2 °C and ±2% RH; confirm performance for the actual operating conditions.']],[['通信与控制','Communications & control'],['主控读取传感数据并执行阈值或控制策略；需要 RS-485 / RS-422 总线时可评估 XJ485，双向直流电机或阀门驱动可评估 MD2686。','A controller reads sensor data and executes thresholds or control logic. Evaluate XJ485 for RS-485/RS-422 links and MD2686 for bidirectional DC motors or valves.']],[['现场验证','Site validation'],['核对接口电平、上拉电阻、线缆长度与接地；测试冷凝、防护、静电和电源扰动，并根据电机负载验证驱动及散热设计。','Check interface levels, pull-ups, cable length and grounding. Test condensation, protection, ESD and supply disturbances, and validate the driver and thermal design against the motor load.']]],
 products:[{id:'xjdm2',label:['XJDM2 温湿度模块','XJDM2 temperature/humidity module']},{id:'xjdm11',label:['XJDM11 温湿度模块','XJDM11 temperature/humidity module']},{id:'xj485',label:['XJ485 总线收发器','XJ485 bus transceiver']},{id:'md2686',label:['MD2686 马达驱动','MD2686 motor driver']}]
 }
];
export const articles = [
 {id:'sensor-selection',category:['选型指南','Selection guide'],title:['传感器选型，从这 5 个问题开始','Five questions to start your sensor selection'],summary:['量程之外，精度、响应、接口和工况同样决定系统表现。','Range is only the start. Accuracy, response, interfaces and operating conditions matter too.'],minutes:4,sections:[
 [['01 / 需要测量什么？','01 / What are you measuring?'],['先明确被测物理量、正常工作范围以及可能出现的峰值。量程应覆盖正常工况与合理的瞬态范围，同时避免量程过大导致有效分辨能力不足。','Define the physical quantity, normal operating range and possible peaks. Cover expected transients without selecting an unnecessarily wide range that limits effective resolution.']],
 [['02 / 系统允许多大的误差？','02 / What is the error budget?'],['区分分辨率、重复性与绝对精度。将温漂、安装误差和后续信号处理误差纳入系统误差预算，不能仅用单一精度指标替代整机验证。','Distinguish resolution, repeatability and absolute accuracy. Include thermal drift, mounting and downstream processing in the system error budget. A single accuracy figure cannot replace system validation.']],
 [['03 / 信号变化有多快？','03 / How fast does the signal change?'],['根据目标信号的有效带宽选择传感器响应与采样方案，同时检查滤波、延迟和抗混叠要求。采样率与响应时间不是同一个参数。','Choose response and sampling based on the signal bandwidth. Check filtering, latency and anti-aliasing requirements. Sampling rate and response time are different specifications.']],
 [['04 / 如何连接现有系统？','04 / How will it connect?'],['确认供电、电平、输出形式、协议以及线缆距离。接口名称一致也不代表电气特性或协议细节完全兼容。','Confirm supply, signal levels, output format, protocol and cable distance. Matching interface names do not guarantee electrical or protocol compatibility.']],
 [['05 / 在什么环境下工作？','05 / What are the operating conditions?'],['记录温度、湿度、防护等级、振动和安装空间。在最终工况下完成样品测试，再确认量产选型。','Record temperature, humidity, ingress protection, vibration and mounting space. Validate samples under final operating conditions before production selection.']]
 ]},
 {id:'datasheet-reading',category:['资料阅读','Technical resources'],title:['如何高效阅读一份产品规格书','How to read a product datasheet efficiently'],summary:['先查条件，再看参数，让不同产品的比较建立在同一基准上。','Check conditions before specifications to compare products on equal terms.'],minutes:3,sections:[
 [['先定位版本与测试条件','Start with revision and test conditions'],['确认资料版本、适用型号和测试条件。典型值通常不等同于保证范围，室温下的性能也不代表整个温度范围。','Confirm revision, applicable model and test conditions. Typical values are not guaranteed limits, and room-temperature performance does not represent the full temperature range.']],
 [['区分额定工作条件与极限值','Separate operating ratings from absolute limits'],['绝对最大额定值通常是器件避免损坏的边界，不能作为长期工作目标。设计应遵循推荐工作条件并留出合理裕量。','Absolute maximum ratings generally describe damage boundaries, not continuous operating targets. Design to recommended operating conditions with appropriate margin.']],
 [['整理可验证的选型清单','Create a verifiable selection checklist'],['将供电、接口、尺寸、环境、精度与关键认证整理为表格，记录每项参数对应的页码和条件。缺失信息应向供应方确认，而不是自行推断。','Tabulate power, interfaces, dimensions, environment, accuracy and relevant certifications. Record source pages and conditions. Ask the supplier to confirm missing information.']]
 ]},
 {id:'selection-brief',category:['应用笔记','Application notes'],title:['一份清晰的选型需求应该包含什么','What belongs in a useful selection brief'],summary:['把应用目标转化为可核对的条件，减少来回沟通。','Turn application goals into verifiable conditions and reduce back-and-forth.'],minutes:3,sections:[
 [['用应用目标描述需求','Describe the application goal'],['说明设备用途、所需功能、现有系统和当前遇到的问题。如果已有替代型号，也应说明需要保留和希望改善的性能。','Describe equipment purpose, required functions, existing systems and current issues. For replacement parts, state which characteristics must be retained and which should improve.']],
 [['列出必须项与可协商项','Separate mandatory and flexible requirements'],['明确量程、精度、接口、供电、尺寸和工作环境，区分必须满足的条件与可以调整的偏好。预算、数量和项目时间同样影响选型。','Specify range, accuracy, interface, power, dimensions and operating conditions. Separate essential constraints from preferences. Budget, volume and timeline also influence selection.']],
 [['提前规划样品验证','Plan sample validation early'],['确定样品数量、测试方法和验收标准。最终选型需要真实工况验证，不能仅依据宣传资料或单个参数决定。','Define sample quantity, test methods and acceptance criteria. Final selection requires operating-condition validation, beyond marketing material or a single specification.']]
 ]}
];
