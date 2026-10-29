
import express from 'express';
 
const app = express();
const PORT = 3000;
 
// Dados definidos diretamente no código (nesta primeira atividade)
const escola = {
  nome: 'Escola Técnica Horizonte',
  cidade: 'São Paulo',
  tipo: 'Ensino Técnico'
};
 
const cursos = [
  { id: 1, nome: 'Desenvolvimento de Sistemas' },
  { id: 2, nome: 'Redes de Computadores' },
  { id: 3, nome: 'Administração' }
];
 
const professor = {
  nome: 'Carlos Almeida',
  disciplina: 'Programação Back-End 1'
};
 
// GET / -> texto com res.send()
app.get('/', (req, res) => {
  res.send('Bem-vindo à Central de Informações da Escola!');
});
 
// GET /status -> JSON
app.get('/status', (req, res) => {
  res.json({ status: 'online', mensagem: 'O servidor está funcionando' });
});
 
// GET /escola -> JSON (objeto)
app.get('/escola', (req, res) => {
  res.json(escola);
});
 
// GET /cursos -> JSON (array)
app.get('/cursos', (req, res) => {
  res.json(cursos);
});
 
// GET /professor -> JSON (objeto)
app.get('/professor', (req, res) => {
  res.json(professor);
});
 
// GET /ajuda -> texto com res.send()
app.get('/ajuda', (req, res) => {
  res.send(
    'Rotas disponíveis:\n' +
    'GET /           - mensagem de boas-vindas\n' +
    'GET /status     - mostra se o servidor está online\n' +
    'GET /escola     - dados da instituição\n' +
    'GET /cursos     - lista de cursos\n' +
    'GET /professor  - dados do professor\n' +
    'GET /ajuda      - esta lista de orientações\n' +
    'GET /requisicao - dados da requisição recebida (desafio extra)'
  );
});
 
// DESAFIO EXTRA: GET /requisicao -> investigando req
app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: 'Solicitação recebida com sucesso'
  });
});
 
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
