const fs = require('fs')
const chalk = require('chalk')



const leerCancion = (artista) => {
    try {
        const buffer = fs.readFileSync(artista)
        const artistaString = buffer.toString()
        return JSON.parse(artistaString)
    } catch (error) {
        console.log(error)
        return []
    }
}

const escribirCancion = (artista, cancion) => {
    const textoJSON = JSON.stringify(cancion)
    fs.writeFileSync(artista, textoJSON)
}


const crearCancion = (artista, cancion,ano) => {

    const canciones = leerCancion('canciones.json')

    // buscar si existe la cancion
    const indice = canciones.findIndex(
        (canciones) => canciones.cancion == cancion
    )
    if (indice === -1) {
        console.log(chalk.green.inverse('Cancion creada'))
        canciones.push({ artista, cancion })
        escribirCancion('canciones.json', canciones)
    } else {
        console.log(chalk.red.inverse('Cancion ya existente'))
    }
}


const borrarCancion = (artista) => {

    const cancion = leerCancion('canciones.json')

    const indice = cancion.findIndex((canciones) => canciones.artista === artista)
    if (indice === -1) {
        console.log('Cancion no encontrada')
    } else {
        console.log('Cancion borrada')
        cancion.splice(indice, 1)
        escribirNotas('canciones.json', cancion) // notas tiene un elemento menos
    }
}


function listarCanciones(){
    const canciones = leerCanciones('../json/canciones.json')
    console.log(canciones);
}
const ordenarCanciones = (artista) => {
    const cancion = leerCancion('canciones.json')
    if (artista === 'artista') {
        cancion.sort((artistaA, artistaB) => {
            if (artistaA.artista.toLowerCase() < artistaB.artista.toLowerCase()) {
                return -1
            } else if (artistaA.artista.toLowerCase() > artistaB.artista.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        cancion.sort((artistaA, artistaB) => {
            if (artistaA.cancion.toLowerCase() < artistaB.cancion.toLowerCase()) {
                return -1
            } else if (artistaA.cancion.toLowerCase() > artistaB.cancion.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
    escribirCancion('canciones.json', cancion)
}

//



module.exports = {
    leerCancion,
    crearCancion,
    borrarCancion,
    ordenarCanciones,
    listarCanciones

}


