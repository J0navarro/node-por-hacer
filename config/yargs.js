const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el status de a tarea', {
        descripcion,
        completado
    }).command('borrar', 'borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}