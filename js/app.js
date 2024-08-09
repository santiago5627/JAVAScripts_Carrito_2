/**
 * ARRAY PARA ALMACENAR
 * CURSOS PARA CARRITO
 */

let carritoCompras = []








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

//limpiar carrito de compras 
function limpiarcarrito(){
        //vaciar el tbody
        contenedorCarrito.innerHTML = ""

}








function carritoHTML(){

    limpiarcarrito()

    //1.Recorrer el arreglo 
    //del carrito de compras
    carritoCompras.forEach((curso)=>{
            //2. Por cada curso
            //destructurar el obejto curso
            const {imagen, nombre , precio, cantidad} = curso
            //crear un <tr>
            const fila = document.createElement('tr')
            fila.innerHTML = (`<td>
                                <img src="${ imagen }"
                                    width="100"/>    
                             </td>
                             <td>
                                ${nombre}
                             </td>
                             <td>
                                ${precio}
                             </td>
                             <td>
                                ${cantidad}
                            </td>
                            <td>
                                <a href="#" class="borrar-curso"> 
                                        X
                                </a>
                            </td>
                             `
                                                        
                            )
                
            //3.vincular la fila del tbody
            contenedorCarrito.appendChild(fila)
    })
}
function leerDatosCurso(curso){
    
    //1. Crear objetos curos
    const cursoElegido ={
        nombre : curso.children[1].children[0].textContent,
        precio : curso.children[1].children[3].children[0].textContent,
        imagen : curso.children[0].src,
        cantidad: 1
    }

    //2. añadir el cursoElegido al Array
    //carritoCompras
    //2.1 si el curso elegido existe
    //en el arreglo

    const existe = carritoCompras.some((curso) => {
        return curso.nombre  === cursoElegido.nombre                                                      
    })
    
    //console.log(existe)
    
    if(existe){
            //actualizamosla cantidad
            //map : para hacer un copia
            const cursos = carritoCompras.map((curso)=>{
                if(curso.nombre === cursoElegido.nombre){
                    curso.cantidad = curso.cantidad + 1
                    return curso
                }
                return curso

            })
            carritoCompras = [...cursos]
    }else{
            //ingresar el curso al
            //carrito  
            carritoCompras = [...carritoCompras,
                cursoElegido ]
    }

    //console.log(carritoCompras);
    
    //3. Cargar el tbody del contenedor de cursos 
    //con la informacion del areglo
    
    carritoHTML()
}
//crear evento para click en listaCursos:
const agregarCurso = function(evt){
    evt.preventDefault()
    if(evt.target.classList.contains("button-primary")){
       /* console.log(evt.
            target.
            parentElement.
            parentElement)*/
        leerDatosCurso(evt.
            target.
            parentElement.
            parentElement)
    }
}

function eliminarCurso(e){
    //eleiminar comportamiento defauld
    e.preventDefault()
    //prevenir el event bubbling 
    if(e.target.classList.contains('borrar-curso')){
        // filtrar el arreglo 
        //para quitar todo aquel elemento que coincida
        //con el de l afila del boton
        const cursoBorrar = e.target.parentElement.parentElement.children[1].innerText
        //console.log(cursoBorrar)
        carritoCompras = carritoCompras.filter((curso)=>{
                //Filtrar los cursos
                //que no tienen le nombre 
               return curso.nombre != cursoBorrar
        })
        console.log(carritoCompras)
        carritoHTML()
    }
}
//funcion para reunir todos los listereners de 
//los controles
const cargarListeners = () => {
        listaCursos.addEventListener("click" , agregarCurso)
        carrito.addEventListener("click" , eliminarCurso)
}
//ejectar la funcion
//se ejecuta cuando se descarga  HTML
cargarListeners();
 listaCursos.addEventListener("click",agregarCurso);


