const minimist = require("minimist");
const argv = minimist(process.argv.slice(2));
const sharp = require("sharp");
const path = require("path");
const createPathIfNotExist = require("./helpers");

const imagesDiferents = async () => {
  try {
    const samplesPath = path.resolve("./Ejercicio3/samples");

    // compruebo si existe la carpeta "samples" y sino existe la creo
    await createPathIfNotExist(samplesPath);

    // la proceso y la guardo
    const image = sharp("./Ejercicio3/images/1.jpg");

    image.resize(200);
    await image.toFile("./Ejercicio3/samples/1_modificado_resize.jpg");

    image.tint("rgb(255,0,0)");
    await image.toFile("./Ejercicio3/samples/1_modificado_color.jpg");

    image.grayscale();
    await image.toFile("./Ejercicio3/samples/1_modificado_grayscale.jpg");
  } catch (error) {
    console.error(error.message);
  }
};
imagesDiferents();
