import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [StoryRouter()],
};

export const Normal = () => <Sidebar />;
