import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";

const IsLoading = () => {
    return (
        <IsLoadingContainer>
            <Paper className="wrapper">
                <CircularProgress sx={{ color: "red" }} thickness={5} />
            </Paper>
        </IsLoadingContainer>
    );
};

const IsLoadingContainer = styled(motion.div)`
    flex: 1;
    padding: 2px;

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default IsLoading;
