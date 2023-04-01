import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .contact-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">Interessado em trabalhar comigo?</h2>

      <h2 className="title">Vamos conversar!</h2>

      <p>
        Minha caixa de entrada está sempre aberta e farei o possível para responder quanto antes. Se
        você tiver alguma pergunta, sugestão ou proposta de trabalho, não hesite em entrar em
        contato mesmo se for só para bater um papo! Aguardo ansiosamente a sua mensagem!
      </p>

      <a className="contact-link" href="https://wa.me/message/RP2XB32ZHOVDI1">
        Diga um olá!
      </a>
    </StyledContactSection>
  );
};

export default Contact;
