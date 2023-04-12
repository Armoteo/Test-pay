export default function handler(req, res) {
  if (req.method === 'GET') {
    req.status(200).json({
      publishabKey: process.env.NEXT_PUBLIC_STRIPE_KEY,
    });
  } else {
    res.status(405).end('Method not allowed');
  }
}
