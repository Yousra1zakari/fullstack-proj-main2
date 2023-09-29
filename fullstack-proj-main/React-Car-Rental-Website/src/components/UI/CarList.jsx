import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import CarItem1 from "./CarItem1"; // Import the CarItem1 component

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch the list of cars when the component mounts
    async function fetchCars() {
      try {
        const response = await axios.get("http://localhost:8080/cars"); // Adjust the API URL
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <Row>
        {cars.map((car) => (
          <CarItem1 key={car.id} item={car} />
        ))}
      </Row>
    </Container>
  );
};

export default CarList;