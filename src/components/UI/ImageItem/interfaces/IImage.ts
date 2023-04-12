export default interface IImage {
  src: string;
  styleType?: string;
  width?: number;
  height?: number;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}
