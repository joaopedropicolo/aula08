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

//////////////////////// PRODUTOS ////////////////////////

let produtos = [
    {
        id: 1,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Tênis',
        preco: 167
    },
    {
        id: 2,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Tênis',
        preco: 220
    },
    {
        id: 3,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Tênis',
        preco: 600
    },
    {
        id: 4,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Tênis',
        preco: 120
    },
    {
        id: 5,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Tênis',
        preco: 240
    },
    {
        id: 6,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Tênis',
        preco: 250
    },
    {
        id: 7,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Tênis',
        preco: 900
    },
    {
        id: 8,
        nomeProduto: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
        marca: "Asics",
        imagem: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        tipo: 'Tênis',
        preco: 580
    },
    {
        id: 9,
        nomeProduto: "Camisa Real Madrid Away Torcedor Adidas",
        marca: "Adidas",
        imagem: "https://static.netshoes.com.br/produtos/camisa-real-madrid-away-2324-sn-torcedor-adidas-masculina/42/FB8-8328-342/FB8-8328-342_zoom1.jpg",
        tipo: 'Camisa',
        preco: 349
    },
    {
        id: 10,
        nomeProduto: "Camisa Vasco I 24/25 Jogador Kappa Masculina",
        marca: "Kappa",
        imagem: "https://static.netshoes.com.br/produtos/camisa-vasco-i-2425-jogador-kappa-masculina/26/D24-6176-026/D24-6176-026_zoom1.jpg",
        tipo: 'Masculino',
        preco: 340
    },
    {
        id: 11,
        nomeProduto: "Camisa Palmeiras II 23/24 s/ nº Torcedor Puma",
        marca: "Puma",
        imagem: "https://static.netshoes.com.br/produtos/camisa-palmeiras-ii-2324-s-n-torcedor-puma-masculina/14/2I3-7590-014/2I3-7590-014_zoom1.jpg",
        tipo: 'Camisa',
        preco: 230
    },
    {
        id: 12,
        nomeProduto: "Mochila Adidas Linear Unissex",
        marca: "Adidas",
        imagem: "https://static.netshoes.com.br/produtos/mochila-adidas-linear-unissex/26/FB8-4525-026/FB8-4525-026_zoom1.jpg",
        tipo: 'Mochila',
        preco: 299
    },
    {
        id: 13,
        nomeProduto: "Jaqueta New Era MLB New York Yankees Desert Logo",
        marca: "MLB",
        imagem: "https://static.netshoes.com.br/produtos/jaqueta-new-era-mlb-new-york-yankees-desert-logo-masculina/38/IJX-5321-138/IJX-5321-138_zoom1.jpg",
        tipo: 'Jaqueta',
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
