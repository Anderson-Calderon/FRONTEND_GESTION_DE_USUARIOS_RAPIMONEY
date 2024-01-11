import useManagment from "../hooks/useManagment";

import { useState , useEffect } from "react";

/**
 * UserList component.
 * 
 * This component displays a list of users with detailed information. Use the custom 'useManagment' hook
 * to manage the status and functions related to the user list.
 * 
 * @component
 * @returns {JSX.Element} User list component.
 */




const UserList = ()=>{

        // States and functions provided by custom hook 'useManagment'
        const {listUser,setShowMore,setClickShowMore,viewShowMore} = useManagment();

        // Local state for search bar
        const[search,setSearch] = useState("");

        // Component rendering
        return(

                    <>  
                        {

                            /**
                             * Search form in the UserList component.
                             * 
                             * This form allows users to search the list
                             * through an input field, either using the ID or the username.
                             * 
                            **/

                        }
                    
                        <form className="flex justify-end items-center gap-4  w-full mt-24 ">

                            {/* search tag */}
                            <label 
                            
                                    htmlFor="search"
                                    className="uppercase font-bold text-bluish-green"
                                 
                                    
                            >
                                Buscar : 
                            
                            </label>

                            {/* Search input field */}
                            <input 

                                    className="border-2 p-2 w-48 md:w-72 "
                                    type="text" 
                                    placeholder="Buscar ..." 
                                    id="search"
                                    value={search}
                                    onChange={(e)=>{setSearch(e.target.value)}}
                                    
                            />

                        </form>

                        <div className="overflow-hidden">

                            <div className="overflow-x-scroll">

                            
                                <table className="w-full border-collapse overflow-x-scroll">

                                    <thead>

                                        <tr>

                                            <th className="border text-light-teal py-3">DNI</th>
                                            <th className="border text-light-teal py-3">NOMBRES</th>
                                            <th className="border text-light-teal py-3">APELLIDOS</th>
                                            <th className="border text-light-teal py-3">FECHA DE NACIMIENTO</th>
                                            <th className="border text-light-teal py-3">CELULAR</th>
                                            <th className="border text-light-teal py-3">CORREO</th>
                                            <th className="border text-light-teal py-3">BANCO</th>
                                            <th className="border text-light-teal py-3">CCI</th>


                                        </tr>

                                    </thead>



                                    <tbody>


                                        {

                                            /**
                                             * Conditional rendering of the users table in the UserList component.
                                             * 
                                             * This section uses conditional logic to display the user table based on the user's search.
                                             * If there are no search terms, the full list of users is displayed. If there are search terms, it is filtered and
                                             * shows only users that match the name or ID provided.
                                             * If there are no matches with the search, the following message is displayed: There are no matches                      
                                             */


                                            search.length==0 ?    

                                            listUser.length>0 && listUser.map((user)=>{
                                                
                                                

                                                const {dni,nombres,apellidos,fecha_nacimiento,celular,correo,banco,numero_cci} = user
                                                


                                               
                                                   return (

                                                        <tr key={dni} className="border">

                                                            <td className="border px-2 py-4 text-center">{dni}</td>
                                                            <td className="border px-1 py-4 text-center">{nombres}</td>
                                                            <td className="border px-1 py-4 text-center">{apellidos}</td>
                                                            <td className="border px-1 py-4 text-center">{fecha_nacimiento}</td>
                                                            <td className="border px-1 py-4 text-center">{celular}</td>
                                                            <td className="border px-1 py-4 text-center">{correo}</td>
                                                            <td className="border px-1 py-4 text-center">{banco}</td>
                                                            <td className="border px-1 py-4 text-center">{numero_cci}</td>
                
            
                                                        </tr>

                                                        )

                                            }) : 
                                            
                                            listUser.filter((user)=> user.nombres.toLowerCase().startsWith(search.toLowerCase()) || user.dni.toString().toLowerCase().startsWith(search.toLowerCase())).length>0 ?    

                                                listUser.length>0 && listUser.filter((user)=> user.nombres.toLowerCase().startsWith(search.toLowerCase()) || user.dni.toString().toLowerCase().startsWith(search.toLowerCase())  ).map((user)=>{
                                                
                                                

                                                    const {dni,nombres,apellidos,fecha_nacimiento,celular,correo,banco,numero_cci} = user
                                                
                                                


                                               
                                                   return (

                                                        <tr key={dni} className="border">

                                                            <td className="border px-2 py-4 text-center">{dni}</td>
                                                            <td className="border px-1 py-4 text-center">{nombres}</td>
                                                            <td className="border px-1 py-4 text-center">{apellidos}</td>
                                                            <td className="border px-1 py-4 text-center">{fecha_nacimiento}</td>
                                                            <td className="border px-1 py-4 text-center">{celular}</td>
                                                            <td className="border px-1 py-4 text-center">{correo}</td>
                                                            <td className="border px-1 py-4 text-center">{banco}</td>
                                                            <td className="border px-1 py-4 text-center">{numero_cci}</td>
                
            
                                                        </tr>

                                                        )

                                            }) : (<tr>
                                                
                                                        <td ></td>
                                                        <td ></td>
                                                      
                                                        <td className="text-center">No</td>
                                                        <td className="text-center">hay</td>
                                                        <td className="text-center">Coincidencias</td>
                                                        <td ></td>
                                                        <td ></td>
                                                        <td ></td>
                                                        
                                                        
                                                        
                                                        </tr>)





                                        }

                                       

                                    </tbody>

                                </table>

                               
                            
                            </div>

                            <div className="flex justify-center">
                                    
                                {

                                    /*
                                    
                                    * Este botón se utiliza para expandir la visualización de la lista de usuarios.
                                    * Al hacer clic en el botón, se activa la función setShowMore y setClickShowMore para mostrar más elementos
                                    * en la lista de usuarios.

                                    */

                                }                

                                {

                                    viewShowMore &&  <span 

                                    
                                                            onClick={()=>{setShowMore(true); setClickShowMore(true)}}
                                                            className="btn-ver-mas mt-5 bg-bluish-green text-white py-2 px-4 cursor-pointer"
                                                        >

                                                                VER MÁS

                                                        </span>

                                }

                               
                               

                            </div>

                            <p className="text-right text-xl">Total : {listUser.length} registros</p>


                        </div>

                    </>


               )



}

export default UserList;