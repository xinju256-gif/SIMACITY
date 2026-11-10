import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const { chromium }=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const base=process.env.SITE_URL||'http://127.0.0.1:3000';
await mkdir('artifacts',{recursive:true});
try {
 await page.goto(base);
 assert.equal(await page.locator('html').getAttribute('lang'),'zh-CN');assert.equal(await page.locator('.research-product-card').count(),3);assert.equal(await page.locator('.explorer-card').count(),6);assert.ok(await page.locator('.research-showcase').evaluate(el=>Boolean(el.compareDocumentPosition(document.querySelector('.explorer-grid')) & Node.DOCUMENT_POSITION_FOLLOWING)));assert.equal(await page.locator('.solution-list .solution-row').count(),6);
 assert.deepEqual(await page.locator('.navigation a').allTextContents(),['首页','产品中心','解决方案','联系我们','新闻中心']);
 const externalBrands={firecomms:'https://firecomms-cn.com/',sitime:'https://sitime-cn.com/',gongmo:'https://gongmo-cn.com/',taitien:'https://taitien-cn.com/',galaxy:'https://gxcas-cn.com/'};
 for(const [id,url] of Object.entries(externalBrands)){const entry=page.locator(`.featured-brands a[href="${url}"]`);assert.equal(await entry.count(),1,id);assert.equal(await entry.getAttribute('target'),'_blank');}
 for(const image of await page.locator('.company-logo,.qr-frame img').all()){await image.scrollIntoViewIfNeeded();await image.evaluate(img=>img.decode());}
 const heroImage=await page.locator('.hero').evaluate(e=>getComputedStyle(e).backgroundImage);assert.match(heroImage,/hero-background.webp/);
 await page.evaluate(()=>scrollTo(0,0));
 await page.screenshot({path:'artifacts/home-desktop.png',fullPage:true});
 await page.locator('.navigation a[href="/products"]').click();assert.equal(await page.locator('.brand-card').count(),55);
 await page.locator('[data-view=inhouse]').click();assert.equal(await page.locator('.inhouse-card').count(),8);
 await page.locator('[data-category=sensing]').click();assert.equal(await page.locator('.inhouse-card').count(),5);
 await page.locator('[data-category=all]').click();await page.locator('[data-view=partner]').click();assert.equal(await page.locator('.brand-card').count(),54);
 for(const [id,url] of Object.entries(externalBrands)){const entry=page.locator(`.brand-card[href="${url}"]`);assert.equal(await entry.count(),1,id);assert.equal(await entry.getAttribute('target'),'_blank');}
 await page.locator('.brand-card[href="/products/gigadevice"]').click();assert.equal(await page.locator('.family-card').count(),6);
 assert.equal(await page.locator('main a[href^="https://"]').count(),0);
 await page.locator('.family-card').first().click();assert.match(page.url(),/family=0/);assert.match(await page.locator('h1').textContent(),/Flash/);await page.goto(base+'/products/gigadevice');
 const overview=page.waitForEvent('download');await page.locator('[data-brand-download=gigadevice]').first().click();assert.equal((await overview).suggestedFilename(),'gigadevice-product-line-zh.txt');
 await page.goto(base+'/products');
 await page.locator('[data-category=frequency]').click();assert.ok((await page.locator('.brand-card').count())>0);assert.ok((await page.locator('.brand-card').count())<54);
 await page.locator('#search').fill('not-a-real-brand');await page.locator('#product-search button').click();assert.equal(await page.locator('.brand-card').count(),0);assert.match(await page.locator('#brand-results').textContent(),/暂无匹配/);
 await page.goto(base+'/products');await page.locator('#search').fill('XJDM11');await page.locator('#product-search button').click();assert.equal(await page.locator('.brand-card').count(),1);await page.locator('.brand-card').click();assert.equal(await page.locator('.resource-row').count(),8);
 for(const img of await page.locator('.product-image').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(img=>img.decode());assert.ok(await img.evaluate(img=>img.naturalWidth>0));}
 assert.equal(await page.locator('main a[href^="https://"]').count(),0);assert.equal(await page.locator('.official-datasheet').count(),7);assert.equal(await page.locator('.supplemental-datasheet').count(),3);const pdfDownload=page.waitForEvent('download');await page.locator('#yt3110 .official-datasheet').click();assert.equal((await pdfDownload).suggestedFilename(),'yt3110-datasheet.pdf');assert.match(await page.locator('#yt3110 .product-specs').textContent(),/THD = 10%/);
 const extract=page.waitForEvent('download');await page.locator('[data-extract=xjdm11]').click();assert.equal((await extract).suggestedFilename(),'xjdm11-parameter-extract.txt');
 await page.getByRole('button',{name:'EN',exact:true}).click();assert.equal(await page.locator('html').getAttribute('lang'),'en');assert.match(await page.locator('h1').textContent(),/SIMACITY/);
 await page.reload();assert.equal(await page.locator('html').getAttribute('lang'),'en');
 await page.goto(base+'/contact');assert.match(await page.locator('.company-panel').textContent(),/021-62271972/);assert.match(await page.locator('.company-panel').textContent(),/726/);const form=page.locator('#selection-form');assert.equal(await form.evaluate(f=>f.checkValidity()),false);
 for(const [name,value] of Object.entries({name:'Test User',company:'Example Ltd',email:'test@example.com',application:'Humidity monitoring',requirements:'I2C, 100 units, industrial environment.'}))await form.locator(`[name=${name}]`).fill(value);
 await form.locator('[name=consent]').check();await page.getByRole('button',{name:'CN',exact:true}).click();assert.equal(await form.locator('[name=email]').inputValue(),'test@example.com');await page.getByRole('button',{name:'EN',exact:true}).click();assert.equal(await form.locator('[name=application]').inputValue(),'Humidity monitoring');assert.equal(await form.evaluate(f=>f.checkValidity()),true);
 const download=page.waitForEvent('download');await form.locator('button[type=submit]').click();assert.equal((await download).suggestedFilename(),'SIMACITY-selection-brief.txt');
 const mailto=new URL(await page.locator('#email-action a').getAttribute('href'));assert.equal(mailto.pathname,'sales@simacity.com.cn');assert.match(mailto.searchParams.get('body'),/I2C, 100 units/);assert.match(await page.locator('#form-status').textContent(),/not sent/);
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:844});
  for(const path of ['/','/products','/products/simacity','/products/gigadevice','/solutions','/solutions/timing','/solutions/optical','/solutions/power-drive','/solutions/iot','/products/gigadevice?family=0','/solutions/automation','/news','/news/sensor-selection','/contact']){
   await page.goto(base+path);assert.equal(await page.locator('h1').count(),1,path);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`Horizontal overflow at ${width}: ${path}`);
  }
 }
 await page.setViewportSize({width:1440,height:1000});await page.goto(base+'/products/sgmicro');await page.getByRole('button',{name:'CN',exact:true}).click();await page.screenshot({path:'artifacts/brand-resources-desktop.png',fullPage:true});await page.goto(base+'/contact');await page.screenshot({path:'artifacts/contact-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.goto(base);await page.getByRole('button',{name:'CN',exact:true}).click();for(const img of await page.locator('.qr-frame img').all())await img.evaluate(e=>e.decode());await page.screenshot({path:'artifacts/home-mobile.png',fullPage:true});
 await page.locator('.menu-toggle').click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');await page.locator('.navigation a[href="/contact"]').click();assert.match(page.url(),/contact$/);assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
 await page.goto(base+'/solutions');assert.equal(await page.locator('.customer-grid>div').count(),10);assert.equal(await page.locator('.customer-grid img').count(),10);for(const image of await page.locator('.customer-grid img').all()){await image.scrollIntoViewIfNeeded();await image.evaluate(img=>img.decode());assert.ok(await image.evaluate(img=>img.naturalWidth>0));}await page.goto(base+'/solutions/measurement');await page.locator('.solution-products a[href="/products/simacity#m2202"]').click();assert.match(page.url(),/products\/simacity#m2202$/);assert.ok(await page.locator('#m2202 .official-datasheet').count());await page.goto(base+'/news');assert.equal(await page.locator('.published-news a').getAttribute('href'),'https://www.simacity.com/Home/BlogDetail?id=1');
 await page.goto(base+'/not-a-page');assert.match(await page.locator('h1').textContent(),/未找到/);
 assert.deepEqual(errors,[]);console.log('PASS: navigation, 55 brands, 5 external brand links, product-line tabs, brand overview downloads, search, 8 product images, 7 product PDFs and 3 supplemental PDFs, internal family resources, company details, downloads, bilingual persistence, required form validation, recipient, 56 responsive route checks, mobile menu and 404.');
} finally {await browser.close();}
