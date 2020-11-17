import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import Style from './style';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
  height?: string | number;
  displayInline?: boolean;
  /**
   * Clockwise rotation, in degrees
   */
  rotate?: number;
  width?: string | number;
  [key: string]: unknown;
}

type IconComponentProps = Omit<IconProps, 'displayInline' | 'fill' | 'rotate'>;

/**
 * Helper component to pass the necessary props down to direct SVG imports, supported by SVGR.
 *
 * It's not strictly necessary but this helps with documenting usage.
 */
export const Icon = ({
  children,
  className,
  height = 16,
  width = 16,
  ...rest
}: IconComponentProps & { children: JSX.Element }) =>
  React.cloneElement(children, {
    className,
    height,
    width,
    ...rest,
  });

Icon.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  displayInline: PropTypes.bool,
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Clockwise rotation, in degrees
   */
  rotate: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const useIcon = (
  PrimaryIcon: SVGComponent,
  SecondaryIcon: SVGComponent,
  props: IconProps,
) => {
  const theme = useTheme();

  const ThemeIcon = theme.__type === 'primary' ? PrimaryIcon : SecondaryIcon;

  const { displayInline = false, fill, rotate = 0, ...rest } = props;

  // React.cloneElement not fully compatible with css prop: https://github.com/emotion-js/emotion/pull/1985/files#diff-6e9f0af93add92299d604a909f5b4a3c366a28c819127d9b7f33f3694cdfcffcR251
  return (
    <Icon {...rest}>
      <ThemeIcon css={Style.iconStyles({ displayInline, fill, rotate })} />
    </Icon>
  );
};
