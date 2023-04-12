export default interface ILink {
  url: string;
  as?: string;
  styleType?: string;
  text?: string;
  isUseDefaultClass?: boolean;
  children?: React.ReactNode;
}
