const http = require('http');
const fs = require('fs'); // для работы с файловой системой

//createServer - еще один посол Нода, который найдет req и resp и отправит
// в долину))

const server = http.createServer(function(req, resp){
    //resp.end('Тут живет енот!\n');
    const enot = fs.readFileSync('./enot.jpg');
    resp.end(enot);
    
});

// на 3000 порту будет жить сервер))) process.env.PORT специально для хероку
server.listen(process.env.PORT || 3000);