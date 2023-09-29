
import { Container, Row, Col } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";  
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem1";
import { Link } from "react-router-dom";
 


 
const Admin = () => {
  const [Admin, setFetchedData] = useState([]);
  
  useEffect(() => {
    async function Admin() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/Vehicles", {
          headers: {
            'Authorization': `Bearer ${token}`
          }});
        setFetchedData(response.data); 
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    Admin();
  }, []);



  
  return (
    <Helmet title="Cars">
      <CommonSection title="Welcome Admin" />
      
        

      <section>
        <Container>
            <div className="row justify-content-end">
                <div className="col-auto">
                    <Link className="btn btn-primary" to={`/insert_car`}>Add new car</Link>
                </div>
            </div>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
             

              
              </div>
            </Col>

            {Admin.map((item) => (
              
              <CarItem item={item} key={item.id} />
               
            ))}
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Admin;
