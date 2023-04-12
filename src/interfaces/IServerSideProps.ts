export default interface IServerSideProps {
  locale: string,
  res: {
    statusCode: number
  },
  req: {
    headers: {
      cookie?: string,
    }
  }
}
