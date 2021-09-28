import React, {useState} from 'react';

const App = () => {
  const [fullName, setFullName] = useState({
     fname: "",
     lname: "",
     email: "",
     phone: "",
     qua: "",
  });

  const inputEvent = (event) => {
   console.log(event.target.value);
   console.log(event.target.name);

   // const value = event.target.value;
   // const name = event.target.name;

   const {value,name} = event.target;

   setFullName ((preValue) => {
      console.log(preValue);

      return {
         ...preValue,
         [name]: value,
      };
   // if(name === 'fName') {
   //    return{
   //       fname: value,
   //       lname: preValue.lname,
   //       email: preValue.email,
   //       phone: preValue.phone
   //    };
   // }else if (name === "lName") {
   //    return{
   //       fname: preValue.fname,
   //       lname: value,
   //       email: preValue.email,
   //       phone: preValue.phone
   //    };
   // }else if (name === "email") {
   //    return {
   //       fname: preValue.fname,
   //       lname: preValue.lname,
   //       email: value,
   //       phone: preValue.phone
   //    };
   // }else if (name === "phone") {
   //    return {
   //       fname: preValue.fname,
   //       lname: preValue.lname,
   //       email: preValue.email,
   //       phone: value
   //    };
   // }
  
   });
}
  
  const onSubmit = (event) => {
   event.preventDefault();
   alert("form submitted")
   }
   
   return (
   <><form onSubmit={onSubmit}>
     <div>
        <h1> Hello {fullName.fname} {fullName.lname} </h1>
        <p> {fullName.email} </p>
        <p> {fullName.phone} </p>
        <p> {fullName.qua} </p>
        <input type = "text" placeholder="Enter Your Name" 
        name='fname'
        onChange={inputEvent}
        value={fullName.fname} 
        />
        <br />
        <input type = "text" placeholder="Enter Your Last Name" 
        name='lname'
        onChange={inputEvent}
        value={fullName.lname}
         />
        <br/>

        <input type = "email" placeholder="Enter Your Email" 
        name='email'
        onChange={inputEvent}
        value={fullName.email}
        autoComplete='off'
         />
        <br/>
        <input type = "number" placeholder="Enter Your Phone Number" 
        name='phone'
        onChange={inputEvent}
        value={fullName.phone}
        autoComplete='off'
         />
        <br/>
        <input type = "text" placeholder="Enter Your Phone Qualification" 
        name='qua'
        onChange={inputEvent}
        value={fullName.qua}
        autoComplete='off'
         />
        <br/>
        <button type='submit'> Click Me </button>
     </div>
     </form>
   </>
   );
};

export default App;