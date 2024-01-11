import { useEffect , useState , createContext } from "react";

import axios from "axios";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Creating the management context.
const ManagmentContext = createContext();


// Context provider for sharing data and functions between components.
const ManagmentProvider = ({children})=>{

    // State to handle alerts.
    const[alert,setAlert] = useState({});

     // State to store user list
    const[listUser,setListUser] = useState([]);

     // States for handling the load of more users
    const[showMore,setShowMore] = useState(false);
    const[clickShowMore , setClickShowMore] = useState(false);

    // Status to indicate whether or not the "SEE MORE" button should be displayed
    const[viewShowMore , setViewShowMore] = useState(true);
    

     // Status for the logged in user name
    const[nameUserLogin , setNameUserLogin] = useState("");

    // Status for loading
    const[charging,setCharging]=useState(false);

    /**State for the number of users to load and the offset is used to specify the number
      *of rows that should be omitted when performing the select query to the DB
    **/
    const[numberUsers,setNumberUsers] = useState(10);
    const[offset , setOffset] = useState(0);


    // Executed when the state of showMore changes
    useEffect(()=>{

    
    const getUsers = async ()=>{

                            
                            if(!clickShowMore){//It runs when the system has just loaded

                            
                                try{
                                    
                                    /**
                                     * uses the Axios library to make a GET request to the server, and the request URL is constructed
                                     * using the environment variable and the numberUsers and offset parameters.
                                     **/
                                    const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users?numberUsers=${numberUsers}&offset=${offset}`);
                           
                                    setListUser(data);

                                    setOffset(data.length );    
                                    
                                    if(data.length>=numberUsers){

                                        setViewShowMore(true);

                                    }else{

                                        setViewShowMore(false);

                                    }
                                    
                                }catch(err){

                                    console.log(err.message);


                                }
                              
                    
                             }else if(showMore){ //It is executed every time the user clicks on "SEE MORE"
                        
                                try{
                                    
                                 
                                    const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users?numberUsers=${numberUsers}&offset=${offset}`);
                                   
                                    setOffset(data.length + listUser.length);                          
                                   
                                        


                                    setListUser([...listUser , ...data]);
                                    setShowMore(!showMore);

                                    if(data.length>=numberUsers){

                                        setViewShowMore(true);

                                    }else{

                                        setViewShowMore(false);

                                    }

                                }catch(err){

                                    console.log(err.message);

                                }

                                
                    
                                
                    
                                }

                        }

     
    getUsers();                        


    },[showMore]);

    // Feature to display alerts
    const showAlert = (msg,error,nameComponentShow)=>{

        setAlert({

            msg,
            error,
            nameComponentShow

        });



        setTimeout(()=>{

                          setAlert({});

                       },4000);


    }

    // Function to send user data to server
    const submitUser = async (user)=>{

       try{
       
       /**
             * uses the Axios library to make a POST request to the server, and the request URL is constructed
             * using the environment variable.
             * Finally, it includes a user object that serves as the body of the request and contains the data that you want to insert into the database.
         **/
        const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users`,user);
         
        
         // Show success notification
         toast.success("Usuario agregado correctamente!",
                
                            {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",

                            }
        
                        );

        setViewShowMore(true);


       }catch(err){

      
            showAlert(err.response.data.msg,true,"UserRegistrationForm");

       }
     

    }

    // Function to send login data to the server
    const submitLoginUser = async ({dni})=>{


        try{

            const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${dni}`);

            showAlert(`Hola , ${data[0].nombres} . Gracias por iniciar sesión`,false,"LoginUser");

            setNameUserLogin(data[0].nombres);



        }catch(error){

           

            showAlert(error.response.data.msg,true , "LoginUser");
            setNameUserLogin("");

        }


    }

    // Provides the context and its values ​​to the child components
   
    return(


                <ManagmentContext.Provider

                    value={

                            {
                                    
                                alert,
                                showAlert,
                                submitUser,
                                listUser,
                                setShowMore,
                                setClickShowMore,
                                viewShowMore,
                                submitLoginUser,     
                                nameUserLogin,
                                setNameUserLogin,
                                charging,
                                setCharging


                            }

                          }

                >

                        {

                            children

                        }

                </ManagmentContext.Provider>



          )


}

export{

            ManagmentProvider

      }

export default ManagmentContext;