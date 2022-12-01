

require("colors");


const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log("=========================".gray);
        console.log("Seleccione una opción".gray);
        console.log("=========================\n".gray);

        console.log(`${'1'.grey}.Crear tarea`);
        console.log(`${'2'.grey}.Listar tareas`);
        console.log(`${'3'.grey}.Listar tareas completadas`);
        console.log(`${'4'.grey}.Listar tareas pendientes`);
        console.log(`${'5'.grey}.Completar tarea(s) pendientes`);
        console.log(`${'6'.grey}.Borrar tarea`);
        console.log(`${'0'.grey}.Salir \n`);

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question("Seleccione una opción:", (opt) => {
            readline.close();
            resolve(opt)
        });

    });
}


const pausa = () => {

    return new Promise(resolve => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${"ENTER".grey} para continuar.\n`, (opt) => {
            readline.close();
            resolve();

        })

    });

}
module.exports = {
    mostrarMenu,
    pausa

}