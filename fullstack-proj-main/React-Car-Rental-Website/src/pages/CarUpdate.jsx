import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import {toast } from 'react-toastify';
import { Link } from "react-router-dom";

const CarUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [singleCarItem, setSingleCarItem] = useState([]);
  const [singleUser, setSingleUser] = useState({}); 
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [gear, setGear] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");

  const isLoggedIn = !!localStorage.token;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/Vehicle/${id}`);
        setSingleCarItem(response.data);
        setModel(response.data.model)
        setYear(response.data.year)
        setCapacity(response.data.capacity)
        setType(response.data.type)
        setGear(response.data.gear)
        setColor(response.data.color)
        setPricePerDay(response.data.pricePerDay)
        setBrand(response.data.brand)
        
      } catch (err) {
        console.error("Error fetching car data:", err);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/user/username/${localStorage.username}`);
        setSingleUser(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    }
    fetchData();
  }, []);

  async function saveUpdate() {
    const updatedCar = {
      model,
      year,
      type,
      capacity,
      pricePerDay,
      gear,
      color,
      brand
      
    };

    try {
      const response = await axios.put(`http://localhost:8080/Vehicle/${id}`, updatedCar);
      console.log('Car updated successfully:', response.data);
     
    } catch (error) {
      console.error('Error updating car:', error);
     
    }
  }

  function rent() {
    if (selectedDateRange[0] == null || selectedDateRange[1] == null) {
      toast.error('Pick the Dates', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {

    }
  }

  return (
    <Helmet title={singleCarItem.model}> 
        
        <section>
            <Container>
            <Row>
                <Col lg="6">
                <img src={singleCarItem.image} alt="" className="w-100" />
                </Col>

                <Col lg="6">
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">  
                                <label for="modelInput" id="model" className="form-label">modele</label>
                                <input type="text" className="form-control" name="modele" defaultValue={singleCarItem.model}
                                value={model}
                        onChange={(e) => setModel(e.target.value)} id="modelInput"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="yearInput"  id="year" className="form-label">Year</label>
                                <input type="text" className="form-control" name="year" 
                                 defaultValue={singleCarItem.year}
                                 value={year}
                                onChange={(e) => setYear(e.target.value)}
                                 id="yearInput"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="typeInput"  id="type" className="form-label">Type</label>
                                <input type="text" className="form-control" name="type" 
                              defaultValue={singleCarItem.type} id="typeInput"
                              value={type}
                                onChange={(e) => setType(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="capacityInput"  id="cap" className="form-label">Capacity</label>
                                <input type="text" className="form-control" name="capacity"
                              defaultValue={singleCarItem.capacity}
                              value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                 id="capacityInput"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="pricePerDayInput"  id="prix" className="form-label">Price / Day</label>
                                <input type="text" className="form-control" name="pricePerDay" 
                          defaultValue={singleCarItem.pricePerDay} value={pricePerDay}
                                onChange={(e) => setPricePerDay(e.target.value)}
                                 id="pricePerDayInput"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="gearInput"  id="gear" className="form-label">Gear</label>
                                <input type="text" className="form-control" name="gear"
                                defaultValue={singleCarItem.gear}
                                value={gear} 
                                onChange={(e) => setGear(e.target.value)}
                                id="gearInput"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="colorInput"  id="color" className="form-label">Color</label>
                                <input type="text" className="form-control" name="color"
                                value = {color} 
                                onChange={(e) => setColor(e.target.value)}
                                defaultValue={singleCarItem.color} id="colorInput"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="brandInput" className="form-label">Brand</label>
                                
                                <input type="text" className="form-control" name="brand"
                                 value = {brand} 
                                 onChange={(e) => setBrand(e.target.value)}
                                defaultValue={singleCarItem.brand}
                                  id="brandInput"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <button  onClick={saveUpdate} className="btn btn-primary"><Link to={`/admin`}></Link>Save</button>
                        </div>
                    </div>
                </Col> 
            </Row>
            </Container>
            </section>
        </Helmet>
    );

};

export default CarUpdate;