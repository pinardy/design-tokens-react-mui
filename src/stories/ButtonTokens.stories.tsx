// src/stories/ButtonTokens.stories.tsx
import type { Meta, StoryFn } from '@storybook/react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { createAppTheme } from '../theme/themeOptions';

// Extra props we want in Storybook controls
type ButtonStoryProps = React.ComponentProps<typeof Button> & {
  themeMode?: 'light' | 'dark';
  p?: number;
  borderRadius?: number;
  textTransform?: 'none' | 'lowercase' | 'uppercase' | 'capitalize';
};

const meta: Meta<ButtonStoryProps> = {
  title: 'Design Tokens/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },

    // layout controls
    p: { control: 'number' },
    borderRadius: { control: 'number' },
    textTransform: {
      control: 'radio',
      options: ['none', 'lowercase', 'uppercase', 'capitalize'],
    },

    // theme switcher
    themeMode: {
      name: 'Theme Mode',
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;

const Template: StoryFn<ButtonStoryProps> = ({
  themeMode = 'light',
  p,
  borderRadius,
  textTransform,
  sx,
  ...buttonProps
}) => {
  const theme = createAppTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <Button
        {...buttonProps}
        sx={{
          ...(sx || {}),
          p,
          borderRadius,
          textTransform,
        }}
      />
    </ThemeProvider>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  children: 'Name',
  variant: 'contained',
  color: 'primary',
  disabled: false,

  p: 1,
  borderRadius: 3,
  textTransform: 'none',
  themeMode: 'light',
};
