import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist/src',{recursive:true});
for (const file of ['index.html','favicon.svg','src/app.js','src/content.js','src/catalog.js','src/styles.css','src/performance.css']) await copyFile(file,'dist/'+file);
await cp('public','dist',{recursive:true});
console.log('Built static site in dist/');
