const porHacer = require('./por-hacer/por-hacer');
const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('===================POR HACER==================='.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('===================================================='.green);
        }

        break;
    case 'actualizar':
        let actual = porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}