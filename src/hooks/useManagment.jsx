import { useContext } from "react";
import ManagmentContext from "../context/ManagementProvider";


/**
 * Hook that provides access to the management context.
 * @returns {Object} - Object that contains the context values.
 */

const useManagment = ()=>{

    return useContext(ManagmentContext)

}

export default useManagment;