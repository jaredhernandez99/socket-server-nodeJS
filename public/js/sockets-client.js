// refsHTML
const lblOnline  = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMsg     = document.querySelector('#txtMsg')
const btnEnviar  = document.querySelector('#btnEnviar')

const socket = io()

socket.on('connect',()=>{
    // console.log('Conectado');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', ()=>{
    console.log('desconectado del servidor');
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload);
})

//eventlistener

btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMsg.value;
    const payload = {
        mensaje,
        id: '1224d2w4512',
        fecha: new Date().getTime()
    }

    socket.emit( 'enviar-mensaje', payload , (id)=>{
        console.log('Desde el server', id);
    })
})
