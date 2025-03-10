const INIT_STATE = {
    carts: []
};


export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1;

            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp],
                }
            }
        case "RVM_CART":
            const data = state.carts.filter((datas) => datas.id !== action.payload)
            return {
                ...state,
                carts: data
            }
        case "RVM_ONE":
            const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
            if (state.carts[ItemIndex_dec].qnty >= 1) {
                const del_item = state.carts[ItemIndex_dec].qnty -= 1;
                console.log(...state.carts, del_item);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if(state.carts[ItemIndex_dec].qnty === 1){
                const data = state.carts.filter((datas) => datas.id !== action.payload)
                return {
                    ...state,
                    carts: data
                }
            }


        default:
            return state

    }
}