export const ADD = (items) =>{
    return{
        type: "ADD_CART",
        payload: items

    }
}

export const DEL = (id) =>{
    return{
        type: "RVM_CART",
        payload: id

    }
}

export const REMOVE = (item) =>{
    return{
        type: "RVM_ONE",
        payload: item

    }
}