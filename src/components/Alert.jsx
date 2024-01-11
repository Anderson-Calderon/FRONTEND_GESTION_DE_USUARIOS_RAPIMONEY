
/**
 * Component Alert.
 * 
 * This component displays an alert message with a style determined by the 'error' property on the alert.
 * 
 * @component
 * @param {Object} props - Component Properties.
 * @param {Object} props.alert - Alert object.
 * @param {string} props.alert.msg - Alert message.
 * @param {boolean} props.alert.error - Indicates whether the alert is error type (true) or informative (false).
 * @param {string} props.alert.nameComponentShow - Indicates in which component the alert will be displayed
 * @returns {JSX.Element} Alert component.
 */

const Alert = ({alert})=>{

    return(


                <div className={ `${alert.error ? "bg-red-600" : "bg-amber-500" } text-white py-3 mt-4 text-center font-semibold    `}>

                    {alert.msg}

                </div>


           )

}

export default Alert;