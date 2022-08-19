import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = { data: [{}] }) => {
  if (Array.isArray(pagesData.data)) {
    return pagesData.data.map((data) => {
      const {
        footer_text: footerHtml = '',
        slug = '',
        title = '',
        sections = [],
        menu = {},
      } = data.attributes;

      return {
        footerHtml,
        slug,
        title,
        sections: mapSections(sections),
        menu: mapMenu(menu),
      };
    });
  } else {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = pagesData.data.attributes;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  }
};
