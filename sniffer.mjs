import { createServer } from "http";
import {  get } from "https";

const hostname = "localhost",
  port = 3000,
  options = {
    host: "jonmircha.com",
    port: 80,
    path: "/cursos",
  };

let htmlCode = "";

// cliente
const httpClient = (res) => {
  console.log(
    `El sitio ${options.host} ha respondido con el codigo ${res.statusCode}. Mensaje : ${res.statusMessage}.`
  );

  // evento on se ejecuta cuando pasa informacion
  res.on("data", (data) => {
    htmlCode += data;
    console.log(data);
  });
};

// funcion que se ejecuta cuando se conecte al cliente hhtp

const httpErros = (err) => {
  console.error(
    `El sitio ${options.host}NO ha respondido con el codigo ${err.statusCode}. Mensaje : ${err.statusMessage}.`
  );
};

const webServer = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(htmlCode);
};
// permite crear la instancia de cliente hhtp o https
get(options, httpClient).on("error", httpErros);
// instancia servidor web pone en marcha el sniffer
createServer(webServer).listen(port, hostname, () => {
  console.log(`servidor corriendo en http://${hostname}:${port}`);
});

// queda pendiente que se pueda guardar como un archivo html
// utilizar lo trabajo en consola y filesystem para guardar un archivo html