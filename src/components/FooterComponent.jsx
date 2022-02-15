import React, { Component } from 'react';
import axios from 'axios';

const FooterComponent=(props)=> {  
    const [data, setData] = React.useState([]);
 
    
    React.useEffect(
        () => {
        const url = "http://localhost:6872/api/v1/msg";
        axios.get(url).then((response) => {setData(response.data)})
        .then(response=>console.log(response)) 
        .catch(err=>
            {
                console.log(err);
            })    
           
      },[]);
   
        return (
            <div>
                <footer className="">

                <nav className="navbar navbar-expand-md bg-primary">
                        <div className="container-fluid">
                        <span>{data.footer}</span>

                           
                       </div>                        

                    </nav>


                </footer>
            </div>
        );
}
export default FooterComponent;