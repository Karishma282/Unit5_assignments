


import React from "react";

const ImageRest = ({ src, name, width }) => {
  return <img width={width} src={src} alt={name} />;
};

export const RestaurantCard = ({ data }) => {
  const {
    name,
    id,
    
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods: { cash, card },
    rating,
    votes,
    reviews,
    src
  } = data;
  return (
    <div style={{ border: "5px solid black",width:"700px",margin:"auto" }}>
      <div style={{display:"flex", flexDirection: "columns", padding: 15 }}>
        <div style={{ flex: 1, alignSelf: "center" }}>
          <ImageRest src={src} alt={name} width={"160px"}  />
        </div>
        <div style={{ textAlign: "left", flex: 2 }}>
          <h3> {name} </h3>
          {/* <p> {cuisine.join(", ")}</p> */}
          <p> Cost: ₹{costForTwo} </p>
          <p>
            Min: ₹{minOrder} - Upto {deliveryTime} min
          </p>
          <p>
            Accepts: {cash && card ? "Cash and Card" : card ? "Card" : "Cash"}
          </p>
        </div>
      
        <div style={{ textAlign: "right", flex: 0.8, paddingTop: 20 }}>
        
        <button style={{width:"80px",height:"30px",fontSize:"13px",marginLeft:"50px",backgroundColor:"#363636",border:"none",color:"white"}}>Add</button>
      
          <div style={{width:"40px",backgroundColor:"green",color:'white',textAlign:"center",marginLeft:"80px",marginTop:"7px"}}> ⋆{rating} </div>
          <div> {votes} votes </div>
          <div> {reviews} reviews </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "right",
          padding: 15,
          // borderTop: "1px solid black"
        }}
      >
       
      </div>
    </div>
  );
};
