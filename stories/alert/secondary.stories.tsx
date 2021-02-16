import { Meta } from '@storybook/react';

export * from './index.stories';

export default {
  title: 'Components/Alert/Secondary',
  parameters: {
    theme: 'secondary',
  },
  excludeStories: /.*/,
} as Meta;
