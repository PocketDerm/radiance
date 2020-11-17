import PackagingGlyphPrimary from './svgs/packaging-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const PackagingGlyph = (props: IconProps) =>
  useIcon(PackagingGlyphPrimary, PackagingGlyphPrimary, props);
