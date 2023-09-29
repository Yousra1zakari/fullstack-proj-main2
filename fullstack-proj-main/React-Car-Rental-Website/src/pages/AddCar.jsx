import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";

const AddCar = () => {
  const [carData, setCarData] = useState({
    model: "",
    year: "",
    type: "",
    capacity: "",
    pricePerDay: "",
    gear: "",
    color: "",
    image: "",
    brand: "",
    rented: false,
  });

  /* async function saveInsert() {
    try {
      const response = await axios.post("http://localhost:8080/Vehicle", carData);
      console.log("Car inserted successfully:", response.data);

      toast.success("Car inserted successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error inserting car:", error);

      toast.error("Error inserting car", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  } */
 
    const saveInsert = () => {
        const token = localStorage.getItem("token");
        axios.post("http://localhost:8080/Vehicle", carData, {
            headers: {
            'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => {
           console.log('rrr')
            
        })
    }
  function handleInputChange(event) {""
    const { name, value, type } = event.target;
    const newValue = type === "checkbox" ? event.target.checked : value;
    setCarData({
      ...carData,
      [name]: newValue,
    });
  }

  return (
    <Helmet title="Add New Car">
      <CommonSection title="Welcome Admin" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Add new car</h2>
          </div>
        </div>
        <div className="row">
          {Object.keys(carData).map((property) => (
            <div className="col-3" key={property}>
              <div className="mb-3">
                <label htmlFor={property} className="form-label">
                  {property.charAt(0).toUpperCase() + property.slice(1)}
                </label>
                {property === "rented" ? (
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name={property}
                    id={property}
                    checked={carData[property]}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input
                    type={typeof carData[property] === "number" ? "number" : "text"}
                    className="form-control"
                    name={property}
                    id={property}
                    value={carData[property]}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            </div>
          ))}
          <div className="row justify-content-end">
            <div className="mb-3 col-auto">
              <button className="btn btn-primary" onClick={saveInsert}>
              <Link to={`/admin`}></Link>Add new car
              </button>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default AddCar;
