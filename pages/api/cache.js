// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

module.exports = (req, res) => {
  let date = new Date().toString()
  res.setHeader('Cache-control', 's-maxage=10, stale-while-revalidate=10')
  res.end(date)
}