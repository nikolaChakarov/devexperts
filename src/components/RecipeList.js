import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobaleState";
import styled from "styled-components";
import { motion } from "framer-motion";

import Recipe from "./Recipe";
import NotFound from "./NotFound";
import IsLoading from "./IsLoading";

const RecipeList = () => {
    const { isLoading, recipes, filtered } = useContext(GlobalContext);

    const [recipesToRender, setRecipesToRender] = useState([]);

    const variants = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
            },
        },
    };

    useEffect(() => {
        filtered ? setRecipesToRender(filtered) : setRecipesToRender(recipes);
    }, [recipes, filtered]);

    return (
        <RecipeListContainer>
            <motion.div
                className="wrapper"
                variants={variants}
                initial="hidden"
                animate="visible"
            >
                {recipesToRender.map((recipe, idx) => (
                    <Recipe key={idx} {...recipe} />
                ))}
                {isLoading ? (
                    <IsLoading />
                ) : filtered &&
                  filtered.length === 0 &&
                  recipes.length !== 0 ? (
                    <NotFound />
                ) : null}
            </motion.div>
        </RecipeListContainer>
    );
};

const RecipeListContainer = styled(motion.div)`
    flex: 1;
    overflow-y: scroll;

    .wrapper {
        padding-bottom: 36px;
        height: 100%;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        overflow-y: scroll;
        margin: 0 auto;
    }

    @media (max-width: 576px) {
        .wrapper {
            flex-wrap: nowrap;
            flex-direction: column;
        }
    }
`;

export default RecipeList;
