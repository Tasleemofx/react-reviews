import React from 'react';
const Notification = ({message, className}) => {
    return (
        <p className={className}>{message} reached</p>
      );
}
 
export default Notification;