/**
 * We rely on TypeScript path aliasing in order to decorate our `emotion-theming` imports
 * with built-in type information, so for this one import we need to use relative imports
 *
 * @see: https://emotion.sh/docs/typescript#define-a-theme
 */
import {
  useTheme as useEmotionTheme,
  ThemeProvider,
} from '../../../node_modules/emotion-theming';
import type { ThemeType } from '../../constants/themes/types';

export const useTheme = () => useEmotionTheme<ThemeType>();

export { ThemeProvider };
