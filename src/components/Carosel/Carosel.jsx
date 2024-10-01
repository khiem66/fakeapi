import React, { Fragment } from "react";
import ak_1 from "../../assets/hinh1.jpg"
import ak_2 from "../../assets/hinh2.jpg"
import ak_3 from "../../assets/hinh3.jpg"



const Carosel = () => {
  return (
    <Fragment>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ak_1} className="d-block w-100" height={500}/>
          </div>
          <div className="carousel-item">
            <img src={ak_2} className="d-block w-100" height={500}/>
          </div>
          <div className="carousel-item">
            <img src={ak_3} className="d-block w-100" height={500} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Fragment>
  );
};

export default Carosel;
