export const reducer = (state, action) => {

    if (action.type === 'remove_data') {
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.random !== action.payload;
            }),
        };
    } 

    if (action.type === 'get_total'){
        let { totalitem } = state.item.reduce(( accum , curVal ) => {
            // console.log(curVal.quantity);
            let { quantity } = curVal;
            accum.totalitem += quantity;
            return accum;        
        },{
            totalitem: 0,
        });
        return { ...state , totalitem}
    }

    return state;
}