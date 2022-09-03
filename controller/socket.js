
const Usuario = require('../models/usuario');
const Mensaje = require('../models/mensaje');


const usuarioConectado = async (uid = ' ') => {

    const usuario = await Usuario.findById(uid);
    usuario.online = true;
    usuario.save();
    return usuario;
}

const usuarioDesConectado = async (uid = ' ') => {

    const usuario = await Usuario.findById(uid);
    usuario.online = false;
    usuario.save();
    return usuario;
}

const grabarMensaje = async (payload) => {

    try {
       
        const mensaje = new Mensaje(payload);
        await mensaje.save();

        return true;
    } catch (error) {
        return false;
    }

}

module.exports =  {
    usuarioConectado,
    usuarioDesConectado,
    grabarMensaje
    

}