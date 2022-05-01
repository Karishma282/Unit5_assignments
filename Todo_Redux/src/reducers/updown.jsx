const intialState=0;

 const changeTheNumber=(state=intialState,action)=>{
     switch (action.type){
         case "INCREMENT":return state+action.payload;
         case "DECREMENT": return state-1;
         default:return state;
     }
 }
 export default changeTheNumber