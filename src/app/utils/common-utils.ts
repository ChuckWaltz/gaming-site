import { ScreenSize } from '../enums/screen-size.enum';

export const getScreenSize = (): ScreenSize => {
  let width = window.innerWidth;
  if (width >= 1200) return ScreenSize.XL;
  if (width >= 728) return ScreenSize.Large;
  if (width >= 600) return ScreenSize.Medium;
  return ScreenSize.Small;
};
