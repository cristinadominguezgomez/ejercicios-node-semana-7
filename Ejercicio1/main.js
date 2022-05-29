const argv = process.argv.slice(2);
const fs = require("fs").promises;

// const saveEvents = async (argv) => {
//   const [date, description] = argv;
//   console.log(argv); // array con los datos ["2022-05-12","Fue un día muy soleado"]

//   await fs.writeFile("./Ejercicio1/events1.txt", `${date} ${description}`); // creo el archivo events1.txt
// };
// saveEvents(argv);

const events = {};
const saveEvents = async (argv) => {
  try {
    const [date, description] = argv;
    events["date"] = date;
    events["description"] = description;
    console.log(events);

    await fs.writeFile("./Ejercicio1/events.json", JSON.stringify(events)); // creo el archivo events.json
  } catch (error) {
    console.error(error.message);
  }
};
saveEvents(argv);
