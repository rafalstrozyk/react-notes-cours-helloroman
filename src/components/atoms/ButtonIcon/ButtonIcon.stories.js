// ButtonIcon story
import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import bulbIcon from 'assets/icons/bulb.svg';
import linkIcon from 'assets/icons/link.svg';
import logoIcon from 'assets/icons/logo.svg';
import logoutIcon from 'assets/icons/logout.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [
    withKnobs,
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const Bulp = () => <ButtonIcon icon={bulbIcon} />;
export const Link = () => <ButtonIcon icon={linkIcon} />;
export const Active = () => <ButtonIcon active icon={linkIcon} />;
export const Logo = () => <ButtonIcon icon={logoIcon} />;
export const Logout = () => <ButtonIcon icon={logoutIcon} />;
export const Magnitier = () => <ButtonIcon icon={magnifierIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
