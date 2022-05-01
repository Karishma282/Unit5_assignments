const intialData={
    list:[],
};

export const TodoReducers=(state=intialData,action)=>{
    switch(action.type){
        case "ADD_TODO" :
            const {id,data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data,
                    },
                ],
            };
            case "DELETE_TODO":
            const newList = state.list.filter((el) => el.id !== action.id);
            return {
              ...state,
              list: newList,
            };

            default:
                return state
        }
};