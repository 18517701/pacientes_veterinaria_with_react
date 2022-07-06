import { useState,useEffect } from 'react'; //useEffect es un callback que se ejecuta cuando un state cambiao cuando el componente esta listo
//cuando el componente esta listo es un excelente lugar para colocar codigo, consultar una API o local Storage
import  Error  from './Error';


const Formulario = ({pacientes, setPacientes,paciente, setPaciente}) => {  
    const [nombre,setNombre ] = useState('');//ESTE ES EL STATE DE REACT
    const [propietario,setPropietario ] = useState('');
    const [contacto, setContacto] = useState('');
    const [fecha,setFecha] = useState('');
    const [sintomas,setSintomas ] = useState('');

    const [error, setError] = useState(false); 

    useEffect(()=> {

    if(Object.keys(paciente).length > 0){;//el object.keys permite observar si un arreglo tiene un objeto o esta vacio
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)//esto permite que al pulsar boton editar se  habiliten nuevament
        setContacto(paciente.contacto)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }  
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();//previenes la accion por defecto a el evento y se hace en cualquier formulario
    //validacion de formulario
    if([nombre,propietario,contacto,fecha,sintomas].includes('')){//includes permite validad que una de las variables tenga un string vacio
    console.log('al menos hay un campo vacio');

        setError(true)
        return;

    }
        setError(false)


        //objeto paciente
        const objetoPaciente = {
            nombre,
            propietario,
            contacto,
            fecha,
            sintomas,
            //id:generarId()esta linea la paso a la linea 61 para crear ID
        }

        if(paciente.id){
            objetoPaciente.id = paciente.id
            //console.log("editando");
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
                paciente.id ? objetoPaciente : pacienteState)//clase detectar un registro nuevo minuto 10

                setPacientes(pacientesActualizados)
                setPaciente ({})

        }else{
            //console.log("nuevo registro")
            objetoPaciente.id = generarId();
            setPacientes([...pacientes,objetoPaciente]);//permite agregar objeto y hacer un arregl
        }
        

        //reiniciar el formulario y se reinicia el state
        setNombre('')  
        setPropietario('')
        setContacto('')
        setFecha('')
        setSintomas('')



        }
    
    return (
   
    <div className="w-1/2 lg:w-3/5 p-4 font-bold text-center" >

        <h2>Seguimiento pacientes</h2>

        <p className=" mt-5">
            Añade Pacientes y  {' '}
            <span className="text-indigo-600 font-bold text-lg mt-3 "
            >Administrarlos</span>
        </p>
        <form 
        onSubmit={handleSubmit}//para un submit y muestre como enviar n fomrulario
        className="bg-white-50 shadow-2xl rounded-lg py-10 px-5 mt-2 mb-10">

            { error && < Error>Todos los campos son obligatorios</Error>}

            <div className ="mb-5 border-solid">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-semibold"> Mascota: </label>

                <input
                id="mascota" 
                type="text"
                placeholder='Nombre de Mascota'
                className="border-2 w-full p-2 mt-2 placeholder text-gray-400"
                value ={nombre}
                onChange = {(e) => setNombre(e.target.value) }//onchange es un evento de react
                        
                />
            </div>
            <div>
                <label htmlFor="propietario" className="block  text-gray-700 uppercase font-semibold "> Propietario: </label>

                <input
                id="propietario" 
                type="text"
                placeholder='Nombre de propietario'
                className="border-2 w-full p-2 mt-2 placeholder text-gray-400"
                value ={propietario}
                onChange = {(e) => setPropietario(e.target.value)}
                        
                />
            </div>
            <div>
                <label htmlFor="contacto" className="block  text-gray-700 uppercase font-semibold  mt-3"> Email: </label>

                <input
                id="contacto" 
                type="text"
                placeholder='Email de contacto'
                className="border-2 w-full p-2 mt-2 placeholder text-gray-400"
                value ={contacto}
                onChange = {(e) => setContacto(e.target.value)}       
                />
            </div>
            <div>
                <label htmlFor="fecha" className="block  text-gray-700 uppercase font-semibold  mt-3"> Fecha Alta: </label>

                <input
                id="fecha" 
                type="date"
                placeholder='Fecha'
                className="border-2 w-full p-2 mt-2 placeholder text-gray-400"
                value ={fecha}
                onChange = {(e) => setFecha(e.target.value)}        
                />
            </div>
            <div>

                <label htmlFor="sintomas" className="block  text-gray-700 uppercase font-semibold  mt-3"> 
                Sintomas
                </label>
                <textarea 
                id="sintomas"
                className="border-2 w-full p-2 mt-2 placeholder text-gray-400"
                placeholder="Describe los sintomas"
                value ={sintomas}
                onChange = {(e) => setSintomas(e.target.value)}
                ></textarea>

                
            </div>
            <input 
            type="submit" 
            className=" bg-indigo-400 w-full p-2 mt-2 placeholder text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-shadow "
            value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}//aqui es para que el boton sea agregar paciente cuando no hay 
            />
        </form>

    
   </div> 
  )
}

export default Formulario