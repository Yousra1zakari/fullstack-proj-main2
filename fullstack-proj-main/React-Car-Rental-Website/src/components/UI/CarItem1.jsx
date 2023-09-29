import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

import axios from "axios"; // Make sure to import axios

const CarItem1 = (props) => {
  const { model, year, pricePerDay, gear, image, id, type } = props.item;

  // Define the deleteCar function here
  const deleteCar = async () => {
    try {
      // Send a DELETE request to delete the car based on its id
      await axios.delete(`http://localhost:8080/Vehicle/${id}`);
      
      // Handle success
      console.log('Car deleted successfully');
      
      // Optionally, navigate to a different page after deletion
      // You can use the Link component to navigate to another page
      // You might need to define the route and path in your application
      // For example:
      // <Link to="/some-other-page">Go to Some Other Page</Link>
    } catch (error) {
      // Handle error
      console.error('Error deleting car:', error);
    }
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={image} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{model}</h4>
          <h6 className="rent__price text-center mt-">
            {pricePerDay}.00 Mad <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {type}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {gear}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {year}
            </span>
          </div>

          <button
            className="w-50 car__item-btn car__btn-delete"
            type="button"
            onClick={deleteCar}
          >
            Delete
          </button>
          <button className="w-50 car__item-btn car__btn-update">
            <Link to={`/cars/edit/${id}`}>Update</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem1;