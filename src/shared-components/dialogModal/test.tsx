import React from 'react';
import { primaryTheme } from 'src/constants/themes';
import { render } from 'src/tests/testingLibraryHelpers';

import { DialogModal } from './index';

const modalTitle = 'Dialog Modal Title';
const modalBody = 'Dialog Modal Children Content';

describe('<DialogModal />', () => {
  it('render children content correctly', () => {
    const { getAllByText } = render(
      <DialogModal title={modalTitle}>
        <div>{modalBody}</div>
      </DialogModal>,
    );

    getAllByText(modalTitle);
    getAllByText(modalBody);
  });

  it('renders dialog modal with custom color', () => {
    const { container } = render(
      <DialogModal modalColor={primaryTheme.COLORS.background}>
        <div>{modalBody}</div>
      </DialogModal>,
    );

    // DOM Traversal necessary to find the React portal element
    expect(container.parentNode?.lastChild).toMatchSnapshot();
  });
});
