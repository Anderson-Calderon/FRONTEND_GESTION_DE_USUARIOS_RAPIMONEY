
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";


/**
 *This component acts as a main container for the pages within your application and
 *provides a common structure for the layout.
 * 
 * @returns {JSX.Element} - JSX element that provides a common structure for the layout.
 */


const ProtectedRoute = ()=>{


    return(


                <>
                    {/* Page Header */}
                    <Header />

                    <main className="my-8">

                        {/* Outlet is used to render nested routes defined in parent routes */}
                        <Outlet/>

                    </main>

                    {/* Footer */}
                    <Footer />

                </>


          )


}

export default ProtectedRoute;