
const {io} = require('../index');


//Mensaje de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');  
    client.on('disconnect', () => { console.log('Cliente Desconectado')});
    });
    
//     client.on('emitir-mensaje', (payload) => {
//        //Emite a todos menos a el que emitio
//        client.broadcast.emit('emitir-mensaje-nuevo', payload)
//       //console.log('mensaje!!', payload);


// } 
//     )
 

