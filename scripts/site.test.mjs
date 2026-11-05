import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { brands } from '../src/catalog.js';
import { createHash } from 'node:crypto';
import { siteMedia, categories, solutions } from '../src/content.js';
let server, base;
before(async()=>{
  server=spawn(process.execPath,['scripts/server.mjs'],{cwd:new URL('..',import.meta.url),env:{...process.env,PORT:'0'},stdio:['ignore','pipe','pipe']});
  const ready=new Promise((resolve,reject)=>{let output='';server.stdout.on('data',d=>{output+=d;const m=output.match(/port (\d+)/);if(m){base='http://127.0.0.1:'+m[1];resolve();}});server.once('error',reject);server.once('exit',code=>reject(new Error('Server exited: '+code)));});
  await Promise.race([ready,new Promise((_,reject)=>setTimeout(()=>reject(new Error('Server readiness timeout')),5000).unref())]);
});
after(async()=>{if(server?.exitCode===null){server.kill();await once(server,'exit');}});
test('deep links load the application entry',async()=>{for(const path of ['/','/products','/products/simacity','/solutions/measurement','/contact','/news/sensor-selection']){const r=await fetch(base+path);assert.equal(r.status,200,path);assert.match(await r.text(),/src\/app\.js/);}});
test('all public modules and all supplied photographs/logos are served',async()=>{const paths=['/src/app.js','/src/content.js','/src/catalog.js','/src/styles.css','/favicon.svg',...Object.values(siteMedia).filter(Boolean),...brands.map(b=>b.logo).filter(Boolean),...brands.flatMap(b=>b.products.map(p=>p.image))];await Promise.all(paths.map(async path=>{const r=await fetch(base+path);assert.equal(r.status,200,path);assert.ok((await r.arrayBuffer()).byteLength>0,path);if(/\.(png|jpe?g)$/.test(path))assert.match(r.headers.get('content-type'),/^image\//,path);}));});
test('private files and unknown assets are not exposed',async()=>{for(const path of ['/.git/config','/package.json','/scripts/server.mjs','/README.md','/products/missing.pdf','/nonexistent.js'])assert.equal((await fetch(base+path)).status,404,path);});
test('catalog links are unique and self-developed technical records are localized',()=>{assert.equal(new Set(brands.map(b=>b.id)).size,brands.length);assert.ok(brands.length>50);const products=brands.find(b=>b.id==='simacity').products;assert.equal(products.length,8);for(const p of products){assert.ok(p.nameEn);assert.ok(p.description.en);for(const sp of p.specs){assert.ok(sp.key.en);assert.ok(sp.valueEn);}}const audio=products.find(p=>p.id==='yt3110');assert.equal(audio.specNotice,false);assert.ok(audio.specs.some(s=>s.value.includes('THD = 10%')),'Output-power conditions must accompany the 15 W rating');assert.ok(!audio.specs.some(s=>/LUT|ADC|FPGA/.test(s.key.en+' '+s.value)));assert.equal(audio.documents.length,1);});

test('official datasheets serve intact PDFs in development and built output',async()=>{
 const docs=brands.flatMap(b=>[...b.products.flatMap(p=>p.documents||[]),...(b.documents||[])]);assert.equal(docs.length,10);
 for(const doc of docs){
  assert.match(doc.url,/^\/documents\/[a-z0-9_-]+\.pdf$/);
  const response=await fetch(base+doc.url);assert.equal(response.status,200,doc.url);assert.equal(response.headers.get('content-type'),'application/pdf');
  const bytes=Buffer.from(await response.arrayBuffer());assert.equal(bytes.subarray(0,5).toString(),'%PDF-');assert.equal(bytes.length,doc.bytes);assert.equal(createHash('sha256').update(bytes).digest('hex'),doc.sha256);
 }
 assert.equal((await fetch(base+'/documents/missing.pdf')).status,404);
});
test('manufacturer resource links have bilingual titles and traceable public sources',()=>{
 for(const b of brands){for(const r of b.resources||[]){assert.match(r.url,/^https:\/\//);assert.ok(r.title.zh&&r.title.en);assert.ok(b.sources.length>0);assert.ok(!/[?&](access_token|token|sig)=/.test(r.url),'Use a stable index instead of a signed download URL');}}
 assert.equal(brands.find(b=>b.id==='biwin').manufacturerUrl,'https://www.biwin.com.cn/');
 assert.ok(brands.find(b=>b.id==='gigadevice').families.some(f=>f.en.includes('EEPROM')));
});

test('six product categories and six solutions share a complete consistent catalog',()=>{
 assert.equal(categories.length,6);assert.equal(solutions.length,6);
 const ids=new Set(categories.map(c=>c.id));
 for(const c of categories){assert.ok(c.brandIds.length);for(const id of c.brandIds){const b=brands.find(b=>b.id===id);assert.ok(b,id);assert.ok(b.categories.includes(c.id),id);}}
 for(const b of brands.filter(b=>b.lineType==='partner'))assert.ok(ids.has(b.category),b.id);
 for(const solution of solutions)for(const p of solution.products||[])assert.ok(p.brand?brands.some(b=>b.id===p.brand):brands.find(b=>b.id==='simacity').products.some(x=>x.id===p.id));
 const own=brands.find(b=>b.id==='simacity');assert.equal(own.products.find(p=>p.id==='xj485').documents.length,1);
 assert.ok(own.documents.some(d=>d.url.includes('xj1302')));assert.ok(own.documents.some(d=>d.url.includes('md2689')));
});

test('XJDM20w2B uses its supplied UART module datasheet',()=>{
 const p=brands.find(b=>b.id==='simacity').products.find(p=>p.id==='xjdm20w2b');
 assert.equal(p.documents.length,1);assert.match(p.documents[0].sourceFile,/XJ-JM-GD-GXHT/);
 assert.ok(p.specs.some(s=>s.value.includes('UART')));
 assert.ok(p.specs.some(s=>s.value.includes('0～+65')));
});
