import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 1.2rem;
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #ffffff;
  background-color: ${({ bg }) => bg || "#333"};
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.15);
    background-color: ${({ hover }) => hover || "#555"};
  }
`;

const SocialButtons = () => {
  return (
    <SocialContainer>
      <SocialButton
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        bg="#0a66c2"
        hover="#004182"
        aria-label="LinkedIn del grupo"
      >
        <FaLinkedin />
      </SocialButton>

      <SocialButton
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        bg="#171515"
        hover="#333"
        aria-label="GitHub del grupo"
      >
        <FaGithub />
      </SocialButton>

      <SocialButton
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        bg="#25d366"
        hover="#128c7e"
        aria-label="WhatsApp del grupo"
      >
        <FaWhatsapp />
      </SocialButton>

      <SocialButton
        href="https://www.instagram.com/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        bg="#e4405f"
        hover="#c13584"
        aria-label="Instagram del grupo"
      >
        <FaInstagram />
      </SocialButton>
    </SocialContainer>
  );
};

export default SocialButtons;
