import { useState } from "react";
import { Link } from "react-router-dom";

import useManagment from "../hooks/useManagment";


/**
 * Header component.
 * 
 * This component represents the top navigation bar of the web application.
 * Uses 'react-router-dom' library for link navigation.
 * Use the custom 'useManagment' hook to manage user state.
 * 
 * @component
 * @returns {JSX.Element} Top navigation bar component.
 */



const Header = ()=>{

        // State and functions of the custom hook 'useManagment
        const {nameUserLogin, setNameUserLogin , charging} = useManagment();

        // Local state to control the visibility of the logout button
        const [showLogOutButton , setShowLogOutButton] = useState(false);

        /**
            * Handles the logout event.
            * Which is exclusively responsible for cleaning the value stored in nameUserLogin.
        */
        const handleSignOff = ()=>{
            
       
            setNameUserLogin("");

        }


        return(

                    <header className="bg-bluish-green fixed top-0 w-full shadow-lg">

                        <div className="container flex justify-between items-center relative">

                            <div >

                                 {/* Company logo */}
                                <Link to="/">

                                    <img 

                                            className="w-36"
                                            src="https://www.rapimoney.pe/wp-content/uploads/2023/07/logo-principal.png" 
                                            alt="Logo de Rapimoney" 
                                    />

                                </Link>

                            </div>

                            <div >

                                {/* User information container */}
                                <div 

                                    onClick={()=>{

                                                    setShowLogOutButton(!showLogOutButton);

                                                  }
                                            }
                                    className={ 
                                                !showLogOutButton ? `container-info-user flex items-center gap-3 cursor-pointer py-3 px-6 transition-all` :
                                                                    `bg-light-teal flex items-center gap-3 cursor-pointer py-3 px-6 transition-all` 
                                              }
                                >

                                    {/* user image */}
                                    <img 
                                        
                                        className="w-12"
                                        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                                        alt="Imagen de usuario"  />


                                    {/* Welcome message */}
                                    <p className="text-white">Hola , <span className="font-bold"> { (nameUserLogin.length>0 && !charging)?nameUserLogin  : "Usuario"  }</span></p>


                                </div>



                                {
                                    /* Logout button */

                                    showLogOutButton && 
                                        (
                                            <div className="container-btn-close bg-white border border-solid border-gray-400  py-4 px-2  grid place-items-center  w-64 shadow rounded absolute right-0">

                                                <Link 
                                                    
                                                    to="/"
                                                    onClick={()=> {handleSignOff();}}  
                                                    className="btn-close"
                                                    
                                                >
            
                                                    SALIR
            
                                                </Link>
        
                                            </div>
        

                                        )

                                }

                            </div>

                        </div>

                    </header>


              )

}


export default Header;