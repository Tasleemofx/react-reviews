import React from "react";

const Button=({ icon, className, onClick})=>{
    return(


        <button className={className} onClick={onClick}>
            {icon}
        </button>
    )

}
export default Button;