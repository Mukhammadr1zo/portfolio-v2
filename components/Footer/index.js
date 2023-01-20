/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* -------------------------- Image Dependecy -------------------------- */

import {
  IconRight,
  Facebook,
  Linkedin,
  Github,
  Instagram,
} from '../Icons';

/* ---------------------------- Style Dependency ---------------------------- */
import { SocialMedia } from '../Layout/style';

/* -------------------------- FooterLink PropTypes -------------------------- */
const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  goto: PropTypes.string.isRequired,
};

/* ------------------------- FooterLink defaultProps ------------------------ */

const defaultProps = {
  children: {},
};

const FooterLink = ({ children, goto, ...rest }) => {
  return (
    <>
      <FooterStyle>
        <Link href={`${goto}`}>
          <a aria-label={children}>
            <p {...rest}>
              {children}
              <IconRight />
            </p>
          </a>
        </Link>
      </FooterStyle>
      <SocialMedia>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/"
          aria-label="Go To Muhammadrizo's Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/muhammadrizo-baxtiyorov/"
          aria-label="Go To Muhammadrizo's Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Mukhammadr1zo"
          aria-label="Go To Muhammadrizo's Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/muhammadrizo_bakhtiyoroff"
          aria-label="Go To Muhammadrizo's Instagram Page"
          title="Instagram Page"
        >
          <Instagram />
        </a>
      </SocialMedia>
    </>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;
    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;

FooterLink.defaultProps = defaultProps;

FooterLink.propTypes = propTypes;

export default FooterLink;
