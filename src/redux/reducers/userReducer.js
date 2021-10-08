const initialState = {
    name: ""
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case("ADD_USER"):
            return {...state, name: action.payload}
        default:
            return state
    }
}

