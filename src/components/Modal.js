import React from "react";
import styled from "styled-components";
import { Close } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Modal = (props) => {
    const { preparationMethod, toggleModal } = props;

    const handleModalClick = (e) => {
        const currentEl = e.target.dataset.name;
        currentEl === "close-modal" && toggleModal();
    };

    const variants = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
            },
        },
    };

    return (
        <ModalContainer data-name="close-modal" onClick={handleModalClick}>
            <motion.div variants={variants} initial="hidden" animate="visible">
                <Stack className="inner-modal" sx={{ gap: "20px" }}>
                    <Box
                        data-name="close-modal"
                        className="icon"
                        onClick={handleModalClick}
                    >
                        <Close sx={{ pointerEvents: "none" }} />
                    </Box>

                    {preparationMethod.map((el, idx) => (
                        <Stack key={idx} direction="row" spacing={2}>
                            <Box>
                                <Typography className="count">
                                    {el.step}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    lineHeight: "20px",
                                    color: "color: rgba(0, 0, 0, 0.87)",
                                }}
                            >
                                {el.text}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </motion.div>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1000;

    .inner-modal {
        width: 611px;
        background: #fff;
        position: relative;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        padding: 24px;

        &:hover {
            cursor: initial;
        }
    }

    .icon {
        position: absolute;
        right: 3px;
        top: 3px;
        color: #777;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .count {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3593e9;
    }

    @media (max-width: 576px) {
        padding: 0 10px;

        .inner-modal {
            width: 100%;
        }
    }
`;

export default Modal;
