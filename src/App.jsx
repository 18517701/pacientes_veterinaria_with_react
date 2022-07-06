
import Formulario from './components/Formulario';
import { useState,useEffect } from 'react' ;
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';


function App() {

const [pacientes , setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);//de ak salen los datos para todo el resto de componentes
const [paciente, setPaciente] = useState({});
//EN LOCAL STORAGE NO PUEDES GUARDAR ARREGLOS SOLOS PUEDES GUARDAR STRINGS Y PARA ESTO HACEMOS EL USEEFFECT PASANDOLE LOS PARAMETROS DE PACIENTES
//LO QUE SE ENCUENTRA EN COMENTARIOS ERA USO DEL USEE FFECT EN VERSIONES ANTERIORES , Y EN VERSIONES
//POSTERIORES SE USA EL USEEFFECT EN EL MISMO USE STATE EJEMPLO LINEA 10. 
//useEffect (()=> {//obtiene lo que tienes en local storage

  //const obtenerLS =() =>{

  //const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // ESTO QUIERE DECIR QUE SI NO HAY NADA EN LOCAL STORAGE MUESTRA UN ARREGLO VACIO
//EL JSON.PARSE sirve para convertir de string a un arreglo (objeto)para eso usamos el typeof en el console.log siguiente
 //setPacientes( pacientesLS)

//}
//obtenerLS();
//},[]);//le colocamos un arreglo vacio dentro del use effect y se ejecutara una sola vez, recuerda el orden de los use effect
useEffect (()=> {

  localStorage.setItem('pacientes', JSON.stringify( pacientes ));
},[pacientes]);

const eliminarPaciente = (id) => {
const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

  setPacientes(pacientesActualizados)
}
return (
    <div className="container mx-auto mt-20 ">
      < Header 
      
      //numeros = { 1 }//este es un prop
      //isAdmin={false} 
      />
      <div className=" flex mt-12 md:flex">

      < Formulario

      pacientes = {pacientes}
      setPacientes = {setPacientes}
      paciente = {paciente}
      setPaciente = {setPaciente}
      
      />
      <ListadoPacientes
      
      pacientes = {pacientes}
      setPaciente = {setPaciente}
      eliminarPaciente = {eliminarPaciente}
      />
    
      </div>

    </div>
  );
}

export default App;

