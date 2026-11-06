import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(fileURLToPath(new URL('..', import.meta.url)), process.env.SERVE_DIST === '1' ? 'dist' : '.');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.pdf':'application/pdf'};
const server = http.createServer(async (req,res) => {
  try {
    const path = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if (/(^|\/)\./.test(path)) {res.writeHead(404).end('Not found');return;}
    let file = resolve(root, '.' + path);
    if(file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    // Only public site assets are exposed, never source-control or server files.
    if (/^\/(products|brands|media)\/[a-zA-Z0-9_-]+\.(png|jpe?g|webp)$/.test(path) || /^\/documents\/[a-zA-Z0-9_-]+\.pdf$/.test(path)) {file = resolve(root, process.env.SERVE_DIST === '1' ? '.'+path : 'public'+path);}
    else if (path !== '/' && !/^\/(src\/(app|content|catalog)\.js|src\/styles\.css|src\/performance\.css|favicon\.svg|index\.html)$/.test(path)) {
      if (extname(path)) {res.writeHead(404).end('Not found');return;}
      file = resolve(root, 'index.html');
    }
    if ((await stat(file)).isDirectory()) file = resolve(file,'index.html');
    res.writeHead(200, {'Content-Type':mime[extname(file)] || 'application/octet-stream','X-Content-Type-Options':'nosniff'});
    res.end(await readFile(file));
  } catch { res.writeHead(404).end('Not found'); }
});
server.listen(Number(process.env.PORT || 3000),'0.0.0.0',()=>console.log('SIMACITY listening on port '+server.address().port));
