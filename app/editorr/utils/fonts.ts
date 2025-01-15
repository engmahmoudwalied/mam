import { ICompactFont, IFont } from '../interfaces/editor';
import { groupBy } from 'lodash';

export const loadFonts = (fonts: { name: string; url: string }[]) => {
  const promisesList = fonts.map((font) => {
    return new FontFace(font.name, `url(${font.url})`)
      .load()
      .catch((err) => {
        console.error(`Error loading font: ${font.name}`, err);
        return null; // إرجاع null إذا فشل التحميل
      });
  });

  return new Promise((resolve, reject) => {
    Promise.all(promisesList)
      .then((res) => {
        let fontsLoaded = false;
        res.forEach((uniqueFont) => {
          if (uniqueFont instanceof FontFace && uniqueFont.family) {
            document.fonts.add(uniqueFont);
            fontsLoaded = true;
          }
        });
        resolve(fontsLoaded); // إرجاع true إذا تم تحميل أي خط
      })
      .catch((err) => {
        console.error('Error loading fonts:', err);
        reject(err);
      });
  });
};

const findDefaultFont = (fonts: IFont[]): IFont => {
  if (!fonts || fonts.length === 0) {
    console.warn("No fonts provided to findDefaultFont");
    return { fullName: 'Default', family: 'Default' }; // قيمة افتراضية
  }

  const regularFont = fonts.find(
    (font) => font.fullName && font.fullName.toLowerCase().includes('regular')
  );

  return regularFont ? regularFont : fonts[0];
};

export const getCompactFontData = (fonts: IFont[] = []): ICompactFont[] => {
  if (!fonts || fonts.length === 0) {
    console.warn("No fonts provided to getCompactFontData");
    return [];
  }

  const compactFontsMap: { [key: string]: ICompactFont } = {};
  const fontsGroupedByFamily = groupBy(fonts, (font) => font.family || "Unknown");

  Object.keys(fontsGroupedByFamily).forEach((family) => {
    const fontsInFamily = fontsGroupedByFamily[family];
    const defaultFont = findDefaultFont(fontsInFamily);
    const compactFont: ICompactFont = {
      family: family,
      styles: fontsInFamily,
      default: defaultFont,
    };
    compactFontsMap[family] = compactFont;
  });

  return Object.values(compactFontsMap);
};
