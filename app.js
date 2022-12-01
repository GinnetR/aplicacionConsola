import { guardarBD, leerDB } from './helpers/guardarArchivo.js';

import {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist

} from './helpers/inquirer.js';
import colors from 'colors';
import { Tareas } from './models/tareas.js';

console.clear();

const main = async () => {

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        //imprimir el menu 
        opt = await inquirerMenu();
        switch (opt) {
            case "1":
                //crear opcion
                const desc = await leerInput("Descripcion:");
                tareas.crearTarea(desc);
                break;
            case "2":
                tareas.listadoCompleto();
                break;
            case "3":
                tareas.listarPendintesCompletadas(true);
                break;
            case "4":
                tareas.listarPendintesCompletadas(false);
                break;
                case "5":
                   const ids = await mostrarListadoChecklist(tareas.listadoArr);
                   tareas.toggleCompletadas(ids);
                    console.log(ids);
                    break;
            case "6":
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== "0") {
                    const ok = await confirmar("¿Esta seguro?");
                    console.log({ id });
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log("Tarea borrada")
                    }

                }
                break;


            default:
                break;
        }

        guardarBD(tareas.listadoArr);

        await pausa();

    } while (opt !== '0');
};

main();


