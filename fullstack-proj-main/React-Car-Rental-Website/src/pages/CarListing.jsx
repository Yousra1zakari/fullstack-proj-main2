
import { Container, Row, Col } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";  
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
 


 
const CarListing = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Define your API URL and headers
    const apiUrl = 'http://localhost:8080/VehiclesNotRented';
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJVc2VybmFtZVBhc3N3b3JkQXV0aGVudGljYXRpb25Ub2tlbiBbUHJpbmNpcGFsPW9yZy5zcHJpbmdmcmFtZXdvcmsuc2VjdXJpdHkuY29yZS51c2VyZGV0YWlscy5Vc2VyIFtVc2VybmFtZT16YWszLCBQYXNzd29yZD1bUFJPVEVDVEVEXSwgRW5hYmxlZD10cnVlLCBBY2NvdW50Tm9uRXhwaXJlZD10cnVlLCBjcmVkZW50aWFsc05vbkV4cGlyZWQ9dHJ1ZSwgQWNjb3VudE5vbkxvY2tlZD10cnVlLCBHcmFudGVkIEF1dGhvcml0aWVzPVtST0xFX0FETUlOXV0sIENyZWRlbnRpYWxzPVtQUk9URUNURURdLCBBdXRoZW50aWNhdGVkPXRydWUsIERldGFpbHM9bnVsbCwgR3JhbnRlZCBBdXRob3JpdGllcz1bUk9MRV9BRE1JTl1dIiwiZXhwIjoxNjk2MDMxNDk2LCJpYXQiOjE2OTU5NDUwOTZ9._zfbj5Ti81VAW8koLXOA1XTxOJXG84wxtBTM2ipuiHxnE1w-JtC5sBiO3fdAQvyDmTnfX75uvsQOGtLfc3Ad5Q',
      //Cookie: 'JSESSIONID=37492F2E5C922B5B548171F34A09C199',
      Connection:'keep-alive'
    };

    // Make the GET request using Axios
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {data.map((item) => (
              
              <CarItem item={item} key={item.id} />
               
            ))}
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
