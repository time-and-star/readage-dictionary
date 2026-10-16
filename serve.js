/* serve.js · 零依赖静态服务器
 * 用法： node serve.js [端口]      默认 http://127.0.0.1:5173
 * 也可被测试脚本 require 后调用 createServer()。
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const ROOT = __dirname;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.md': 'text/markdown; charset=utf-8',
};

function createServer() {
  const crypto = require('crypto');
  const zlib = require('zlib');
  const etags = new Map();
  function etagFor(data) {
    // 小文件直接计算，大文件按长度+mtime缓存，避免每次全量哈希
    return crypto.createHash('sha1').update(data).digest('hex').slice(0, 16);
  }
  return http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Method Not Allowed');
      return;
    }
    const parsed = url.parse(req.url);
    let pathname = decodeURIComponent(parsed.pathname || '/');
    if (pathname === '/') pathname = '/index.html';
    const filePath = path.join(ROOT, path.normalize(pathname).replace(/^([/\\])+/, ''));
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }
    fs.stat(filePath, (statErr, stat) => {
      if (statErr || !stat.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found: ' + pathname);
        return;
      }
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found: ' + pathname);
          return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const isAsset = /^\/(assets|tests)\//.test(pathname.replace(/\\/g, '/'));
        let etag = etags.get(filePath);
        const mtime = String(stat.mtimeMs);
        if (!etag || etag.mtime !== mtime) {
          etag = { tag: '"' + etagFor(data) + '"', mtime };
          // 只缓存最近 200 个文件的 ETag，避免内存膨胀
          if (etags.size > 200) etags.clear();
          etags.set(filePath, etag);
        }
        if (req.headers['if-none-match'] === etag.tag) {
          res.writeHead(304, { ETag: etag.tag });
          res.end();
          return;
        }
        const headers = {
          'Content-Type': MIME[ext] || 'application/octet-stream',
          // index.html 保持 no-cache；assets/tests 下的 JS/CSS 可长缓存（内容变更时文件名不变但有 ETag 兜底）
          'Cache-Control': isAsset ? 'public, max-age=3600' : 'no-cache',
          ETag: etag.tag,
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'no-referrer',
        };
        const acceptGzip = /\bgzip\b/.test(req.headers['accept-encoding'] || '');
        const compressible = /^\.(html|css|js|json|svg|md)$/.test(ext) && data.length >= 1024;
        if (req.method === 'HEAD') {
          res.writeHead(200, headers);
          res.end();
          return;
        }
        if (acceptGzip && compressible) {
          zlib.gzip(data, (gzErr, gz) => {
            if (gzErr || gz.length >= data.length) {
              res.writeHead(200, headers);
              res.end(data);
              return;
            }
            headers['Content-Encoding'] = 'gzip';
            res.writeHead(200, headers);
            res.end(gz);
          });
          return;
        }
        res.writeHead(200, headers);
        res.end(data);
      });
    });
  });
}

if (require.main === module) {
  const port = Number(process.argv[2]) || 5173;
  createServer().listen(port, '127.0.0.1', () => {
    console.log('ReadAge 词典已启动： http://127.0.0.1:' + port + '/');
    console.log('停止服务：Ctrl + C');
  });
}

module.exports = { createServer };
