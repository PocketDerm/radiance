import React from 'react';
import PropTypes from 'prop-types';

import {
  ClickableContainer,
  FlexContainer,
  TextContainer,
  Text,
  SubText,
  IconWrapper,
  CheckmarkWrapper,
} from './style';
import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';

type OptionButtonProps = {
  borderRadius?: string;
  buttonType?: 'primary' | 'secondary';
  /**
   * Show custom icon in the unselected state
   */
  icon?: React.ReactNode;
  /**
   * Label
   */
  text: string;
  subtext?: React.ReactNode;
  onClick: () => void;
  optionType: 'radio' | 'checkbox';
  selected?: boolean;
  [key: string]: unknown;
};

export const OptionButton = ({
  borderRadius = '4px',
  buttonType = 'primary',
  icon,
  text,
  onClick,
  optionType,
  selected = false,
  subtext,
  ...rest
}: OptionButtonProps) => (
  <ClickableContainer
    borderRadius={borderRadius}
    onClick={onClick}
    type="button"
    role={optionType}
    containerType="clickable"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <FlexContainer>
      {icon ? (
        <IconWrapper
          selected={selected}
          optionType={optionType}
          buttonType={buttonType}
        >
          {selected ? <CheckmarkIcon width={16} height={16} /> : icon}
        </IconWrapper>
      ) : (
        <CheckmarkWrapper
          selected={selected}
          optionType={optionType}
          buttonType={buttonType}
        >
          <CheckmarkIcon width={16} height={16} />
        </CheckmarkWrapper>
      )}
      <TextContainer>
        <Text>{text}</Text>
        {subtext && <SubText>{subtext}</SubText>}
      </TextContainer>
    </FlexContainer>
  </ClickableContainer>
);

OptionButton.propTypes = {
  borderRadius: PropTypes.string,
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  optionType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  selected: PropTypes.bool,
};

export default OptionButton;
