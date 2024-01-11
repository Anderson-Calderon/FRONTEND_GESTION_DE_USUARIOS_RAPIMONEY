import UserRegistrationForm from "../components/UserRegistrationForm";
import UserList from "../components/UserList";
import LoginUser from "../components/LoginUser";

/**
 *Renders the main page with sections to register users, display user list and user login.
 * 
 * @returns {JSX.Element} - JSX element that provides the main page
 */
const Home = ()=>{


    return(


                <>

                    {/* Section to register users */}
                    <section className="container ">

                        <h2 className="text-center uppercase text-4xl font-bold text-bluish-green mt-32">Registrar Usuarios</h2>


                        <div className="w-full md:w-3/4 m-auto">

                             {/* Component for user registration form */}
                            <UserRegistrationForm />

                          

                        </div>


                    </section>

                    {/* Section to display the list of users */}
                    <section className="container">

                          {/* Component for user list */}
                          <UserList />

                    </section>


                    {/* Section for login component */}
                    <section className="container">

                         {/* Component for user login */}
                         <LoginUser />   

                    </section>

                </>


          )


}


export default Home;