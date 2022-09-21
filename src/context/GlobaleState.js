import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import handleIngredientList from "../utils/handleInredientList";

const init = {
    recipes: [],
    filtered: null,
    ingredients: [],
    error: null,
    isLoading: false,
    getInitData: () => {},
    handleFilterRecipes: (val) => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, init);
    const { recipes, filtered, ingredients, isLoading, error } = state;

    const getInitData = async () => {
        dispatch({
            type: "LOADING",
        });

        const url = "https://api.jsonbin.io/v3/b/62d56dbd5ecb581b56c3e44d";

        try {
            const apiRes = await (await fetch(url)).json();
            const { record } = apiRes;

            dispatch({
                type: "FETCH_INIT_DATA",
                payload: {
                    recipes: record?.recipes || [],
                    ingredients: record?.ingredients || [],
                },
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: "ERROR",
                payload: "Something went wrong!",
            });
        }
    };

    const handleFilterRecipes = (val) => {
        if (!val) {
            dispatch({
                type: "FILTER_RECIPES",
                payload: null,
            });
            return;
        }

        const filtered = state.recipes.filter((el) =>
            handleIngredientList(el.ingredients, val)
        );

        dispatch({
            type: "FILTER_RECIPES",
            payload: filtered,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                recipes,
                filtered,
                ingredients,
                isLoading,
                error,
                dispatch,
                getInitData,
                handleFilterRecipes,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
