export const reducer = (state, action) => {
    
    if (action.type === 'clear-cart') {
        localStorage.setItem('updatedata' , []);
        return {
            ...state,
            item: [],    
        };
    
    }

    if (action.type === 'remove_Item') {
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.random !== action.payload;
            }),
        };
    }

    if (action.type === 'increment') {

        let updatecart = state.item.map((curElem) => {
            if (curElem.random === action.payload) {
                return { ...curElem, quantity: curElem.quantity + 1 }
            }
            return curElem;
        })
        return { ...state , item: updatecart };
    }


if (action.type === 'decrement') {

    let updatecart = state.item.map((curElem) => {
        if (curElem.random === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 }
        } 
           
        return curElem;
    }).filter((curElem) => curElem.quantity !== 0)
    return { ...state , item: updatecart };
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
    return { ...state , totalitem , totalamount}
}

    return state;
}