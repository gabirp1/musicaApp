

const { leerCancion ,crearCancion,  borrarCancion, ordenarCanciones, listarCanciones } = require('./canciones')

const yargs = require('yargs')



yargs.command({
    command: 'add',
    describe: 'añadir cancion',
    builder: {
        artista: {
            alias: 'a',
            describe: 'el artista',
            demandOption: true,
            type: 'string'
        },
        cancion: {
            alias: 'c',
            describe: 'la cancion',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        crearCancion(argv.artista, argv.cancion)
    }
})

yargs.command({
    command: 'remove',
    describe: 'borrar cancion',
    builder: {
        titulo: {
            describe: 'artista',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        borrarCancion(argv.artista)
    }
})

yargs.command({
    command: 'sort',
    describe: 'ordenar canciones',
    builder: {
        criterio: {
            describe: 'artista o cancion',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ordenarCancion(argv.criterio)
    }
})

yargs.command({
    command: 'find',
    describe: 'buscar texto en canciones',
    builder: {
        texto: {
            describe: 'texto a buscar',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        buscarTextoEnNotas(argv.texto)
    }
})

yargs.parse()

