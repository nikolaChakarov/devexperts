import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobaleState";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";

const App = () => {
    const { getInitData } = useContext(GlobalContext);

    useEffect(() => {
        getInitData();
    }, []);

    return (
        <AppContainer className="app-container">
            <Header />
            <RecipeList />
            <Footer />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    .wrapper {
        max-width: var(--maxWidth);
        margin: 0 auto;
    }
`;

export default App;
