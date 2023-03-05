// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* 2023-03-05 [next - param 응답받기 ] */
export default function handler(req, res) {
  res.status(200).json({ id: req.query.id })
}


