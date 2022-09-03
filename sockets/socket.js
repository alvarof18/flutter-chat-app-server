
const { comprobarJWT } = require('../helpers/jwt');
const {io} = require('../index');

const{usuarioConectado, usuarioDesConectado, grabarMensaje} = require('../controller/socket')

//Mensaje de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado'); 
    const [valido,uid] = comprobarJWT(client.handshake.headers['x-token']);

    //Validar autenticacion
    if(!valido){
        return client.disconnect();
    }

    //Cliente autenticado
    console.log('cliente autenticado: ', uid);
    usuarioConectado(uid);

    // Ingresar al usuario en una sala en particular
    client.join(uid);

    //escucho la peticion de quien envio el mensaje
    client.on('mensaje-personal', async (payload) => {
        
    //grabo mensaje en base de datos
    await grabarMensaje(payload);
        
    // ruteo mensaje hacia esa persona
    io.to(payload.para).emit('mensaje-personal', payload);

    });


    client.on('disconnect', () => { 
        usuarioDesConectado(uid);    
        console.log('Cliente Desconectado')});
    });
    


