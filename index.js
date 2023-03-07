const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    switch (url) {
        case '/':
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.write('<h2>Index Sayfasına Hoşgeldiniz');
            break;
        case '/hakkimda':
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.write('<h2>Hakkımda Sayfasına Hoşgeldiniz');
            break;
        case '/iletisim':
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.write('<h2>İletişim Sayfasına Hoşgeldiniz');
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
            res.write('<h2>Sayfa Bulunamadı');
            break;
    }
    res.end();
})

const port = 5000;
server.listen(port, () => {
    console.log(`Server port ${port} de dinleniyor`);
})