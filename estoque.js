// api/estoque.js - VERDADEIRO
let estoque = { 1: 10, 2: 10 };

// ⬇️ ESTA É A LINHA QUE FALTAVA ⬇️
try {
  const saved = require('./estoque-data.json');
  estoque = saved;
} catch (e) {}

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.json(estoque);
  }
  
  if (req.method === 'POST') {
    estoque = req.body;
    
    // ⬇️ SALVA EM ARQUIVO ⬇️
    const fs = require('fs');
    fs.writeFileSync('./estoque-data.json', JSON.stringify(estoque));
    
    return res.json({ success: true });
  }
}
