import { Meta } from '@storybook/react';
import { BREAKPOINTS } from 'src/constants';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

export * from './index.stories';

export default {
  title: 'Components/Callout/Secondary',
  parameters: {
    chromatic: { viewports: [BREAKPOINTS.xs] },
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
