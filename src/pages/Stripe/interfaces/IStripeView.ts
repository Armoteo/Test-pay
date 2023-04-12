export default interface IStripeView {
  redirectToCheckout: (id: string) => void;
  list: {
    id: string,
    unit_amount: number | null,
    product: {
      name: string,
      images: string
    }
  }[]
}
