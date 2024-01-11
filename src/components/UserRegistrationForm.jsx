import {useState} from 'react';


import useManagment from '../hooks/useManagment';

import Alert from './Alert';

import { ToastContainer } from 'react-toastify';


/**
 * User registration form.
 * 
 * This form allows users to enter information to register.
 * Use the custom 'useManagment' hook to manage state and necessary functions.
 * It also uses the 'Alert' component to display alert messages to the user.
 * Also, use 'react-toastify' to show success notifications.
 * 
 * @component
 * @returns {JSX.Element} User registration form.
 */


const UserRegistrationForm = ()=>{
    // Gets states and functions from the 'useManagment' custom hook
    const {alert,showAlert,submitUser}= useManagment();

     // Local states for form fields
    const [dni , setDni] = useState("");
    const [name,setName] = useState("");
    const [lastName , setLastName] = useState("");
    const [birthDay,setBirthDay] = useState("");
    const [cellPhone , setCellPhone] = useState("");
    const [email,setEmail] = useState("");
    const [bank,setBank] = useState("");
    const [cci,setCci] = useState("");

   
    /**
     * Handles the form submission function.
     * @async
     * @param {Event} e - Form event object.
     */
    const handleSubmit = async (e)=>{

        e.preventDefault();

        // Check if any required fields are empty
        if([dni,name,lastName,birthDay,cellPhone,email,bank,cci].includes("")){

          
            showAlert("Todos los campos son obligatorios",true,"UserRegistrationForm");
            return;

        }

        //Send the user information to register
        await submitUser({dni,name,lastName,birthDay,cellPhone,email,bank,cci});

      


        // Reset local form states
        setDni("");
        setName("");
        setLastName("");
        setBirthDay("");
        setCellPhone("");
        setEmail("");
        setBank("");
        setCci("");


        
    }

     
 

    return(

            <>
                
                <ToastContainer /> 

                <form 
                
                    onSubmit={handleSubmit}

                  


                >
                    

                    {
                        
                        ( alert.nameComponentShow=="UserRegistrationForm") && (<Alert alert={alert} />)

                    }

                    {/* CONTAINER GRID */}
                    <div className="mt-12 md:grid grid-cols-2 gap-8">

                        {/* DNI */}
                        <div className="mb-6 md:mb-0 container-field  ">

                            <label 

                                htmlFor="dni"
                                className="block uppercase font-semibold text-bluish-green text-xl mb-1"
                            
                            
                            >
                                dni:
                            
                            </label>
                            
                            <input 


                                className="w-full border py-2 px-3 "
                                type="text" 
                                placeholder="Tu DNI" id="dni"
                                value={dni}
                                onChange={(e)=>{
                                                    setDni(e.target.value.trim())
                                                    
                                                
                                                }}

                                onBlur={(e)=>{

                                                /**
                                                     * Handles the onBlur event of the DNI field.
                                                     *
                                                     *This event is activated when the DNI field loses input focus.
                                                     * Perform a validation using a regular expression to ensure that the DNI is in the correct format (8 digits).
                                                     * If the format is not valid, it displays an alert indicating that a valid DNI number must be entered.
                                                     * The alert is associated with the "UserRegistrationForm" component using this information for contextual tracking.
                                                     *
                                                **/

                                                const expresionRegular = /^\d{8}$/;
                                             
                                                ( !expresionRegular.test(e.target.value) ) && showAlert("Ingrese un número de DNI válido. Ejemplo: 78945612.",true,"UserRegistrationForm")
                                            

                                             } }
                            />

                        </div> {/* END DNI */}


                        {/* NAMES */}
                        <div className="mb-6 md:mb-0 container-field ">

                            <label 

                                htmlFor="name"
                                className="block uppercase font-semibold text-bluish-green text-xl mb-1"
                            
                            
                            >
                                nombres:
                            
                            </label>
                            
                            <input 


                                className="w-full border py-2 px-3 "
                                type="text" 
                                placeholder="Tus Nombres" id="name"
                                value={name}
                                onChange={(e)=>{setName(e.target.value.trim())}}

                                onBlur={(e)=>{

                                  /**
                                        * Handles the onBlur event of the name field.
                                        *
                                        *This event is triggered when the name field loses input focus.
                                        * Perform a validation.
                                        * If the name field is empty, it displays an alert indicating that a valid "name" must be entered.
                                        * The alert is associated with the "UserRegistrationForm" component using this information for contextual tracking.
                                        *
                                    **/
                                    (!e.target.value.trim()!="" ) && showAlert("Ingrese un nombre válido.",true,"UserRegistrationForm")
                                    

                                 } }


                            />

                        </div> {/* END NAMES */}


                        {/* LAST NAMES*/}
                        <div className="mb-6 md:mb-0 container-field ">

                            <label 

                                htmlFor="last-names"
                                className="block uppercase font-semibold text-bluish-green text-xl mb-1"
                            
                            
                            >
                                Apellidos:
                            
                            </label>
                            
                            <input 


                                className="w-full border py-2 px-3 "
                                type="text" 
                                placeholder="Tus Apellidos" id="last-names"
                                value={lastName}
                                onChange={(e)=>{setLastName(e.target.value.trim())}}

                                onBlur={(e)=>{

                                    /**
                                        * Handles the onBlur event of the last name field.
                                        *
                                        *This event is triggered when the "last name" field loses input focus.
                                        * Perform a validation.
                                        * If the "last name" field is empty, it displays an alert indicating that a valid "last name" must be entered.
                                        * The alert is associated with the "UserRegistrationForm" component using this information for contextual tracking.
                                        *
                                    **/
                                    ( !e.target.value.trim()!="") && showAlert("Ingrese un apellido válido.",true,"UserRegistrationForm")
                                

                                 } }
                            />

                        </div> {/* END LAST NAMES */}



                        {/* BIRTHDAy*/}
                        <div className="mb-6 md:mb-0 container-field ">

                            <label 

                                htmlFor="birth-day"
                                className="block uppercase font-semibold text-bluish-green text-xl mb-1"


                            >
                                Fecha de Nacimiento:

                            </label>

                            <input 


                                className="w-full border py-2 px-3 "
                                type="date" 
                                placeholder="Tu Fecha de Nacimiento" id="birth-day"
                                value={birthDay}
                                onChange={(e)=>{setBirthDay(e.target.value.trim())}}

                                onBlur={(e)=>{

                                    /**
                                        * Handles the birthday field's onBlur event.
                                        *
                                        *This event is triggered when the birthday field loses input focus.
                                        * Perform a validation.
                                        * If the "birthday" field is empty, it displays an alert indicating that a valid date must be entered.
                                        * The alert is associated with the "UserRegistrationForm" component using this information for contextual tracking.
                                        *
                                    **/
                                    ( !e.target.value.trim()!="" ) && showAlert("Ingrese una fecha de nacimiento válida.",true,"UserRegistrationForm")
                                

                                 } }
                            />

                        </div> {/* END BIRTHDAY */}


                        {/* CELL PHONE*/}
                        <div className="mb-6 md:mb-0 container-field ">

                            <label 

                                htmlFor="cell-phone"
                                className="block uppercase font-semibold text-bluish-green text-xl mb-1"


                            >
                                celular:

                            </label>

                            <input 


                                className="w-full border py-2 px-3 "
                                type="cel" 
                                placeholder="Tu N° de Celular" id="cell-phone"
                                value={cellPhone}
                                onChange={(e)=>{setCellPhone(e.target.value.trim())}}


                                onBlur={(e)=>{

                                  
                                    /**     
                                        * Handles the onBlur event of the "cell-phone" field.
                                        *
                                        *This event is triggered when the "cell-phone" field loses input focus.
                                        * Perform a validation using a regular expression to ensure that the "cell-phone" field is in the correct format (9 digits) and that it starts with the number 9.
                                        * If the format is not valid, it displays an alert indicating that a valid cell phone number must be entered.
                                        * The alert is associated with the "UserRegistrationForm" component using this information for contextual tracking.
                                        *
                                    **/
                                    const expresionRegular = /^9\d{8}$/;
                                    ( !expresionRegular.test(e.target.value) ) && showAlert("Ingrese un número de celular válido. Ejemplo: 987654321.",true,"UserRegistrationForm")
                                

                                 } }
                            />

                        </div> {/* END CELL PHONE */}

                        {/* EMAIL*/}
                        <div className="mb-6 md:mb-0 container-field ">

                            <label 

                                htmlFor="email"
                                className="block uppercase font-semibold text-bluish-green text-xl mb-1"


                            >
                                correo:

                            </label>

                            <input 


                                className="w-full border py-2 px-3 "
                                type="email" 
                                placeholder="Tu Correo" id="email"
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value.trim())}}

                                onBlur={(e)=>{
                                    
                                    /**
                                        * Handles the onBlur event of the email field.
                                        *
                                        *This event is triggered when the "email" field loses input focus.
                                        * Perform a validation using a regular expression to ensure that the "email" is in the correct format (mail.mail@gmail.com).
                                        * If the format is not valid, it displays an alert indicating that a valid "email" must be entered.
                                        * The alert is associated with the "UserRegistrationForm" component using this information for contextual tracking.
                                        *
                                    **/
                                    const expresionRegular = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
                                    (!expresionRegular.test(e.target.value) ) && showAlert("Ingrese una dirección de correo electrónico válida. Por ejemplo: correo.correo@gmail.com.",true,"UserRegistrationForm")
                                

                                 } }

                            />

                        </div> {/* END EMAIL */}

                        {/* BANK*/}
                        <div className="mb-6 md:mb-0 container-field ">

                            <label 

                                htmlFor="bank"
                                className="block uppercase font-semibold text-bluish-green text-xl mb-1"


                            >
                                banco:

                            </label>

                            <input 


                                className="w-full border py-2 px-3 "
                                type="text" 
                                placeholder="Nombre del Banco" id="bank"
                                value={bank}
                                onChange={(e)=>{setBank(e.target.value.trim())}}

                                onBlur={(e)=>{

                                    /**
                                        * Handles the bank field's onBlur event.
                                        *
                                        *This event is triggered when the "bank" field loses input focus.
                                        * Perform a validation.
                                        * If the "bank" field is empty, it displays an alert indicating that a valid bank name must be entered.
                                        * The alert is associated with the "UserRegistrationForm" component using this information for contextual tracking.
                                        *
                                    **/
                                    ( !e.target.value.trim()!="") && showAlert("Ingrese un nombre de banco válido. Por ejemplo: Interbank.",true,"UserRegistrationForm")
                                

                                 } }
                            />

                        </div> {/* END BANK */}


                        {/* CCI*/}
                        <div className="mb-6 md:mb-0 container-field ">

                            <label 

                                htmlFor="cci"
                                className="block uppercase font-semibold text-bluish-green text-xl mb-1"


                            >
                                cci:

                            </label>

                            <input 


                                className="w-full border py-2 px-3 "
                                type="text" 
                                placeholder="CCI" id="cci"
                                value={cci}
                                onChange={(e)=>{setCci(e.target.value.trim())}}

                                onBlur={(e)=>{

                                    /**
                                        * Handle the onBlur event of the cci field.
                                        *
                                        * This event is triggered when the "cci" field loses input focus.
                                        * Perform validation using a regular expression to ensure that the "cci" is in the correct format (20 digits).
                                        * If the format is not valid, it displays an alert indicating that a valid cci number must be entered.
                                        * The alert is associated with the "UserRegistrationForm" component using this information for contextual tracking.
                                        *
                                    **/
                                    
                                    const expresionRegular = /^\d{20}$/;

                                    (!expresionRegular.test(e.target.value) ) && showAlert("Ingrese un código CCI válido. Ejemplo: 21345678958974632101.",true,"UserRegistrationForm")
                                

                                 } }
                            />

                        </div> {/* END CCI */}

                    </div>{/* END CONTAINER GRID */}

                    <div className=" mt-10 flex justify-center">

                        <input 
                            
                            className="btn-submit uppercase bg-bluish-green text-white py-3 px-5 cursor-pointer"
                            type="submit" 
                            value="registrar" />

                    </div>



                </form> 

            </>


          )

}


export default UserRegistrationForm;