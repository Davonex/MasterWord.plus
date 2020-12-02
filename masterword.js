// Express
let express = require('express')

// Creation de l'application
let app = express();

// Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
let  ent = require('ent'); 

//Set up server
let server = app.listen(process.env.PORT || 2199,"192.168.1.14", listen);
//let server = app.listen(process.env.PORT || 2099,"192.168.0.9", listen);


// Callback pour confirmer que le server est start
function listen(){
  let host = server.address().address;
  let port = server.address().port;
  console.log('MasterWord.plus Server Started at http://' + host + ':' + port+'/');
  console.log (server)
}

// Files for client
app.use(express.static('public'))

// Websocket
let io = require('socket.io')(server);


io.sockets.on('connection', function(socket){
	// SOCKET_LIST[socket.id] = socket;
	console.log('CONNECT: ' + socket.id);
});







