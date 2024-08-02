/**
 * SELECTORES DOM
 */


const vaciarCarrito = document.querySelector("#vaciar-carrito")
console.log(vaciarCarrito)

const listaCursos = document.querySelector("#lista-cursos")
console.log(listaCursos)

const carrito = document.querySelector("#carrito")
console.log(carrito)

const contenedorCarrito = document.querySelector("#lista-carrito tbody")
/**
 * Fumciones de carrito
 */
function leerDatosCurso(curso){
    
    //Crear objetos curos
    const cursoElegido ={
        nombre : curso.children[0].textContent,
        precio : curso.children[3].textContent,
        imagen : curso.children[2]
    }
    console.log(cursoElegido)

    

}
//crear evento para click en listaCursos:
const agregarCurso = function(evt){
    evt.preventDefault()
    if(evt.target.classList.contains("button-primary")){
        console.log("..agegando al carrito")
        leerDatosCurso(evt.target.parentElement)
    }
}
 listaCursos.addEventListener("click",agregarCurso);


