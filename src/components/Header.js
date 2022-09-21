import { Paper, Box } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";

import SearchInput from "./MUI/SearchInput";

const Header = () => {
    return (
        <HeaderContainer className="header-container">
            <Paper className="wrapper">
                <Box className="logo-wrapper">
                    <img src="/assets/images/tomato.png" alt="logo" />

                    <Box className="logo-text">
                        <span>CookWell</span>
                        <span>by Devexperts</span>
                    </Box>
                </Box>

                <SearchInput />
            </Paper>
        </HeaderContainer>
    );
};

const HeaderContainer = styled(motion.div)`
    margin-bottom: 36px;

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        gap: 15px;

        .logo-text {
            display: flex;
            flex-direction: column;

            & span:nth-child(1) {
                letter-spacing: 0.6px;
            }

            & span:nth-child(2) {
                letter-spacing: 0.8px;
                font-size: 12px;
                font-style: italic;
                line-height: 16px;
            }
        }
    }

    @media (max-width: 576px) {
        margin-bottom: 18px;

        .wrapper {
            flex-direction: column;
            align-items: initial;
            padding: 15px;
        }

        .logo-wrapper {
            justify-content: space-between;
            margin-bottom: 15px;
        }
    }
`;

export default Header;
