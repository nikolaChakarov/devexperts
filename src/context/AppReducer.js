const AppReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_INIT_DATA":
            return {
                ...state,
                isLoading: false,
                error: null,
                recipes: action.payload.recipes,
                ingredients: action.payload.ingredients,
            };
        case "FILTER_RECIPES":
            return {
                ...state,
                filtered: action.payload,
            };
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "END_LOADING":
            return {
                ...state,
                isLoading: false,
            };
        case "ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default AppReducer;
