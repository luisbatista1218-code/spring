// api/estoque.js
let estoque = { 1: 10, 2: 10 };

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.json(estoque);
  }
  
  if (req.method === 'POST') {
    estoque = req.body;
    return res.json({ success: true });
  }
}
