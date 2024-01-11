
import { useState } from "react";

import useManagment from '../hooks/useManagment';
import Alert from './Alert';
import Spinner from "./Spinner";


/**
 * LoginUser component.
 * 
 * This component represents the login form for users.
 * Use the custom 'useManagment' hook to manage state and login-related functions.
 * 
 * @component
 * @returns {JSX.Element} Login Form Component.
 */




const LoginUser = ()=>{

     // States and functions provided by the custom hook 'useManagment'
    const {alert,
           showAlert,
           submitLoginUser,
           charging,
           setCharging
          }= useManagment();


    // Local state to store the value of the DNI
    const[dni,setDni]=useState("");
 
    /**
     * Handles login form submission.
     * 
     * @param {Event} e - Form event.
     */
    const handleSubmit = async (e)=>{

        e.preventDefault();

         // Validation of the DNI field
        if([dni].includes("")){

           
            showAlert("El campo DNI es obligatorio para poder loguearse",true,"LoginUser");
            return;

        }

        // Start the charging process
        setCharging(true);

         // Send the login request
        await submitLoginUser({dni});


         // Stops the loading process after a timeout (simulated with setTimeout)
        setTimeout(()=>{

            setCharging(false);

        },1000)

        // Clear the value of the DNI field

        setDni("");
       

        
    }



    return(

                <>

                    <h2 className="mt-24 text-center uppercase text-4xl font-bold text-bluish-green">Login Usuarios</h2>

                    <form 
                    
                        onSubmit={handleSubmit}
                        className="mt-8"
                    >


                            {
                                /* Show loading spinner if in progress */
                                charging && <Spinner />

                            }

                            {


                                /**
                                     * Conditional display of the alert.
                                     * 
                                     * The alert is displayed if there is no charging process in progress (!charging)
                                     * and if the 'nameComponentShow' property of the 'alert' object is equal to "LoginUser".
                                     * This ensures that the alert is presented only on this component, since 'nameComponentShow'
                                     * serves as an identifier to determine the component to which the alert belongs.
                                     * 
   
                                */

                                (!charging  && alert.nameComponentShow=="LoginUser") && (<Alert alert={alert} />) 

                            }

                            {/* DNI */}
                            <div className="mb-6 md:mb-0 container-field  mt-6">

                                <label 

                                    htmlFor="dni-login"
                                    className="block uppercase font-semibold text-bluish-green text-xl mb-1"
                                
                                
                                >
                                    dni:
                                
                                </label>

                                {/* CONTAINER GRID */}
                                <div className="md:flex">
        
                                    <input 


                                        className="login-dni border py-2 px-3 "
                                        type="text" 
                                        placeholder="Tu DNI" id="dni-login"
                                        value={dni}
                                        onChange={(e)=>{
                                                            
                                                            setDni(e.target.value.trim())
                                                            
                                                        
                                                        }}

                                        onBlur={(e)=>{

                                                 /**
                                                     * Handles the onBlur event of the DNI field.
                                                     * 
                                                     * This event is triggered when the DNI field loses input focus.
                                                     * Perform a validation using a regular expression to ensure that the ID is in the correct format (8 digits).
                                                     * If the format is not valid, it displays an alert indicating that a valid DNI number must be entered.
                                                     * The alert is associated with the "LoginUser" component using this information for contextual tracking.
                                                     * 
                                                **/     

                                                        const expresionRegular = /^\d{8}$/;
                                                        ( !expresionRegular.test(e.target.value) ) && showAlert("Ingrese un número de DNI válido. Ejemplo: 78945612.",true,"LoginUser")
                                                    

                                                    } }
                                    />

                                    {/* Form Submit Button */}                    
                                    <input 
                                    
                                        className="login-btn-submit btn-submit uppercase bg-bluish-green text-white py-3 px-5 cursor-pointer"
                                        type="submit" 
                                        value="Login" />

                                </div>  {/* END CONTAINER GRID */}

                            </div> {/* END DNI */}
                        
                       


                    </form>

                </>


          )



}


export default LoginUser;