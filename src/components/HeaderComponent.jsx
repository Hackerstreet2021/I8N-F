

import { Button } from 'react-bootstrap';
import React from "react";
import axios from 'axios';




const HeaderComponent = (props)=> {
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
                <header>
                    <nav className="navbar navbar-expand-md bg-primary">
                        <div className="container-fluid">
                            
                            <h3>{data.header}</h3>
                            
                            <div className="d-flex">
                            <img src="https://media.istockphoto.com/photos/smiling-child-looking-at-the-big-computer-and-smiling-happily-picture-id949420890?s=612x612" alt="profile pic" height={60} width={60} style={{borderRadius: '50%'}}/>
                                 <Button className="nav-item nav-link " style={{color:"white"}}>{data.loggedInUsername}</Button>
                                 <Button  className="fa fa-sign-out" aria-hidden="true" >{data.logoutButton}</Button>
                                 <h4>{data.df}</h4>
                            </div>

                            </div>                        

                    </nav>

                </header>

            </div>
        );
  
}

export default HeaderComponent;