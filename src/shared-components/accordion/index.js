import PropTypes from 'prop-types';
import React from 'react';

import { COLORS } from '../../constants';
import ChevronIcon from '../../svgs/icons/chevron-icon.svg';
import Thumbnails from './thumbnails';
import {
  AccordionBox,
  ArrowWrapper,
  TitleWrapper,
  ExpansionWrapper,
  Container,
  Content,
  Truncate,
} from './style';

const noop = () => {};

class Accordion extends React.Component {
  static propTypes = {
    /** node(s) that will render only when expanded */
    children: PropTypes.node.isRequired,
    /** when true, the accordion will be greyed out and the onClick prop will be disabled */
    disabled: PropTypes.bool,
    /** determine if the accordion is collapsed (false) or expanded (true) */
    isOpen: PropTypes.bool.isRequired,
    /** when true, border lines between accordions and title/children nodes will disappear */
    noBorder: PropTypes.bool,
    /** invoked when title node is clicked */
    onClick: PropTypes.func.isRequired,
    /** when true, the arrow is aligned flush with the right side of the component */
    rightAlignArrow: PropTypes.bool,
    /** node that will render whether collapsed or expanded */
    title: PropTypes.node.isRequired,
  };

  static defaultProps = {
    noBorder: false,
    disabled: false,
    rightAlignArrow: false,
  };

  static Container = Container;

  static Content = Content;

  static Thumbnails = Thumbnails;

  static Truncate = Truncate;

  contentRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      contentHeight: this.getContentHeight(props.isOpen),
    };
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  // prettier-ignore
  getContentHeight = isOpen => (
    `${
      isOpen && this.contentRef.current
        ? this.contentRef.current.clientHeight
        : '0'
    }px`
  )

  updateHeight() {
    const { isOpen } = this.props;
    const { contentHeight } = this.state;

    if (contentHeight !== this.getContentHeight(isOpen)) {
      this.setState({
        contentHeight: this.getContentHeight(isOpen),
      });
    }
  }

  render() {
    const { contentHeight } = this.state;
    const {
      title,
      isOpen,
      onClick,
      children,
      noBorder,
      disabled,
      rightAlignArrow,
    } = this.props;

    return (
      <AccordionBox isOpen={isOpen} noBorder={noBorder} disabled={disabled}>
        <TitleWrapper onClick={disabled ? noop : onClick} disabled={disabled}>
          <Truncate>{title}</Truncate>
          <ArrowWrapper rightAlign={rightAlignArrow}>
            <ChevronIcon
              rotate={isOpen ? 90 : 0}
              width={8}
              height={8}
              fill={COLORS.purple}
            />
          </ArrowWrapper>
        </TitleWrapper>
        <ExpansionWrapper contentHeight={contentHeight}>
          <div ref={this.contentRef}>{children}</div>
        </ExpansionWrapper>
      </AccordionBox>
    );
  }
}

export default Accordion;
