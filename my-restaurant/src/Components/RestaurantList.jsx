import React from "react";
import data from "../data.json";
import { RestaurantCard } from "./RestaurantCard";

export default class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRating: 0,
      paymentMethod: "all",
      sortMethod: null,
      activePage: 1,
      perPage: 4
    };
  }
  handleRating = (rating) => {
    this.setState({
      filterRating: rating
    });
  };
  handlePayment = (payment) => {
    this.setState({
      paymentMethod: payment
    });
  };
  handleSort = (order) => {
    this.setState({
      sortMethod: order
    });
  };
  handlePageChange = (page) => {
    this.setState({
      activePage: page
    });
  };

  filterLogic = ({ rating, payment_methods }, index) => {
    const { paymentMethod, filterRating, activePage, perPage } = this.state;

    const { cash, card } = payment_methods;
    let paymentCondition = true;
    if (paymentMethod === "cash") {
      paymentCondition = cash ? true : false;
    } else if (paymentMethod === "card") {
      paymentCondition = card ? true : false;
    }

    // pagination
    const offset = (activePage - 1) * perPage;
    const pageCondition = index >= offset && index < offset + perPage;

    return rating >= filterRating && paymentCondition && pageCondition;
  };

  render() {
    const { sortMethod, activePage, perPage } = this.state;
    const totalPages = Math.ceil(data.length / perPage);
    return (
      <>
        <h1 style={{color:"black"}}> Khushi's Restaurant </h1>
        {/* {new Array(totalPages).fill(0).map((a, i) => (
          <button key={i} onClick={() => this.handlePageChange(i + 1)} style={{backgroundColor:'yellow',marginLeft:"20px"}}>
            {i + 1}
          </button>
        ))} */}
        <div>
          {[4,3, 2, 1, 0].map((rating) => (
            <button key={rating} onClick={() => this.handleRating(rating)} style={{backgroundColor:'lightgray',marginLeft:"20px",border:"none"}}>
              {rating === 0 ? "All" : rating }⋆
            </button>
          ))}
        </div>
        {}
        <div>
          {["Low-High", "High-Low"].map((order) => (
            <button key={order} onClick={() => this.handleSort(order)} style={{backgroundColor:'lightwheat',marginLeft:"20px",borderRadius:"10px",border:"none",marginTop:"5px",fontSize:"20px"}}>
              {order}
            </button>
          ))}
        </div>
        <div>
          {data &&
            data
              ?.filter(this.filterLogic)
              .sort((a, b) => {
                if (sortMethod === null) {
                  return 0;
                }
                if (sortMethod === "Low-High") {
                  return a.costForTwo - b.costForTwo;
                }
                if (sortMethod === "High-Low") {
                  return b.costForTwo - a.costForTwo;
                }
              })
              .map((item) => <RestaurantCard data={item} key={item.id} />)}
        </div>
        {new Array(totalPages).fill(0).map((a, i) => (
          <button key={i} onClick={() => this.handlePageChange(i + 1)} style={{backgroundColor:'white'}}>
            {i + 1}
          </button>
        ))}
      </>
    );
  }
}





