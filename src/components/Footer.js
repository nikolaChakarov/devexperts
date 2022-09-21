import styled from "styled-components";
import { motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";

const Footer = () => {
    return (
        <FooterContainer className="footer-container">
            <Stack sx={{ alignItems: "center" }}>
                <Typography className="f-text">
                    Please don't try this recipes at home. We hope that they
                    will inspire you to cook more, but consider that their main
                    idea is you coding task for Devexperts.
                </Typography>
                <Typography className="f-text">
                    Copyright &copy; 2022. All right reserved
                </Typography>
            </Stack>
        </FooterContainer>
    );
};

const FooterContainer = styled(motion.div)`
    margin-top: auto;
    border-top: 1px groove #fff;
    padding: 16px;

    .f-text {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
    }
`;

export default Footer;
