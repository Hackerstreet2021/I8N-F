
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProduct() {

    const [data, setData] = React.useState([]);

    const { handleSubmit } = useForm();


    const [id, setId] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [createdAt, setCreatedAt] = useState();
    const [measurement, setMeasurement] = useState();

    const navigate = useNavigate();
    React.useEffect(
        () => {
            const url = "http://localhost:6872/api/v1/msg";
            axios.get(url).then((response) => { setData(response.data) })
                .then(response => console.log(response))
                .catch(err => {
                    console.log(err);
                })
        }, []);

    const Cancel = () => {
        navigate('/');
    }


    const onIdChange = (e) => {

        setId(e.target.value);
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onPriceChange = (e) => {
        setPrice(e.target.value);
    }

    const onDateChange = (e) => {
        setCreatedAt(e.target.value);
    }

    const onMeasurementChange=(e)=>{
        setMeasurement(e.target.value);
    }
    const onSubmit = () => {



        let product = {
            id: id,
            name: name,
            price: price,
            createdAt: createdAt,
            measurement:measurement
        };

        console.log(product);

        axios.post("http://localhost:6872/products", product);
        toast.success('Save successfully', { autoClose: 3000 });

        navigate('/');
    }






    return (
        <div>
            <div className='container mt-5'>
                 <div className='row'>
                   <div className='card col-md-offset-3  col-md-6 '>
                    <h2 className='text-center'>{data.addProduct}</h2>

                        <div className="card-body shadow p-3">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mt-2">
                                    <label>{data.productId}</label>
                                    <input placeholder={data.productId} name="id" className="form-control" onChange={onIdChange} />
                                </div>
                                <div className="form-group mt-2">
                                    <label>{data.productName}</label>
                                    <input type="text" placeholder={data.productName} name="name" onChange={onNameChange} className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label>{data.price}</label>
                                    <input type="text" placeholder={data.price} name="price" onChange={onPriceChange} className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label>{data.measurement}</label>
                                    <input type="text" placeholder={data.measurement} onChange={onMeasurementChange} name="measurement" className="form-control"
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label>{data.dateAdded}</label>
                                    <input type="datetime-local" placeholder={data.dateAdded} onChange={onDateChange} name="dateAdded" className="form-control"
                                    />
                                </div>
                                
                                <div className="form-group mt-2 text-center">
                                    <button type="submit" className="btn btn-success">{data.save}</button>
                                    <button className="btn btn-danger" onClick={Cancel} style={{ marginLeft: "10px" }}>{data.cancel}</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
       </div>

    )
}

