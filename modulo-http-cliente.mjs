import { url } from "inspector"

// servidor hhtpp que espera una respuesta mediante una url

import { get } from "https";

const urlSite = {
  hostname: "jonmircha.com",
//   puerto https
  port: 443,
  path: "/cursos",
};

get(urlSite, (res) => {
  console.log(
    `El sitio ${urlSite.hostname} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}.`
  );
}).on("error", (err) => {
  console.error(
    `El sitio ${urlSite.hostname} no ha respondido. Código: ${err.code}. Mensaje: ${err.message}.`
  );
});