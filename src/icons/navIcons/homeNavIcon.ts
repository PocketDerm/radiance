import HomeNavIconPrimary from './svgs/home-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const HomeNavIcon = (props: IconProps) =>
  useIcon(HomeNavIconPrimary, HomeNavIconPrimary, props);
