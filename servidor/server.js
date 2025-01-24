const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let usuarios = [
    {
        id: 1,
        nome: "João Carlos",
        email: "joaocarlos@gmail.com",
        senha: "joaocarlos123"
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@gmail.com",
        senha: "marialinda"
    },
    {
        id: 3,
        nome: "Douglas",
        email: "Douglas@gmail.com",
        senha: "peba"
    }
];

app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    
    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
    }

    const novoUsuario = { id: usuarios.length + 1, nome, email, senha };
    usuarios.push(novoUsuario);
    
    res.status(201).json(novoUsuario);
});

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id === parseInt(id));
    
    if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    
    res.status(200).json(usuario);
});

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    
    const usuario = usuarios.find(u => u.id === parseInt(id));
    
    if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    
    usuario.nome = nome || usuario.nome;
    usuario.email = email || usuario.email;
    usuario.senha = senha || usuario.senha
    
    res.status(200).json(usuario);
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const index = usuarios.findIndex(u => u.id === parseInt(id));
    
    if (index === -1) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    
    usuarios.splice(index, 1);
    res.status(204).send();
});

//////////// Produtos ////////////

let produtos = [
    {
        id: 1,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 167
    },
    {
        id: 2,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 220
    },
    {
        id: 3,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 600
    },
    {
        id: 4,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 120
    },
    {
        id: 5,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 240
    },
    {
        id: 6,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 250
    },
    {
        id: 7,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 900
    },
    {
        id: 8,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 580
    },
    {
        id: 9,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 210
    },
    {
        id: 10,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 340
    },
    {
        id: 11,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 230
    },
    {
        id: 12,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 400
    },
    {
        id: 13,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 500
    },
    {
        id: 14,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 200
    },
    {
        id: 15,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Masculino',
        preco: 300
    }
];

app.post('/produtos', (req, res) => {
    const { nomeProduto, marca, imagem, tipo, preco } = req.body;
    
    if (!nomeProduto || !marca || !imagem || !tipo || !preco) {
        return res.status(400).json({ erro: 'Nome do produto, marca, imagem, tipo e preço são obrigatórios' });
    }    
    
    const novoProduto = { id: produtos.length + 1, nomeProduto, marca, imagem, tipo, preco };
    produtos.push(novoProduto);
    
    res.status(201).json(novoProduto);
});

app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const produto = produtos.find(u => u.id === parseInt(id));
    
    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    
    res.status(200).json(produto);
});

app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { nomeProduto, marca, imagem, tipo, preco } = req.body;
    
    const produto = produtos.find(u => u.id === parseInt(id));
    
    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    
    produto.nomeProduto = nomeProduto || produto.nomeProduto;
    produto.marca = marca || produto.marca
    produto.imagem = imagem || produto.imagem;
    produto.tipo = tipo || produto.tipo;
    produto.preco = preco || produto.preco;
    
    res.status(200).json(produto);
});

app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(u => u.id === parseInt(id));
    
    if (index === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    
    produtos.splice(index, 1);
    res.status(204).send();
});

const port = 3000
const Servidor = { ok: true };
if (Servidor.ok) {
    console.log('Verificando. . .')
    setTimeout(() => {
        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        });
    }, 1800);
};
