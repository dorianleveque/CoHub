var express = require('express');
var ifs = require('os').networkInterfaces();
const consoleDialog = require('console-dialog');

var app = express();

var path = __dirname + '/../build';
var port = 80;

app.use(express.static(path));
app.get('*', function(req, res) {
    res.sendFile(path + '/index.html');
});
app.listen(port);


var adresse = Object.keys(ifs)
  .map(x => [x, ifs[x].filter(x => x.family === 'IPv4')[0]])
  .filter(x => x[1])
  .map(x => x[1].address)[1];
  
let dialog = consoleDialog()
let msg = [];
msg.push('Serveur lancé !');
msg.push(' ')
msg.push(`- Local:            http:localhost:${port}`);
msg.push(`- On Your Network:  ${adresse}:${port}`);
dialog.append(msg);
console.log(dialog.render({corner: 'round'}));
