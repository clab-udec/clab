import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'HOME',
      href: getPermalink('/'),
    },
    {
      text: 'CP & MM',
      href: getPermalink('/cp-mm'),
    },
    {
      text: 'THE GROUP',
      href: getPermalink('/team'),
    },
    {
      text: 'RESEARCH',
      href: getPermalink('/research'),
    },
    {
      text: 'PUBLICATIONS',
      href: getPermalink('/publications'),
    },
  ],

  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: '',
};