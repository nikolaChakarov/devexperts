import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
    IconButton,
    Typography,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
} from "@mui/material";
import { LocalDining } from "@mui/icons-material";

import Modal from "./Modal";

const Recipe = (props) => {
    const { imageUrl, timeToPrepare, title, ingredients } = props;

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <RecipeContainer>
            <Card className="r-card" sx={{ height: "100%" }} elevation={2}>
                <Typography
                    className="r-title"
                    gutterBottom
                    variant="h4"
                    component="div"
                    px={2}
                    my={2}
                >
                    {title}
                </Typography>
                <Typography px={2} mb={2}>
                    {timeToPrepare}
                </Typography>
                <CardMedia
                    component="img"
                    alt="recipe_img"
                    height="192"
                    image={imageUrl}
                    sx={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.8)" }}
                />
                <CardContent>
                    {ingredients.map((item, idx) => (
                        <Stack key={idx} direction="row" mb sx={{ gap: "7px" }}>
                            <LocalDining
                                sx={{
                                    fontSize: "14px",
                                    color: "#777",
                                    marginTop: "5px",
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "20px",
                                    color: "rgba(0, 0, 0, 0.6)",
                                }}
                            >
                                {item}
                            </Typography>
                        </Stack>
                    ))}
                </CardContent>

                <CardActions sx={{ marginTop: "auto" }}>
                    <IconButton
                        aria-label="send"
                        color="success"
                        size="small"
                        onClick={toggleModal}
                    >
                        <img
                            src="/assets/images/openModal.png"
                            alt="open_modal"
                        />
                    </IconButton>
                </CardActions>
            </Card>
            {showModal && <Modal {...props} toggleModal={toggleModal} />}
        </RecipeContainer>
    );
};

const RecipeContainer = styled(motion.div)`
    padding: 2px;
    flex: 1;
    max-width: 294px;
    min-width: 20%;
    min-height: 688px;

    .r-card {
        display: flex;
        flex-direction: column;

        .MuiTypography-body1 {
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.6);
        }

        .r-title {
            font-size: 26px;
            font-weight: 500;
            line-height: 36px;
            letter-spacing: -0.5px;
        }
    }

    @media (max-width: 576px) {
        width: 100%;
        max-width: initial;
        min-height: initial;
    }
`;

export default Recipe;
