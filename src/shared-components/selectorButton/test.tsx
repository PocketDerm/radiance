import React from 'react';
import { render, userEvent } from 'src/tests/testingLibraryHelpers';
import assert from 'src/utils/assert';

import { AcneOneGlyph } from '../../icons';

import { SelectorButton } from './index';

describe('<SelectorButton />', () => {
  describe('UI snapshots', () => {
    test('when children is undefined', () => {
      const { container } = render(
        <SelectorButton checked={false} onClick={() => undefined} />,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    test('when children is a node', () => {
      const { container } = render(
        <SelectorButton checked={false} onClick={() => undefined}>
          SelectorButton Text
        </SelectorButton>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    test('when checked type is primary', () => {
      const { container } = render(
        <SelectorButton checked onClick={() => undefined} type="primary">
          SelectorButton Text
        </SelectorButton>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    test('when checked type is secondary', () => {
      const { container } = render(
        <SelectorButton checked onClick={() => undefined} type="secondary">
          SelectorButton Text
        </SelectorButton>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    test('when is checkbox', () => {
      const { container } = render(
        <SelectorButton
          checked={false}
          onClick={() => undefined}
          selector="checkbox"
        >
          SelectorButton Text
        </SelectorButton>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    describe('when Icon added', () => {
      it("hides icon for checkbox with size 'small'", () => {
        const { container } = render(
          <SelectorButton
            checked={false}
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="small"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      it("hides icon for radio button size 'small'", () => {
        const { container } = render(
          <SelectorButton
            checked={false}
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="small"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      it("displays icon for checkbox with size 'large'", () => {
        const { container } = render(
          <SelectorButton
            checked={false}
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      it("displays icon for radio button with size 'large'", () => {
        const { container } = render(
          <SelectorButton
            checked={false}
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      it('displays check mark for checked checkbox', () => {
        const { container } = render(
          <SelectorButton
            checked
            onClick={() => undefined}
            selector="checkbox"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      it('displays check mark for checked radio button', () => {
        const { container } = render(
          <SelectorButton
            checked
            onClick={() => undefined}
            selector="radio"
            icon={<AcneOneGlyph width={16} height={16} />}
            size="large"
          >
            SelectorButton Text
          </SelectorButton>,
        );

        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('onClick callback', () => {
    it('is invoked on click', () => {
      const spy = jest.fn();
      const { container } = render(
        <SelectorButton checked={false} onClick={spy} />,
      );

      assert(container.firstElementChild);

      userEvent.click(container.firstElementChild);

      expect(spy).toHaveBeenCalled();
    });

    it('Does nothing when no onClick is set', () => {
      const { container } = render(<SelectorButton checked={false} />);
      assert(container.firstElementChild);
      // Just check that no exception is thrown
      userEvent.click(container.firstElementChild);
      userEvent.type(container.firstElementChild, '{enter}');
    });

    it('is invoked when enter is pressed', () => {
      const spy = jest.fn();
      const { container } = render(
        <SelectorButton checked={false} onClick={spy} />,
      );

      assert(container.firstElementChild);

      // https://github.com/testing-library/dom-testing-library/issues/405#issuecomment-602106188
      userEvent.type(container.firstElementChild, '{enter}');

      expect(spy).toHaveBeenCalled();
    });
  });
});
