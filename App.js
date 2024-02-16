import React from 'react';
import './App.css';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault(); 
   
    const formData = new FormData(event.target);

    
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
     
    });
    

    
    console.log('Form data:', data);
   if(data){alert("Data has been submitted ") }else{
    alert("not Submitted")
   }


  }

  return (
    <div className="main-div">
      <form onSubmit={handleSubmit}>
        <div className="sub-div">
          <h1>Data Collection Form</h1>
        </div>

        <div className="sub-div">
          <input placeholder='What is your name' name="name" type='text' required />
        </div>

        <div className="sub-div">
          <input type='email' name="email" placeholder='Enter your Email' required />
        </div>

        <div className="sub-div">
          <input type="tel" name="phone" placeholder="Enter your Number" required />
        </div>

        <div className="sub-div">
          <input placeholder='Address' name="address" required type='text' />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
