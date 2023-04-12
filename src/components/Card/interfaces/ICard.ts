export default interface ICard {
  label: string,
  src: string,
  price: number | null,
  handlerBuy: (id: string) => void,
  id: string,
}
