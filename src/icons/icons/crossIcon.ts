import CrossIconPrimary from './svgs/cross-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CrossIconPrimary, CrossIconPrimary, props);
