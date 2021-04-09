const express = require("express");
const cors = require("cors");

const { socketController } = require("../sockets/controller-sockets");


class Server {
  constructor() {
    this.app    = express();
    this.port   = process.env.PORT;
    this.server = require("http").createServer(this.app)
    this.io     = require("socket.io")(this.server)

    this.paths = {
    // ASI SE ESTABLECEN LOS PATHS
    //   auth: "/api/auth",
    };
    
    //Middlewares
    this.middlewares();
    
    //RUTAS DE MI APP
    this.routes();

    //Sockets Event
    this.sockets();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Middleware de directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // ASI SE ESTABLECEN LAS RUTAS
    // this.app.use(this.paths.usuarios, require("../routes/user.Routes"));
  }
  //CONFIGURACION O EVENTOS DE LOS SOCKETS
  sockets() {
    this.io.on('connection', socketController )
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("servidor corriendo en el puerto: ", this.port);
    });
  }
}
module.exports = Server;

/**
 * El Web Socket server, cambia y crea un nuevo s erver, y este server se inicializa
 * con el listen de nuestra clase Server, ln36.
 * Ademas, crea un server, NO APP, y desde ahi inicializa socketio
 */


/**
 * NOTAS: LOS EMITS DE LOS SOCKETS, SIEMPRE VAN DENTRO DE LA CONEXION
 */