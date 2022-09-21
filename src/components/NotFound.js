import { Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Mood } from "@mui/icons-material";

const NotFound = () => {
    const variants = {
        hidden: {
            opacity: 0,
            x: "-1000px",
        },
        visible: {
            opacity: 1,
            x: 0,

            transition: {
                delay: 0.5,
                when: "beforeChildren",
            },
        },
    };

    return (
        <NotFoundContainer className="not-found-container">
            <Paper
                elevation={2}
                className="wrapper"
                sx={{ alignItems: "center", justifyContent: "center" }}
            >
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="puls"
                >
                    <Typography sx={{ color: "#777" }}>
                        Sorry, no such a recipe...for now
                    </Typography>
                    <Mood sx={{ color: "#3593e9" }} />
                </motion.div>
            </Paper>
        </NotFoundContainer>
    );
};

const NotFoundContainer = styled(motion.div)`
    flex: 1;
    padding: 2px;

    .puls {
        display: flex;
        gap: 10px;
        padding: 10px 15px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
    }
`;

export default NotFound;
