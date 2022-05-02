const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case "ADD_ITEMS" :
        const {id,data}=action.payload;
        return{
            ...store,
            list:[
                ...store.list,
                {
                    id:id,
                    data:data,
                },
            ],
        };
    default:
      return store;
  }
};