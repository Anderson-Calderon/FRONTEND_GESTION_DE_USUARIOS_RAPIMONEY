import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { ManagmentProvider } from './context/ManagementProvider';

import ProtectedRoute from './layouts/ProtectedRoute';


/*Pages*/
import Home from './pages/Home';

function App() {


  return (
    <>

      {/* Router Configuration with BrowserRouter */}
      <BrowserRouter>
        {/* This component wraps the hierarchy of components where you want to share the context */}
        <ManagmentProvider>
           {/* Route definition */}
          <Routes>
              {/* Protected path: Authentication is not currently required, although it should be. */}
            <Route path="/" element={<ProtectedRoute/>}>

              {/* Home path, shows the Home component */}
              <Route index element={< Home  />} />

            </Route>

          </Routes>

          
        </ManagmentProvider>

      
      </BrowserRouter>

    

    </>
  )
}

export default App
