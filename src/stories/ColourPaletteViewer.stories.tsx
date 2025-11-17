// src/stories/ColourPaletteViewer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ColourPaletteViewer from '../ColourPaletteViewer';

const meta: Meta<typeof ColourPaletteViewer> = {
  title: 'Design Tokens/Button',
  component: ColourPaletteViewer,
};

export default meta;

type Story = StoryObj<typeof ColourPaletteViewer>;

export const Colours: Story = {};
