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
    let { totalitem,totalamount } = state.item.reduce(( accum , curVal ) => {
        let { quantity , price } = curVal;
        accum.totalitem += quantity;
        let updateamount = quantity * price;
        accum.totalamount+=updateamount
        return accum;
        
    },{
        totalitem: 0,
        totalamount: 0
    });
    console.log(totalitem);
    return { ...state , totalitem , totalamount}
}

    return state;
}