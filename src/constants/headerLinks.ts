interface ILink {
  title: string;
  style: string;
  url: string;
}

type ILinks = Array<ILink>;

const headerLinks: ILinks = [
  { title: 'home', style: 'headerLink', url: '/' },
  { title: 'stripe', style: 'headerLink', url: '/stripe' },
  { title: 'paypal', style: 'headerLink', url: '/paypal' },
];

export default headerLinks;
