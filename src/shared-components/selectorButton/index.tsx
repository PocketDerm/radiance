import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import CircleSolidIcon from '../../svgs/icons/circle-solid-icon.svg';
import {
  OuterContainer,
  Selector,
  SelectorContainer,
  TextContainer,
  SelectorIcon,
} from './style';

export type SelectorType = 'radio' | 'checkbox';
export type SizeType = 'large' | 'small';
export type StyleType = 'primary' | 'secondary';

type SelectorButtonProps = {
  checked: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent,
  ) => void;
  selector?: SelectorType;
  size?: SizeType;
  type?: StyleType;
  [key: string]: unknown;
};

export const SelectorButton = ({
  checked,
  children = null,
  disabled = false,
  icon = null,
  onClick = undefined,
  selector = 'radio',
  size = 'small',
  type = 'primary',
  ...rest
}: SelectorButtonProps) => {
  const checkedIcon =
    selector === 'radio' ? (
      <CircleSolidIcon
        css={(theme) => css`
          color: ${theme.COLORS.white};
        `}
        width={8}
        height={8}
      />
    ) : (
      <CheckmarkIcon
        css={(theme) => css`
          color: ${theme.COLORS.white};
        `}
        width={16}
        height={16}
      />
    );

  return (
    <OuterContainer
      css={(theme) =>
        css`
          color: ${theme.COLORS.white};
        `
      }
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      selector={selector}
      role={selector}
      aria-checked={checked}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <SelectorContainer>
        <SelectorIcon disabled={disabled}>
          {checked ? checkedIcon : size === 'large' && icon}
        </SelectorIcon>
        <Selector
          type={type}
          checked={checked}
          disabled={disabled}
          selector={selector}
          size={size}
        />
      </SelectorContainer>

      {children && <TextContainer>{children}</TextContainer>}
    </OuterContainer>
  );
};

SelectorButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  selector: PropTypes.oneOf(['radio', 'checkbox']),
  size: PropTypes.oneOf(['large', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};
