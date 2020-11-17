import HomeSelectedNavIconPrimary from './svgs/home-selected-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const HomeSelectedNavIcon = (props: IconProps) =>
  useIcon(HomeSelectedNavIconPrimary, HomeSelectedNavIconPrimary, props);
