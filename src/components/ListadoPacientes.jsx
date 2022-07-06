import {useEffect} from 'react';
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {
// {pacientes && pacientes.lenght ?  "Si hay Pacientes" : "No hay Pacientes"} 
// esto quiere decir que ? operador ternario y : es que en caso contrario que no hay pacientes

useEffect (()=>{
if(pacientes.length > 0 ){

    console.log("Tenemos un nuevo paciente");
}

},[pacientes])

return (
  
    <div className="md:w-1/2  lg:w3/5 md:h-screen font-bold h-screen overflow-scroll" >
     { pacientes &&  pacientes.length ?(
        <>
            <h2 className= " font-black text-3lg text-center ">Listado Pacientes</h2>
            <p className ="text-xl mt-5 mb-10 text-center  "> Administra tus {' '}
        <span className = "text-indigo-600 font bold">Pacientes y Citas</span>
        </p>
  
      
    { pacientes.map( paciente => (
            <Paciente 
            key={paciente.id} 
            paciente={paciente}//prop de paciente
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
            />
          
        ))}

        </>

     ) : (
        
        <>
         <h2 className= " font-black text-3lg text-center ">No hay Pacientes</h2>
            <p className ="text-xl mt-5 mb-10 text-center  "> Comienza agregando pacientes {' '}
        <span className = "text-indigo-600 font bold">Apareceran en este lugar</span>
        </p>
        
        
        </>
        )}

    </div>

    
  )
}

export default ListadoPacientes