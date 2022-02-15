import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddProduct from './components/AddProduct';
import { BrowserRouter as Router, Link, Route,Switch, Routes } from 'react-router-dom';

import React from "react";
import axios from 'axios';

function Home() {
    const [data, setData] = React.useState([]);
    const [tableData, setTableData] = React.useState([]);


    React.useEffect(
        () => {
            const url = "http://localhost:6872/api/v1/msg";
            axios.get(url).then((response) => { setData(response.data) })
                .then(response => console.log(response))
                .catch(err => {
                    console.log(err);
                })

            axios.get("http://localhost:6872/products").then((res) => { setTableData(res.data) })
                .then(res => console.log(res))
                .catch(err => {
                    console.log(err);
                })



        }, []);


        const deleteProduct=(id)=>{
            //axios.delete("http://localhost:6872/products/" + id);
           // setTableData(tableData.filter(td=>td.id!==id));
        }

    return (
        <div className="App">

            <HeaderComponent />
            <div className='container text-center'>
                <h1 className="text-center">{data.addProduct}</h1>
                <div>
                    <Link to="/addProduct">
                    <button className="btn btn-primary text-left" >{data.addProduct}</button>
                    </Link>                
                    <br /><br />
                </div>         


                <div className="row mt-1">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td><b>{data.productId}</b></td>
                                <td><b>{data.productName}</b></td>
                                <td><b>{data.price}</b></td>
                                <td><b>{data.dateAdded}</b></td>
                                <td><b>{data.measurement}</b></td>
                                <td><b>{data.images}</b></td>
                                <td><b>{data.actions}</b></td>                               
                            </tr>
                        </thead>

                        <tbody>
                        {
                            tableData.map(
                                td =>
                                            <tr key={td.id}>
                                                <td><b>{td.id}</b></td>
                                                <td><b>{td.name}</b></td>
                                                <td><b>{td.price}</b></td>
                                                <td><b>{td.createAt}</b></td>
                                                <td><b>{td.measurement}</b></td>

                                                <td><img  src="https://blog.inkjetwholesale.com.au/wp-content/uploads/2015/10/Printer-Paper-2.jpg" alt="question pic" height={60} width={60} style={{borderRadius: '50%'}}/></td>
                                                {/* <td>{question.ans_option}</td> */}
                                                
                                                <td>                                                     

                                                    <button  className="btn btn-info">{data.update}</button>
                                                    <button style={{marginLeft: "1px" }}  className="btn btn-success">{data.view}</button>
                                                    <button style={{marginLeft: "1px" }} onClick={deleteProduct(td.id)} className="btn btn-danger">{data.delete}</button>

                                                

                                                </td>

                                            </tr>

                                    )
                                }

                        </tbody>
                    </table>
                </div>
            </div>

            <FooterComponent />    
        


          {/* <Route path="/addProduct" component={AddProduct} ></Route> */}
          


        </div>
    );
}

export default Home;
