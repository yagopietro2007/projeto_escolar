
import express from 'express';

const app = express();
const PORT = 3000;

// Rota 1: Página inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo à Central de Informações da Escola!');
});

// Rota 2: Estado do servidor
app.get('/status', (req, res) => {
    res.json({
        status: 'online',
        mensagem: 'O servidor está funcionando corretamente.'
    });
});

// Rota 3: Informações da escola
app.get('/escola', (req, res) => {
    res.json({
        nome: 'Escola Técnica do Futuro',
        cidade: 'São Paulo',
        tipo: 'Ensino Técnico'
    });
});

// Rota 4: Cursos disponíveis
app.get('/cursos', (req, res) => {
    const cursos = [
        { id: 1, nome: 'Desenvolvimento de Sistemas' },
        { id: 2, nome: 'Redes de Computadores' },
        { id: 3, nome: 'Administração' }
    ];

    res.json(cursos);
});

// Rota 5: Informações do professor
app.get('/professor', (req, res) => {
    res.json({
        nome: 'Marcos Oliveira',
        disciplina: 'Programação Back-End'
    });
});

// Rota 6: Orientações
app.get('/ajuda', (req, res) => {
    res.send(
        'Rotas disponíveis: /, /status, /escola, /cursos, /professor e /ajuda. ' +
        'Elas apresentam a página inicial, o estado do servidor, os dados da escola, ' +
        'os cursos, as informações do professor e as orientações do sistema.'
    );
});

// Desafio extra: Informações da requisição
app.get('/requisicao', (req, res) => {
    res.json({
        metodo: req.method,
        caminho: req.path,
        mensagem: 'Requisição recebida com sucesso!'
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
