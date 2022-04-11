import { useState } from "react";

function App() {
  const [count,setCount]=useState({
    Score:76,
    Wicket:2,
    ball:50,
  })
  const handlechange=(value,item)=>{
   if(count.Score>100 && count.Wicket >=12){
return
   }
    
    count[value]=count[value]+item;
    setCount({
      Score:count.Score,
      Wicket:count.Wicket,
      Over:count.Over,
    })
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{count.Score}
          <h1 className="scoreCount">
            {
              
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{count.Wicket}
          <h1 className="wicketCount">
            {
            
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{}
          <h1 className="overCount">
            {

              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>handlechange("Score",1)}>Add 1</button>
        <button className="addScore4" onClick={()=>handlechange("Score",4)}>Add 4</button>
        <button className="addScore6" onClick={()=>handlechange("Score",6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button  onClick={()=>handlechange("Wicket",1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handlechange("ball",1)}>Add 1</button>
      </div>
      
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className="status">
     {count.Score > 100 ? "india won":""}
      </h1>
    </div>
  );
}

export default App;