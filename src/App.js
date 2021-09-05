import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Button from "./components/Button"
import Notification from './components/Notification';

import data from './data';
import Person from "./components/Person"
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0)
  const [message, setMessage] = useState()
  const [messageClass, setMessageClass] = useState("max-notif")
  
  
  
  const handleNext=()=>{
    
    if(index< data.length-1){
      setIndex(index+1)
    }
    else{
      setMessage("last review")
      setMessageClass("max-notif")
      setTimeout(()=>setMessage(null), 6000);

    }
  }
  const handlePrev= () => {
    if (index > 0) {
      setIndex(index - 1)
    }else{
      setMessage("first review")
      setMessageClass("min-notif")
      setTimeout(() => setMessage(null), 6000);
    }
  }
  return  <section className="section">
      {message
      ?<Notification className={messageClass} message={message}/>        
      : <p></p>
    }
            <div className="title">
              <h2>
                Reviews
              </h2>
            </div>
            <div className="section-center">
              <Person people={people[index]}/>
              <Button 
              className="prev"
              icon={<FiChevronLeft/>} 
              onClick = {handlePrev} 
               />
              <Button 
              className="next"
              icon={<FiChevronRight/>}
              onClick={handleNext} 
               />
            </div>
          </section>;
}

export default App;
