

const socketController = (socket)=>{
    console.log('Cliente conectado', socket.id);
    socket.on('disconnect',()=>{
        console.log('Cliente Desconectado');
    })

    //LOS LISTENER VAN DENTRO DE LA CONEXION
    socket.on('enviar-mensaje',(payload,callback)=>{
        const id = 123456
        callback(id)
        socket.broadcast.emit('enviar-mensaje',payload)
    })
}
module.exports = {
    socketController
};
